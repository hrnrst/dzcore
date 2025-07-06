<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;
use App\Models\License;

class CheckLicenseStatus
{
    public function handle(Request $request, Closure $next)
    {
        $excludedRoutes = [
            'login', 'logout',
            'settings/subscriptions/liman',
            'api/settings/subscriptions/liman',
            'license/expired'
        ];

        foreach ($excludedRoutes as $route) {
            if ($request->is($route) || $request->is($route . '/*')) {
                return $next($request);
            }
        }

        $license = License::find('00000000-0000-0000-0000-000000000000');
        $licenseKey = $license?->data;

        if (!$licenseKey) {
            return response()->view('license.expired', [
                'message' => 'Lisans anahtarı tanımlı değil.'
            ], 403);
        }

        $status = Cache::remember('licensebox_status', 300, function () use ($licenseKey) {
            $response = Http::withHeaders([
                'Authorization' => 'Bearer ' . config('license.api_key')
            ])->post(config('license.api_url'), [
                'license_key' => $licenseKey,
                'product_id' => config('license.product_id'),
                'client_name' => config('license.client_name'),
            ]);

            return $response->json();
        });

        if (!isset($status['status']) || $status['status'] !== true) {
            return response()->view('license.expired', [
                'message' => $status['message'] ?? 'Lisans doğrulaması başarısız.'
            ], 403);
        }

        return $next($request);
    }

}
