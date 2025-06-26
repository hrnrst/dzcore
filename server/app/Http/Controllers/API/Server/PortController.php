<?php

namespace App\Http\Controllers\API\Server;

use App\Exceptions\JsonResponseException;
use App\Http\Controllers\Controller;
use App\Models\Permission;
use App\System\Command;
use Illuminate\Http\Response;
use Symfony\Component\HttpKernel\Exception\UnauthorizedHttpException;

/**
 * Server Port Controller
 */
class PortController extends Controller
{
    public function __construct()
    {
        if (! Permission::can(auth('api')->user()->id, 'dz', 'id', 'server_details')) {
            throw new JsonResponseException([
                'message' => 'Bu işlemi yapmak için yetkiniz yok!'
            ], '', Response::HTTP_FORBIDDEN);
        }
    }

    /**
     * Get open ports on server
     *
     * @return JsonResponse|Response
     *
     * @throws GuzzleException
     * @throws GuzzleException
     */
    public function index()
    {
        $arr = [];

        if (server()->isLinux()) {
            $output = trim(
                Command::runSudo(
                    "lsof -i -P -n | grep -v '\-' | awk -F' ' '{print $1,$3,$5,$8,$9}' | sed 1,1d"
                )
            );

            if (!empty($output)) {
                foreach (explode("\n", $output) as $line) {
                    $row = preg_split('/\s+/', trim($line));
                    if (count($row) >= 5) {
                        $arr[] = [
                            'name' => $row[0],
                            'username' => $row[1],
                            'ip_type' => $row[2],
                            'packet_type' => $row[3],
                            'port' => $row[4],
                        ];
                    }
                }
            }
        } else {
            // Windows sunucular için PowerShell üzerinden port listesini çekiyoruz
            $ip = server()->ip_address;
            $username = extensionDb('clientUsername');
            $password = extensionDb('clientPassword');
           
            $pythonPath = file_exists("/opt/limanpyenv/bin/python")
            ? "/opt/limanpyenv/bin/python"
            : "python3"; // local ya da varsayılan sistem python'ı

            $cmd = "$pythonPath /liman/scripts/win_service_manage.py '$ip' '$username' '$password' ports";
            $output = shell_exec($cmd);
            $data = json_decode($output, true);

            if (is_array($data)) {
                foreach ($data as $row) {
                    $arr[] = [
                        'name' => $row['process'] ?? '-',
                        'username' => '-', // PowerShell'de alınmak istenirse ayrı fetch gerekebilir
                        'ip_type' => 'IPv4', // PowerShell çıktısı detaylandırılırsa alınabilir
                        'packet_type' => $row['protocol'] ?? 'TCP',
                        'port' => $row['localAddress'] . ':' . $row['localPort'],
                    ];
                }
            } else {
                return response()->json([
                    'message' => 'Port listesi alınamadı.',
                    'error' => $output,
                ], 500);
            }
        }

        return response()->json($arr);
    }

}
