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
                    return [
                        'valid' => false,
                        'reason' => 'no_license',
                        'message' => 'Dz MYS lisansı bulunamadı.',
                    ];
                }


        $status = Cache::remember('licensebox_status', 300, function () use ($licenseKey) {
                    $response = Http::withoutVerifying()->withHeaders([
                        'LB-API-KEY' => config('license.api_key'),
                        'LB-URL'     => request()->getSchemeAndHttpHost(), 
                        'LB-IP'      => request()->ip(),                  
                        'LB-LANG'    => 'english',
                        'Content-Type' => 'application/json',
                    ])->post(config('license.verify_license_api_url'), [
                        'product_id'   => config('license.product_id'),
                        'license_code' => $licenseKey,
                        'client_name'  => config('license.client_name'),
                    ]);
                    return $response->json();
                });

        if (!isset($status['status']) || $status['status'] !== true) {
        
            $activeLicenseStatus = Cache::remember('licensebox_activeStatus', 320, function () use ($licenseKey) {
                $response = Http::withoutVerifying()->withHeaders([
                    'LB-API-KEY' => config('license.api_key'),
                    'LB-URL'     => request()->getSchemeAndHttpHost(), 
                    'LB-IP'      => request()->ip(),                  
                    'LB-LANG'    => 'english',
                    'Content-Type' => 'application/json',
                ])->post(config('license.active_license_api_url'), [
                    'verify_type' => 'non_envato',
                    'product_id'   => config('license.product_id'),
                    'license_code' => $licenseKey,
                    'client_name'  => config('license.client_name'),
                ]);


                return $response->json();
            });

            if (isset($activeLicenseStatus['status']) || $activeLicenseStatus['status'] == true) {
                $status = Cache::remember('licensebox_status', 300, function () use ($licenseKey) {
                            $response = Http::withoutVerifying()->withHeaders([
                                'LB-API-KEY' => config('license.api_key'),
                                'LB-URL'     => request()->getSchemeAndHttpHost(), 
                                'LB-IP'      => request()->ip(),                  
                                'LB-LANG'    => 'english',
                                'Content-Type' => 'application/json',
                            ])->post(config('license.verify_license_api_url'), [
                                'product_id'   => config('license.product_id'),
                                'license_code' => $licenseKey,
                                'client_name'  => config('license.client_name'),
                            ]);
                            return $response->json();
                        });
            }
            else{

                return [
                            'valid' => false,
                            'reason' => 'no_license',
                            'message' => $activeLicenseStatus['message'] ?? 'Lisans kontrolü sırasında bir hata oluştu.',
                        ];
            }
        }
        

        if (!isset($status['status']) || $status['status'] !== true) {
            return [
                        'valid' => false,
                        'reason' => 'no_license',
                        'message' => $status['message'] ?? 'Lisans doğrulaması başarısız.',
                    ];
        }

        return $next($request);
    }

}