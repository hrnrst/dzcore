<?php

namespace App\Http\Controllers\API\Server;

use App\Exceptions\JsonResponseException;
use App\Http\Controllers\Controller;
use App\Models\Permission;
use App\Models\Server;
use App\Models\SystemSettings;
use App\System\Command;
use Exception;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\GuzzleException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;


/**
 * Server Console Controller
 */
class ConsoleController extends Controller
{
    private $guacamoleUrl;
    private $guacamoleUser;
    private $guacamolePass;
    private $client;
    private $authToken;

    public function __construct()
    {
        // Observer'dan çağrıldığında auth kontrolü yapma
        if (auth('api')->check()) {
            if (! Permission::can(auth('api')->user()->id, 'liman', 'id', 'server_console')) {
                throw new JsonResponseException([
                    'message' => 'Bu işlemi yapmak için yetkiniz yok!'
                ], '', Response::HTTP_FORBIDDEN);
            }
        }
        
        // Hiçbir bağımlılık kontrolü yapmadan sadece ayarları yükle
        //$this->guacamoleUrl = 'http://192.168.1.25:8080/guacamole'; // localde 
        $this->guacamoleUrl = 'http://guacamole:8080/guacamole'; // servis adı
        $this->guacamoleUser = 'guacadmin';
        $this->guacamolePass = 'guacadmin';
        
        $this->client = new \GuzzleHttp\Client([
            'base_uri' => $this->guacamoleUrl,
            'timeout' => 10.0,
            'verify' => false
        ]);
    }

    /**
     * Get Guacamole auth token
     *
     * @return string
     * @throws Exception
     */
    
    // ADIM 1: Token'ı debug ederek backtick'in kaynağını bulmak
    private function getAuthToken(): string
    {
        if ($this->authToken) {
            // Debug: Mevcut token'ı kontrol et
            logger()->debug("Using cached token", [
                'raw_token' => $this->authToken,
                'token_length' => strlen($this->authToken),
                'last_char' => substr($this->authToken, -1),
                'hex_dump' => bin2hex($this->authToken)
            ]);
            return $this->authToken;
        }
        
        try {
            $response = $this->client->post('/guacamole/api/tokens', [
                'form_params' => [
                    'username' => $this->guacamoleUser,
                    'password' => $this->guacamolePass
                ]
            ]);
            
            $responseBody = $response->getBody()->getContents();
            $data = json_decode($responseBody, true);
           
            
            // Temizleme işlemi - daha agresif bir yaklaşım
            $cleanToken = preg_replace('/[^A-Z0-9]/', '', $data['authToken']);
         
            
            $this->authToken = $cleanToken;
            return $this->authToken;
        } catch (GuzzleException $e) {
            throw new Exception('Guacamole authentication failed: ' . $e->getMessage());
        }
    }
    
    /**
     * Add server to Guacamole
     *
     * @param Server $server
     * @return void
     * @throws Exception
     */
    public function addServerToGuacamole(Server $server): void
    {
        try {
            $token = $this->getAuthToken();
            
            $connectionType = $server->os == 'linux' ? 'ssh' : 'rdp';
            $port = $connectionType == 'ssh' ? '22' : '3389';
            

            // Sunucu modelinden kullanıcı adı ve şifre bilgilerini al
            // Sunucu eklenirken girilen değerleri kullan
            $username = $server->username;
            $password = $server->password;
            
            // connectionData nesnesini doğru formatta oluştur
            $connectionData = [
                'parentIdentifier' => 'ROOT',
                'name' => $server->name,
                'protocol' => $connectionType,
                'parameters' => (object) [
                    'hostname' => $server->ip_address,
                    'port' => $port,
                    'username' => $username,
                    'password' => $password
                ],
                'attributes' => (object) []
            ];
            
            if ($connectionType == 'rdp') {
                $connectionData['parameters']->{'ignore-cert'} = 'true';
                $connectionData['parameters']->security = 'any';

                // RDP için ek parametreler
                $connectionData['parameters']->{'color-depth'} = '24'; // 24-bit renk derinliği
                $connectionData['parameters']->width = '1920'; // Genişlik
                $connectionData['parameters']->height = '1080'; // Yükseklik
                $connectionData['parameters']->dpi = '96'; // DPI değeri
            }
            
            // Debug için log ekleyin
            logger()->debug("Sending connection data to Guacamole", [
                'server_name' => $server->name,
                'connection_data' => json_encode($connectionData)
            ]);
            
            // API isteği gönderme
            $response = $this->client->post('/guacamole/api/session/data/mysql/connections', [
                'query' => ['token' => $token],
                'json' => $connectionData
            ]);
            
            $responseBody = $response->getBody()->getContents();
            $result = json_decode($responseBody, true);
            
            // Debug: Response'u logla
            logger()->debug("Guacamole connection response", [
                'raw_response' => $responseBody,
                'parsed_result' => $result,
                'connection_id' => $result['identifier'] ?? 'not_found'
            ]);
            
            // Sunucuyu doğrudan güncelle
            if (isset($result['identifier'])) {
                // İşlem başarılı, identifier alındı
                $server->guacamole_connection_id = $result['identifier'];
                $server->save();
                
                // Güncelleme sonrası kontrol et
                $updatedServer = Server::find($server->id);
                logger()->info("Server updated with Guacamole connection", [
                    'server_id' => $server->id,
                    'connection_id' => $result['identifier'],
                    'saved_connection_id' => $updatedServer->guacamole_connection_id
                ]);
            } else {
                throw new Exception("Guacamole did not return a connection identifier");
            }
        } catch (Exception $e) {
            logger()->error("Failed to add server to Guacamole", [
                'server' => $server->name,
                'error' => $e->getMessage()
            ]);
            throw $e;
        }
    }
    
    
    /**
     * Remove server from Guacamole
     *
     * @param Server $server
     * @return void
     * @throws Exception
     */
    public function removeServerFromGuacamole(Server $server): void
    {
        if (!$server->guacamole_connection_id) {
            return;
        }
        
        $token = $this->getAuthToken();
        
        try {
            $response = $this->client->delete('/guacamole/api/session/data/mysql/connections/' . $server->guacamole_connection_id, [
                'query' => ['token' => $token]
            ]);

            $server->update([
                'guacamole_connection_id' => null
            ]);
            
        } catch (GuzzleException $e) {
            throw new Exception('Failed to remove server from Guacamole: ' . $e->getMessage());
        }
    }
    
    
    /**
     * Get connection URL for server
     *
     * @param Server $server
     * @return string
     * @throws Exception
     */
    /*private function getGuacamoleConnectionUrl(Server $server): string
    {
        if (!$server->guacamole_connection_id) {
            throw new Exception('Server not registered in Guacamole');
        }
        
        $token = $this->getAuthToken();
        $connectionId = $server->guacamole_connection_id;
        
        // Connection ID'yi base64'e çevir
        $encodedConnectionId = rtrim(base64_encode($connectionId), '=');
        
        // Sabit değerler kullanalım, bu exact formatı elde etmek için
        $protocol = "Yw";  // "c" için base64 
        $dbType = "teXNxbA";  // "mysql" için base64 formatı
        
        // Tüm bileşenleri birleştir
        $fullEncodedId = $encodedConnectionId . "A" . $protocol . "B" . $dbType;
        
        return $this->guacamoleUrl . "/#/client/$fullEncodedId?token=$token";
    }*/ //localde 

    private function getGuacamoleConnectionUrl(Server $server): string
    {
        if (!$server->guacamole_connection_id) {
            throw new Exception('Server not registered in Guacamole');
        }

        $token = $this->getAuthToken();

        // NULL byte ile ayırarak doğru formatı hazırla
        $connectionString = $server->guacamole_connection_id . "\0" . "c" . "\0" . "mysql";
        $fullEncodedId = base64_encode($connectionString);

        return $this->guacamoleUrl . "/#/client/$fullEncodedId?token=$token";
    }




    /**
     * Open Console Connection
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function openConsole(Request $request)
    {
        // Query parametresinden server_id alın
        $serverId = $request->query('server_id');
        
        // Sunucuyu bul - fresh() ile veritabanından taze bilgi al
        $server = Server::findOrFail($serverId)->fresh();
        
        // Connection ID'yi logla
        logger()->debug("Opening console for server", [
            'server_id' => $serverId,
            'server_name' => $server->name,
            'connection_id' => $server->guacamole_connection_id
        ]);
        
        if (!$server->guacamole_connection_id) {
            // Sunucu Guacamole'ye eklenmemişse ekle
            try {
                $this->addServerToGuacamole($server);
                
                // Veritabanından yeniden yükle
                $server = Server::find($serverId);
                
                logger()->debug("Added server to Guacamole", [
                    'server_id' => $serverId,
                    'new_connection_id' => $server->guacamole_connection_id
                ]);
            } catch (Exception $e) {
                return response()->json([
                    'status' => 'error',
                    'message' => 'Guacamole bağlantısı oluşturulamadı: ' . $e->getMessage()
                ], 500);
            }
        }
        
        try {
            // Sunucunun güncel connection_id değerini kontrol et
            if (!$server->guacamole_connection_id) {
                throw new Exception("Server has no Guacamole connection ID even after creation attempt");
            }
            
            $connectionUrl = $this->getGuacamoleConnectionUrl($server);
            
            return response()->json([
                'status' => 'ok',
                'url' => $connectionUrl
            ]);
        } catch (Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Konsol bağlantısı alınamadı: ' . $e->getMessage()
            ], 500);
        }
    }

    /**
     * Check Console Connection Status
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function checkConnection(Request $request)
    {
        $server = server();
        
        if (!$server->guacamole_connection_id) {
            return response()->json([
                'status' => 'ok',
                'connection_status' => [
                    'active' => false,
                    'connection_count' => 0
                ]
            ]);
        }
        
        $token = $this->getAuthToken();
        
        try {
            $response = $this->client->get("/guacamole/api/session/data/mysql/connections/{$server->guacamole_connection_id}?token=$token");
            $data = json_decode($response->getBody()->getContents(), true);
            
            return response()->json([
                'status' => 'ok',
                'connection_status' => [
                    'active' => isset($data['activeConnections']) && $data['activeConnections'] > 0,
                    'connection_count' => $data['activeConnections'] ?? 0
                ]
            ]);
            
        } catch (GuzzleException $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Bağlantı durumu kontrol edilemedi: ' . $e->getMessage()
            ], 500);
        }
    }

    /**
     * Refresh Guacamole Connection
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function refreshConnection(Request $request)
    {
        $server = server();
        
        try {
            // Önce mevcut bağlantıyı sil
            if ($server->guacamole_connection_id) {
                $this->removeServerFromGuacamole($server);
            }
            
            // Yeni bağlantı oluştur
            $this->addServerToGuacamole($server);
            
            return response()->json([
                'status' => 'ok',
                'message' => 'Bağlantı yenilendi'
            ]);
        } catch (Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Bağlantı yenilenemedi: ' . $e->getMessage()
            ], 500);
        }
    }

    /**
     * Remove Console Connection
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function removeConnection(Request $request)
    {
        $server = server();
        
        try {
            $this->removeServerFromGuacamole($server);
            
            return response()->json([
                'status' => 'ok',
                'message' => 'Bağlantı kaldırıldı'
            ]);
        } catch (Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Bağlantı kaldırılamadı: ' . $e->getMessage()
            ], 500);
        }
    }

    /**
     * Get Active Console Sessions
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function getActiveSessions(Request $request)
    {
        $server = server();
        
        if (!$server->guacamole_connection_id) {
            return response()->json([
                'status' => 'ok',
                'sessions' => []
            ]);
        }
        
        $token = $this->getAuthToken();
        
        try {
            $response = $this->client->get("/guacamole/api/session/data/mysql/activeConnections?token=$token");
            $data = json_decode($response->getBody()->getContents(), true);
            
            $sessions = [];
            foreach ($data as $connectionId => $sessionInfo) {
                if ($sessionInfo['connectionIdentifier'] == $server->guacamole_connection_id) {
                    $sessions[] = [
                        'id' => $connectionId,
                        'username' => $sessionInfo['username'],
                        'startDate' => $sessionInfo['startDate'],
                        'remoteHost' => $sessionInfo['remoteHost']
                    ];
                }
            }
            
            return response()->json([
                'status' => 'ok',
                'sessions' => $sessions
            ]);
            
        } catch (GuzzleException $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Aktif oturumlar alınamadı: ' . $e->getMessage()
            ], 500);
        }
    }

    /**
     * Kill Active Console Session
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function killSession(Request $request)
    {
        validate([
            'session_id' => 'required|string'
        ]);
        
        $sessionId = $request->input('session_id');
        $token = $this->getAuthToken();
        
        try {
            $this->client->delete("/guacamole/api/session/data/mysql/activeConnections/$sessionId?token=$token");
            
            return response()->json([
                'status' => 'ok',
                'message' => 'Oturum sonlandırıldı'
            ]);
        } catch (GuzzleException $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Oturum sonlandırılamadı: ' . $e->getMessage()
            ], 500);
        }
    }
    
    /**
     * Add server to Guacamole (static method for hooks)
     *
     * @param Server $server
     * @return void
     */
    public static function addServerHook(Server $server)
    {
        try {
            $controller = new self();
            $controller->addServerToGuacamole($server);
            
            logger()->info("Server {$server->name} added to Guacamole successfully");
        } catch (Exception $e) {
            logger()->error("Failed to add server {$server->name} to Guacamole: {$e->getMessage()}");
        }
    }
    
    /**
     * Remove server from Guacamole (static method for hooks)
     *
     * @param Server $server
     * @return void
     */
    public static function removeServerHook(Server $server)
    {
        try {
            $controller = new self();
            $controller->removeServerFromGuacamole($server);
            
            logger()->info("Server {$server->name} removed from Guacamole successfully");
        } catch (Exception $e) {
            logger()->error("Failed to remove server {$server->name} from Guacamole: {$e->getMessage()}");
        }
    }
    
    /**
     * Update server in Guacamole (static method for hooks)
     *
     * @param Server $server
     * @return void
     */
    public static function updateServerHook(Server $server)
    {
        if ($server->guacamole_connection_id) {
            try {
                $controller = new self();
                
                // Önce eski bağlantıyı sil
                $controller->removeServerFromGuacamole($server);
                
                // Yeni bağlantı oluştur
                $controller->addServerToGuacamole($server);
                
                logger()->info("Server {$server->name} updated in Guacamole successfully");
            } catch (Exception $e) {
                logger()->error("Failed to update server {$server->name} in Guacamole: {$e->getMessage()}");
            }
        }
    }
}