<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Models\License;
use mervick\aesEverywhere\AES256;
use Illuminate\Support\Facades\Cache;

class CheckLicenseStatus
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        // Hariç tutulan route'lar - bunlara her zaman erişim izni var
        $excludedRoutes = [
            'login',
            'logout',
            'settings/subscriptions/liman', // Lisans ekleme sayfası
            'api/settings/subscriptions/liman', // Lisans API endpoint'i
            'license/expired', // Lisans sona erme sayfası
        ];

        // Hariç tutulan route'lardan biriyse doğrudan geçiş izni ver
        foreach ($excludedRoutes as $route) {
            if ($request->is($route) || $request->is($route.'/*')) {
                return $next($request);
            }
        }

        // Performans için lisans durumunu önbellekte saklayalım (5 dakika)
        $licenseStatus = Cache::remember('license_status', 300, function () {
            try {
                // Lisansı veritabanından çek
                $license = License::find('00000000-0000-0000-0000-000000000000');
                
                // Lisans yoksa
                if (!$license) {
                    return [
                        'valid' => false,
                        'reason' => 'no_license',
                        'message' => 'Dz MYS lisansı bulunamadı.',
                    ];
                }
                
                // Lisansı deşifrelemeyi dene
                $data = json_decode(AES256::decrypt($license->data, md5(env('APP_KEY'))));
                
                // Deşifreleme başarısız ise
                if (!$data) {
                    return [
                        'valid' => false,
                        'reason' => 'invalid_license',
                        'message' => 'Dz MYS lisansı geçersiz veya bozuk.',
                    ];
                }
                
                // Süre dolmuş mu kontrol et
                $now = time() * 1000; // Milisaniye cinsinden şu anki zaman
                
                if ($data->coverage_end < $now) {
                    $expiry_date = date('d.m.Y', $data->coverage_end / 1000);
                    return [
                        'valid' => false,
                        'reason' => 'expired',
                        'message' => 'Dz MYS deneme süreniz ' . $expiry_date . ' tarihinde sona ermiştir.',
                        'expiry_date' => $expiry_date,
                        'company' => $data->issued,
                    ];
                }
                
                // Lisans geçerli - kalan süreyi hesapla
                $daysLeft = ceil(($data->coverage_end - $now) / (1000 * 86400));
                
                return [
                    'valid' => true,
                    'days_left' => $daysLeft,
                    'license_data' => $data,
                ];
                
            } catch (\Exception $e) {
                \Log::error('Lisans kontrolü sırasında hata: ' . $e->getMessage());
                return [
                    'valid' => false,
                    'reason' => 'error',
                    'message' => 'Lisans kontrolü sırasında bir hata oluştu: ' . $e->getMessage(),
                ];
            }
        });

        // Lisans geçerli değilse
        if (!$licenseStatus['valid']) {
            // API isteği ise JSON yanıt döndür
            if ($request->expectsJson() || $request->is('api/*')) {
                return response()->json([
                    'error' => 'license_error',
                    'message' => $licenseStatus['message'],
                    'reason' => $licenseStatus['reason'],
                ], 403);
            }
            
            // Normal istek ise sona erme sayfasına yönlendir
            return response()->view('license.expired', $licenseStatus, 403);
        }
        
        // Lisans geçerli ama süre az kaldıysa
        if ($licenseStatus['valid'] && isset($licenseStatus['days_left']) && $licenseStatus['days_left'] <= 7) {
            // Önce request'i işle
            $response = $next($request);
            
            // Eğer HTML içeren bir yanıt ise
            if ($response instanceof \Illuminate\Http\Response && 
                strpos($response->headers->get('Content-Type'), 'text/html') !== false) {
                
                $content = $response->getContent();
                
                // Banner HTML kodu
                $bannerHtml = '
                <div id="license-warning-banner" style="background-color: #f39c12; color: white; text-align: center; padding: 10px; position: fixed; top: 0; left: 0; right: 0; z-index: 9999;">
                    <strong>Uyarı:</strong> Liman MYS deneme sürenizin bitmesine ' . $licenseStatus['days_left'] . ' gün kaldı. 
                    <a href="mailto:info@example.com" style="color: white; text-decoration: underline;">Hemen uzatmak için iletişime geçin</a>
                    <button onclick="document.getElementById(\'license-warning-banner\').style.display=\'none\'" style="background: none; border: none; color: white; cursor: pointer; float: right; margin-right: 10px;">&times;</button>
                </div>
                <style>
                    body { padding-top: 40px; }
                </style>';
                
                // Banner'ı body etiketinin hemen sonrasına ekle
                if (strpos($content, '<body') !== false) {
                    $content = preg_replace('/<body[^>]*>/', '$0' . $bannerHtml, $content);
                    $response->setContent($content);
                }
            }
            
            return $response;
        }


        // İşlem devam edebilir
        return $next($request);
    }
}