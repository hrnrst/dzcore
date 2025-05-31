<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dz MYS - Lisans Uyarısı</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f8f9fa;
            color: #333;
            margin: 0;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
        }
        .container {
            max-width: 600px;
            padding: 30px;
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            text-align: center;
        }
        .logo {
            margin-bottom: 20px;
            max-width: 150px;
        }
        h1 {
            color: #e74c3c;
            margin-bottom: 20px;
        }
        p {
            font-size: 16px;
            line-height: 1.6;
            margin-bottom: 20px;
        }
        .btn {
            display: inline-block;
            background-color: #3498db;
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
            text-decoration: none;
            margin-top: 10px;
            transition: background-color 0.3s;
        }
        .btn:hover {
            background-color: #2980b9;
        }
        .contact-info {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #eee;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <div class="container">
        <img src="/images/liman-logo.png" alt="Dz MYS Logo" class="logo">
        
        <h1>
            @if(isset($reason) && $reason == 'expired')
                Deneme Süreniz Sona Erdi
            @elseif(isset($reason) && $reason == 'no_license')
                Lisans Bulunamadı
            @elseif(isset($reason) && $reason == 'invalid_license')
                Geçersiz Lisans
            @else
                Lisans Hatası
            @endif
        </h1>
        
        <p>{{ $message ?? 'Dz MYS lisansınız geçersiz veya süresi dolmuştur.' }}</p>
        
        @if(isset($reason) && $reason == 'expired')
            <p>Dz MYS'yi kullanmaya devam etmek için lütfen bizimle iletişime geçin.</p>
        @endif
        
        <a href="mailto:info@example.com" class="btn">İletişime Geç</a>
        
        <div class="contact-info">
            <p>
                <strong>E-posta:</strong> info@example.com<br>
                <strong>Telefon:</strong> +90 XXX XXX XX XX<br>
                <strong>Web:</strong> <a href="https://example.com">example.com</a>
            </p>
        </div>
    </div>
</body>
</html>