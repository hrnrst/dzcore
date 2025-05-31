<?php

namespace App\Observers;

use App\Models\Notification;
use App\Models\Server;
use App\Http\Controllers\API\Server\ConsoleController;

class ServerObserver
{
     /**
     * Listen to the Server created event.
     *
     * @param  \App\Models\Server  $server
     * @return void
     */
    public function created(Server $server)
    {
        // Mevcut bildirim gönderme
        Notification::send(
            'information',
            'SERVER_CREATED',
            [
                'name' => $server->name,
            ],
            'admins',
            true
        );
        
        // Guacamole'ye sunucu ekle
        try {
           
            // Tam sınıf yolunu kullanın
            $consoleController = new ConsoleController();
            logger()->info('ConsoleController created');
            
            $consoleController->addServerToGuacamole($server);
            logger()->info("Server {$server->name} added to Guacamole successfully");


        } catch (\Exception $e) {
            logger()->error("Failed to add server to Guacamole", [
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString()
            ]);
            
            // Bildirim gönder
            Notification::send(
                'error',
                'GUACAMOLE_ADD_FAILED',
                [
                    'name' => $server->name,
                    'error' => $e->getMessage()
                ],
                'admins',
                true
            );
        }
    }

    /**
     * Listen to the Server updated event.
     *
     * @param  \App\Models\Server  $server
     * @return void
     */
    public function updated(Server $server)
    {
        // Eğer kritik bilgiler değiştiyse Guacamole bağlantısını güncelle
        if ($server->guacamole_connection_id && 
            ($server->isDirty('ip_address') || 
             $server->isDirty('control_username') || 
             $server->isDirty('control_password') ||
             $server->isDirty('os'))) {
            logger()->info("Server {$server->name} updated in Guacamole successfully");

            /*try {
                $consoleController = new ConsoleController();
                
                // Önce eski bağlantıyı sil
                $consoleController->removeServerFromGuacamole($server);
                
                // Yeni bağlantı oluştur
                $consoleController->addServerToGuacamole($server);
                
                logger()->info("Server {$server->name} updated in Guacamole successfully");
            } catch (\Exception $e) {
                logger()->error("Failed to update server {$server->name} in Guacamole: {$e->getMessage()}");
                
                // Opsiyonel: Guacamole güncelleme hatası için bildirim
                Notification::send(
                    'error',
                    'GUACAMOLE_UPDATE_FAILED',
                    [
                        'name' => $server->name,
                        'error' => $e->getMessage()
                    ],
                    'admins',
                    true
                );
            }*/
        }
    }

    /**
     * Listen to the Server deleted event.
     *
     * @param  \App\Models\Server  $server
     * @return void
     */
    public function deleted(Server $server)
    {
        // Mevcut bildirim gönderme
        Notification::send(
            'information',
            'SERVER_DELETED',
            [
                'name' => $server->name,
            ],
            'admins',
            true
        );
        
        // Guacamole'den sunucuyu sil
        if ($server->guacamole_connection_id) {
            try {
                $consoleController = new ConsoleController();
                $consoleController->removeServerFromGuacamole($server);
                
                logger()->info("Server {$server->name} removed from Guacamole successfully");
            } catch (\Exception $e) {
                logger()->error("Failed to remove server {$server->name} from Guacamole: {$e->getMessage()}");
                
                // Opsiyonel: Guacamole silme hatası için bildirim
                Notification::send(
                    'error',
                    'GUACAMOLE_REMOVE_FAILED',
                    [
                        'name' => $server->name,
                        'error' => $e->getMessage()
                    ],
                    'admins',
                    true
                );
            }
        }
    }
}