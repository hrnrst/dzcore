<?php

namespace App\Http\Controllers\API\Settings;

use App\Http\Controllers\Controller;
use App\Models\Extension;
use App\Models\GolangLicense;
use App\Models\License;
use App\Models\Server;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use mervick\aesEverywhere\AES256;

/**
 * Subscription Controller
 */
class SubscriptionController extends Controller
{
    /**
     * Subscribable extensions
     *
     * @return mixed
     */
    public function index()
    {
        return Extension::where('license_type', 'golang_standard')
            ->orWhere('license_type', 'php')
            ->get();
    }

    /**
     * Servers list that extension uses
     *
     * @return mixed
     */
    public function servers(Extension $extension)
    {
        return $extension->servers()->get();
    }

    /**
     * Show extension license status
     *
     * @return GolangLicense|JsonResponse
     */
    public function show(Extension $extension, Server $server)
    {
        if (! $server) {
            return new GolangLicense([]);
        }

        if ($extension->license_type === 'php') {
            $license = Cache::rememberForever('extension_'.$extension->id.'_'.$server->id.'_license', function () use ($extension, $server) {
                $output = callExtensionFunction(
                    $extension,
                    $server,
                    [],
                    'index'
                );

                try {
                    $document = new \DOMDocument();
                    $contentType = '<meta http-equiv="Content-Type" content="text/html; charset=utf-8">';
                    @$document->loadHTML($contentType.$output);

                    // License data
                    $license = $document->getElementsByTagName('td');
                    $owner = $license->item(0)->nodeValue;
                    $timestamp = $license->item(1)->nodeValue;
                    $functions = $license->item(3)->nodeValue;
                } catch (\Exception $e) {
                    return null;
                }

                return [
                    'type' => 'php',
                    'valid' => true,
                    'owner' => $owner,
                    'timestamp' => $timestamp,
                    'functions' => $functions,
                ];
            });

            return response()->json($license);
        }

        // Cache fetched extension license if it's valid, until it changed on redis for fast re-fetching
        $license = Cache::rememberForever('extension_'.$extension->id.'_'.$server->id.'_license', function () use ($extension, $server) {
            $output = callExtensionFunction(
                $extension,
                $server,
                [
                    'endpoint' => 'license',
                    'type' => 'get',
                    'service' => 'admin',
                ]
            );
            $parsed = new GolangLicense($output);

            return $parsed->getValid() ? $parsed : null;
        });

        return response()->json($license);
    }

    /**
     * Dz license status
     *
     * @return JsonResponse
     *
     * @throws \Exception
     */
    public function dzLicense()
    {
        $license = License::find('00000000-0000-0000-0000-000000000000');

        if (! $license || empty($license->license_key)) {
            return response()->json([
                'message' => 'Kayıtlı bir lisans bulunamadı.',
            ], 404);
        }

        return response()->json([
            'license_key' => $license->license_key,
            'updated_at' => $license->updated_at,
        ]);
    }


    /**
     * Set Dz License
     *
     * @return JsonResponse
     *
     * @throws \Exception
     */
   public function setDzLicense(Request $request)
    {
        $request->validate([
            'license' => 'required|string',
        ]);

        $licenseKey = $request->license;

        // LicenseBox API üzerinden doğrula
        $response = Http::withHeaders([
            'Accept' => 'application/json',
            'Authorization' => 'Bearer ' . config('license.api_key'),
        ])->post(config('license.api_url'), [
            'license_key' => $licenseKey,
            'product_id' => config('license.product_id'),
            'client_name' => config('license.client_name'),
        ]);

        $json = $response->json();

        if (!$json || !$json['status']) {
            return response()->json([
                'license' => $json['message'] ?? 'Lisans doğrulaması başarısız.',
            ], 422);
        }

        // Doğrulama başarılı, lisansı kaydet
        $license = License::updateOrCreate(
            ['id' => '00000000-0000-0000-0000-000000000000'],
            ['license_key' => $licenseKey]
        );

        return response()->json([
            'message' => 'Lisans başarıyla doğrulandı ve kaydedildi.',
            'expires_at' => $json['data']['expiry_date'] ?? null,
        ]);
    }

}
