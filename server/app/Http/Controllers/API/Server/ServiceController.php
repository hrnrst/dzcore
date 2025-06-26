<?php

namespace App\Http\Controllers\API\Server;

use App\Exceptions\JsonResponseException;
use App\Http\Controllers\Controller;
use App\Models\Permission;
use App\System\Command;
use Exception;
use GuzzleHttp\Exception\GuzzleException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

/**
 * Server Service Controller
 */
class ServiceController extends Controller
{
    public function __construct()
    {
        if (! Permission::can(auth('api')->user()->id, 'dz', 'id', 'server_services')) {
            throw new JsonResponseException([
                'message' => 'Bu işlemi yapmak için yetkiniz yok!'
            ], '', Response::HTTP_FORBIDDEN);
        }
    }

    /**
     * Service List
     *
     * @return JsonResponse
     * @throws GuzzleException
     */
    public function index()
    {
        $services = [];
        if (server()->isLinux()) {
            $raw = Command::runSudo(
                "systemctl list-units --all | grep service | awk '{print $1 \":\"$2\" \"$3\" \"$4\":\"$5\" \"$6\" \"$7\" \"$8\" \"$9\" \"$10}'",
                false
            );
            foreach (explode("\n", $raw) as &$package) {
                if ($package == '') {
                    continue;
                }
                if (str_contains($package, '●')) {
                    $package = explode('●:', $package)[1];
                }
                $row = explode(':', trim($package));
                try {
                    if (str_contains($row[0], 'sysusers.service')) {
                        continue;
                    }

                    $status = explode(' ', $row[1]);
                    $services[] = [
                        'name' => strlen($row[0]) > 50 ? substr($row[0], 0, 50) . '...' : $row[0],
                        'description' => strlen($row[2]) > 60 ? substr($row[2], 0, 60) . '...' : $row[2],
                        'status' => [
                            'loaded' => $status[0] == 'loaded',
                            'active' => $status[1] == 'active',
                            'running' => $status[2],
                        ],
                    ];
                } catch (Exception) {
                }
            }

            $raw = Command::runSudo(
                "systemctl list-unit-files --state=disabled | grep service | awk '{print $1 \":\"$2}'",
                false
            );

            foreach (explode("\n", $raw) as &$package) {
                if ($package == '') {
                    continue;
                }
                $row = explode(':', trim($package));
                $services[] = [
                    'name' => strlen($row[0]) > 50 ? substr($row[0], 0, 50) . '...' : $row[0],
                    'status' => $row[1] == 'disabled',
                ];
            }
        } else {
            $raw = Command::run("powershell -Command \"Get-Service | Select-Object Name, DisplayName, Status | ConvertTo-Json -Compress\"");
            $windowsServices = json_decode($raw, true);
        
            // Status enum map
            $statusMap = [
                1 => 'stopped',
                2 => 'startpending',
                3 => 'stoppending',
                4 => 'running',
                5 => 'continuepending',
                6 => 'pausepending',
                7 => 'paused',
            ];
        
            foreach ($windowsServices as $service) {
                $statusRaw = $service['Status'] ?? '';
                $statusNormalized = is_int($statusRaw)
                    ? ($statusMap[$statusRaw] ?? 'unknown')
                    : strtolower($statusRaw);
        
                $services[] = [
                    'name' => $service['Name'] ?? '',
                    'description' => $service['DisplayName'] ?? '',
                    'status' => [
                        'loaded' => true,
                        'active' => $statusNormalized === 'running',
                        'running' => $statusNormalized,
                    ]
                ];
            }
        }

        return response()->json($services);
    }

    /**
     * Start service
     *
     * @param Request $request
     * @return JsonResponse
     * @throws GuzzleException
     */
    public function start(Request $request)
    {
        validate([
            'services' => 'required',
        ]);

        $services = request('services');
        if (server()->isLinux()) {
            foreach ($services as $service) {
                Command::runSudo('systemctl start @{:service}', [
                    'service' => $service,
                ]);
            }
        } 
        else {
            $ip = server()->ip_address;
            $username = extensionDb('clientUsername');
            $password = extensionDb('clientPassword');
        
            $pythonPath = file_exists("/opt/limanpyenv/bin/python")
                        ? "/opt/limanpyenv/bin/python"
                        : "python3"; // local ya da varsayılan sistem python'ı


            foreach ($services as $service) {
                $cmd = "$pythonPath /liman/scripts/win_service_manage.py '$ip' '$username' '$password' start '$service'";
                shell_exec($cmd); // veya exec, process() vb.
            }
        }

        return response()->json([
            'message' => 'Servis başlatıldı.'
        ]);
    }

    /**
     * Stop service
     *
     * @param Request $request
     * @return JsonResponse
     * @throws GuzzleException
     */
    public function stop(Request $request)
    {
        validate([
            'services' => 'required',
        ]);

        $services = request('services');

        if (server()->isLinux()) {
            foreach ($services as $service) {
                Command::runSudo('systemctl stop @{:service}', [
                    'service' => $service,
                ]);
            }
        } else {
            // Windows için Python script üzerinden servis durdurma
            $ip = server()->ip_address;
            $username = extensionDb('clientUsername');
            $password = extensionDb('clientPassword');
            
            $pythonPath = file_exists("/opt/limanpyenv/bin/python")
            ? "/opt/limanpyenv/bin/python"
            : "python3"; // local ya da varsayılan sistem python'ı

            foreach ($services as $service) {
                $cmd = "$pythonPath /liman/scripts/win_service_manage.py '$ip' '$username' '$password' stop '$service'";
                $output = shell_exec($cmd);
                $data = json_decode($output, true);

                if (!isset($data['status']) || $data['status'] !== 'ok') {
                    return response()->json([
                        'message' => $data
                    ]);
                }
            }
        }

        return response()->json([
            'message' => 'Servis durduruldu.',
        ]);
    }


    /**
     * Restart service
     *
     * @param Request $request
     * @return JsonResponse
     * @throws GuzzleException
     */
    public function restart(Request $request)
    {
        validate([
            'services' => 'required',
        ]);

        $services = request('services');

        if (server()->isLinux()) {
            foreach ($services as $service) {
                Command::runSudo('systemctl restart @{:service}', [
                    'service' => $service,
                ]);
            }
        } else {
            // Windows için Python script üzerinden servis restart
            $ip = server()->ip_address;
            $username = extensionDb('clientUsername');
            $password = extensionDb('clientPassword');
            
            $pythonPath = file_exists("/opt/limanpyenv/bin/python")
            ? "/opt/limanpyenv/bin/python"
            : "python3"; // local ya da varsayılan sistem python'ı

            foreach ($services as $service) {
                $cmd = "$pythonPath /liman/scripts/win_service_manage.py '$ip' '$username' '$password' restart '$service'";
                $output = shell_exec($cmd);
                $data = json_decode($output, true);

                if (!isset($data['status']) || $data['status'] !== 'ok') {
                    return response()->json([
                        'message' => $data
                    ]);
                }
            }
        }

        return response()->json([
            'message' => 'Servis yeniden başlatıldı.',
        ]);
    }


    /**
     * Enable service
     *
     * @param Request $request
     * @return JsonResponse
     * @throws GuzzleException
     * @throws JsonResponseException
     */
    public function enable(Request $request)
    {
        validate([
            'services' => 'required',
        ]);

        $services = request('services');

        if (server()->isLinux()) {
            foreach ($services as $service) {
                Command::runSudo('systemctl enable @{:service}', [
                    'service' => $service,
                ]);
            }
        } else {
            $ip = server()->ip_address;
            $username = extensionDb('clientUsername');
            $password = extensionDb('clientPassword');
           
            $pythonPath = file_exists("/opt/limanpyenv/bin/python")
            ? "/opt/limanpyenv/bin/python"
            : "python3"; // local ya da varsayılan sistem python'ı

            foreach ($services as $service) {
                $cmd = "$pythonPath /liman/scripts/win_service_manage.py '$ip' '$username' '$password' enable '$service'";
                $output = shell_exec($cmd);
                $data = json_decode($output, true);

                if (!isset($data['status']) || $data['status'] !== 'ok') {
                    return response()->json([
                        'message' => $data
                    ]);
                }
            }
        }

        return response()->json([
            'message' => 'Servis devreye alındı.',
        ]);
    }


    /**
     * Disable service
     *
     * @param Request $request
     * @return JsonResponse
     * @throws GuzzleException
     */
    public function disable(Request $request)
    {
        validate([
            'services' => 'required',
        ]);

        $services = request('services');

        if (server()->isLinux()) {
            foreach ($services as $service) {
                Command::runSudo('systemctl disable @{:service}', [
                    'service' => $service,
                ]);
            }
        } else {
            $ip = server()->ip_address;
            $username = extensionDb('clientUsername');
            $password = extensionDb('clientPassword');

            $pythonPath = file_exists("/opt/limanpyenv/bin/python")
            ? "/opt/limanpyenv/bin/python"
            : "python3"; // local ya da varsayılan sistem python'ı

            foreach ($services as $service) {
                $cmd = "$pythonPath /liman/scripts/win_service_manage.py '$ip' '$username' '$password' disable '$service'";
                $output = shell_exec($cmd);
                $data = json_decode($output, true);

                if (!isset($data['status']) || $data['status'] !== 'ok') {
                    return response()->json([
                        'message' => $data
                    ]);
                }
            }
        }

        return response()->json([
            'message' => 'Servis devreden çıkarıldı.'
        ]);
    }


    /**
     * Service status
     *
     * @param Request $request
     * @return JsonResponse
     * @throws GuzzleException
     */
    public function status(Request $request)
    {
        $request->validate([
            'service_name' => 'required',
        ]);

        $service = request('service_name');
        if (server()->isLinux()) {
            return response()->json(Command::runSudo('systemctl status @{:service}', [
                'service' => $service,
            ]));
        }

        $ip = server()->ip_address;
        $username = extensionDb('clientUsername');
        $password = extensionDb('clientPassword');

        $pythonPath = file_exists("/opt/limanpyenv/bin/python")
            ? "/opt/limanpyenv/bin/python"
            : "python3"; // local ya da varsayılan sistem python'ı

        $cmd = "$pythonPath /liman/scripts/win_service_manage.py '$ip' '$username' '$password' status '$service'";
        $output = shell_exec($cmd);
        $data = json_decode($output, true);

        if (json_last_error() !== JSON_ERROR_NONE) {
            return response()->json([
                'error' => 'Python çıktısı alınamadı',
                'raw' => $output,
            ], 500);
        }

        return response()->json($data);
    }

}
