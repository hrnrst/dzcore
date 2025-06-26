<?php

namespace App\Http\Controllers\API\Server;

use App\Exceptions\JsonResponseException;
use App\Http\Controllers\Controller;
use App\Models\Permission;
use App\Models\Server;
use App\System\Command;
use Carbon\Carbon;
use GuzzleHttp\Exception\GuzzleException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

/**
 * Server Details Controller
 */
class DetailsController extends Controller
{
    /**
     * List servers that user can access
     *
     * @return JsonResponse
     */
    public function index()
    {
        return Server::orderBy('updated_at', 'DESC')
            ->get()
            ->filter(function ($server) {
                return Permission::can(auth('api')->user()->id, 'server', 'id', $server->id);
            })
            ->map(function ($server) {
                $server->extension_count = $server->extensions()->filter(function ($extension) {
                    return Permission::can(auth('api')->user()->id, 'extension', 'id', $extension->id);
                })->count();

                return $server;
            })
            ->values();
    }

    /**
     * Get single server detail
     *
     * @return JsonResponse|Response
     * @throws GuzzleException
     */
    public function server()
    {
        $server = server();
        if (! $server) {
            throw new JsonResponseException([
                'message' => 'Sunucu bulunamadı.'
            ], Response::HTTP_NOT_FOUND);
        }

        if (! Permission::can(auth('api')->user()->id, 'dz', 'id', 'server_details')) {
            throw new JsonResponseException([
                'message' => 'Bu işlemi yapmak için yetkiniz yok!'
            ], '', Response::HTTP_FORBIDDEN);
        }

        try {
            if ($server->isWindows()) {
                preg_match('/\d+/', (string) $server->getUptime(), $output);
                $uptime = $output[0];
            } else {
                $uptime = $server->getUptime();
            }
            $uptime = Carbon::parse($uptime)->diffForHumans();
        } catch (\Throwable) {
            $uptime = __('Uptime parse edemiyorum.');
        }

        $outputs = [
            'hostname' => $server->getHostname(),
            'os' => $server->getVersion(),
            'services' => $server->getNoOfServices(),
            'processes' => $server->getNoOfProcesses(),
            'uptime' => $uptime,
        ];

        if ($server->canRunCommand()) {
            $outputs['user'] = Command::run('whoami');
        }

        $server['is_favorite'] = $server->isFavorite();

        return response()->json([
            'server' => $server,
            'details' => $outputs,
        ]);
    }

    /**
     * Get stats of server for graphs
     *
     * @return array
     * @throws GuzzleException
     */
    public function stats()
{
    if (!Permission::can(auth('api')->user()->id, 'dz', 'id', 'server_details')) {
        throw new JsonResponseException([
            'message' => 'Bu işlemi yapmak için yetkiniz yok!'
        ], '', Response::HTTP_FORBIDDEN);
    }

    $server = server();

    if ($server->isLinux()) {
        $cores = str_replace("cpu cores\t: ", '', trim(explode("\n", Command::runSudo("cat /proc/cpuinfo | grep 'cpu cores'"))[0]));

        $cpuPercent = Command::runSudo("ps -eo %cpu --no-headers | grep -v 0.0 | awk '{s+=$1} END {print s/NR*10}'");
        $ramPercent = Command::runSudo("free | grep Mem | awk '{print $3/$2 * 100.0}'");
        $ioPercent = (float) Command::runSudo("iostat -d | tail -n +4 | head -n -1 | awk '{s+=$2} END {print s}'");

        $firstDown = $this->calculateNetworkBytes();
        $firstUp = $this->calculateNetworkBytes(false);
        sleep(1);
        $secondDown = $this->calculateNetworkBytes();
        $secondUp = $this->calculateNetworkBytes(false);

        return [
            'cpu' => round((float) $cpuPercent / $cores, 2),
            'ram' => round((float) $ramPercent, 2),
            'io' => round((float) $ioPercent, 2),
            'network' => [
                'download' => round(($secondDown - $firstDown) / 1024 / 2, 2),
                'upload' => round(($secondUp - $firstUp) / 1024 / 2, 2),
            ],
        ];
    }

    // 🔒 Windows sistemi için:
    if ($server->isWindows()) {
        $ip = $server->ip_address;
        $username = extensionDb('clientUsername');
        $password = extensionDb('clientPassword');

        $pythonPath = file_exists("/opt/limanpyenv/bin/python")
            ? "/opt/limanpyenv/bin/python"
            : "python3"; // local ya da varsayılan sistem python'ı

        $cmd = "$pythonPath /dz/scripts/win_metrics.py '$ip' '$username' '$password'";
        $output = shell_exec($cmd);

        if (!$output) {
            return response()->json([
                'error' => 'Python çıktısı alınamadı',
                'command' => $cmd
            ], 500);
        }

        $data = json_decode($output, true);

        if (json_last_error() !== JSON_ERROR_NONE) {
            throw new JsonResponseException([
                'message' => 'Geçersiz JSON çıktısı!'
            ], '', Response::HTTP_INTERNAL_SERVER_ERROR);
        }

        return [
            'cpu' => (float) ($data['CPUPercent'] ?? 0),
            'ram' => (float) str_replace('%', '', $data['RAMUsage'] ?? 0),
            'io' => (float) ($data['IO'] ?? 0),
            'network' => [
                'download' => (float) ($data['NetworkDownload'] ?? 0),
                'upload' => (float) ($data['NetworkUpload'] ?? 0),
            ],
        ];
    }

    return [
        'cpu' => 0,
        'ram' => 0,
        'io' => 0,
        'network' => [
            'download' => 0,
            'upload' => 0,
        ],
    ];
}

    /**
     * Get server specs
     *
     * @return JsonResponse
     * @throws GuzzleException
     */
    public function specs()
    {
        if (! Permission::can(auth('api')->user()->id, 'dz', 'id', 'server_details')) {
            throw new JsonResponseException([
                'message' => 'Bu işlemi yapmak için yetkiniz yok!'
            ], '', Response::HTTP_FORBIDDEN);
        }
    
        $server = server();
    
        if ($server->isWindows()) {
            $ip = $server->ip_address;

              // 🔐 Güvenli şekilde şifreli username/password çözümü:
            $username = extensionDb('clientUsername');
            $password = extensionDb('clientPassword');
            
            $pythonPath = file_exists("/opt/limanpyenv/bin/python")
            ? "/opt/limanpyenv/bin/python"
            : "python3"; // local ya da varsayılan sistem python'ı

            $cmd = "$pythonPath /dz/scripts/win_stats.py '$ip' '$username' '$password'";
            $output = shell_exec($cmd);
        
            if (!$output) {
                return response()->json([
                    'error' => 'Python çıktısı alınamadı',
                    'command' => $cmd
                ], 500);
            }
        
            $data = json_decode($output, true);
        
            if (json_last_error() !== JSON_ERROR_NONE) {
                return response()->json([
                    'error' => 'Geçersiz JSON çıktısı',
                    'json_error' => json_last_error_msg(),
                    'raw_output' => $output
                ], 500);
            }
        
            return response()->json([
                'cpu' => is_array($data['CPU']) ? (count(array_unique($data['CPU'])) == 1
                    ? count($data['CPU']) . 'x ' . $data['CPU'][0]
                    : implode(", ", $data['CPU'])) : ($data['CPU'] ?? 'Bilinmiyor'),
                'ram' => $data['RAM'] ?? 'Bilinmiyor',
                'model' => $data['Model'] ?? 'Bilinmiyor',
                'manufacturer' => $data['Manufacturer'] ?? 'Bilinmiyor',
            ]);
        }
    
        // Linux için
        $cores = str_replace("cpu cores\t: ", '', trim(explode("\n", Command::runSudo("cat /proc/cpuinfo | grep 'cpu cores'"))[0]));
        $cpu = str_replace("model name\t: ", '', trim(explode("\n", Command::runSudo("cat /proc/cpuinfo | grep 'model name'"))[0]));
        $ram = Command::runSudo('free -m | grep ^Mem | tr -s " " | cut -f2 -d" "');
        $ram = ($ram > 1000) ? round($ram / 1000, 1) . ' GB' : $ram . ' MB';
        $model = Command::runSudo('dmidecode -s system-product-name');
        $manufacturer = Command::runSudo('dmidecode -s system-manufacturer');
    
        return response()->json([
            'cpu' => $cores . 'x ' . $cpu,
            'ram' => $ram,
            'model' => $model,
            'manufacturer' => $manufacturer,
        ]);
    }
    

    /**
     * Top CPU using processes
     *
     * @return Application|Factory|View
     *
     * @throws GuzzleException
     */
    public function topCpuProcesses()
    {
        if (! Permission::can(auth('api')->user()->id, 'dz', 'id', 'server_details')) {
            throw new JsonResponseException([
                'message' => 'Bu işlemi yapmak için yetkiniz yok!'
            ], '', Response::HTTP_FORBIDDEN);
        }

        if (server()->isWindows()) {
            $ip = server()->ip_address;
            $username = extensionDb("clientUsername");
            $password = extensionDb("clientPassword");

            $pythonPath = file_exists("/opt/limanpyenv/bin/python")
            ? "/opt/limanpyenv/bin/python"
            : "python3"; // local ya da varsayılan sistem python'ı

            $cmd = "$pythonPath /dz/scripts/win_top_cpu.py '$ip' '$username' '$password'";
            $output = shell_exec($cmd);

            if (!$output) {
                return response()->json(['error' => 'Python çıktısı alınamadı'], 500);
            }

            $data = json_decode($output, true);
            if (json_last_error() !== JSON_ERROR_NONE) {
                return response()->json(['error' => 'JSON parse hatası', 'raw' => $output], 500);
            }

            return response()->json($data);
        }

        // Linux için mevcut kod
        $output = trim(
            Command::runSudo(
                "ps -eo pid,%cpu,user,cmd --sort=-%cpu --no-headers | head -n 5 | awk '{print $1\"*-*\"$2\"*-*\"$3\"*-*\"$4}'"
            )
        );

        return response()->json($this->parsePsOutput($output));
    }


    /**
     * Get top memory processes
     *
     * @return Application|Factory|View
     *
     * @throws GuzzleException
     */
    public function topMemoryProcesses()
    {
        if (!Permission::can(auth('api')->user()->id, 'dz', 'id', 'server_details')) {
            throw new JsonResponseException([
                'message' => 'Bu işlemi yapmak için yetkiniz yok!'
            ], '', Response::HTTP_FORBIDDEN);
        }

        $server = server();

        if ($server->isWindows()) {
            $username = extensionDb('clientUsername');
            $password = extensionDb('clientPassword');
            $ip = $server->ip_address;

            $pythonPath = file_exists("/opt/limanpyenv/bin/python")
            ? "/opt/limanpyenv/bin/python"
            : "python3"; // local ya da varsayılan sistem python'ı

            $cmd = "$pythonPath /dz/scripts/win_top_ram.py '$ip' '$username' '$password'";
            $output = shell_exec($cmd);

            if (!$output) {
                return response()->json([
                    'error' => 'Python çıktısı alınamadı',
                    'command' => $cmd
                ], 500);
            }

            $data = json_decode($output, true);

            if (json_last_error() !== JSON_ERROR_NONE) {
                return response()->json([
                    'error' => 'JSON parse hatası',
                    'raw' => $output
                ], 500);
            }

            return response()->json($data);
        }

        // Linux için mevcut yapı
        $output = trim(
            Command::runSudo(
                "ps -eo pid,%mem,user,cmd --sort=-%mem --no-headers | head -n 5 | awk '{print $1\"*-*\"$2\"*-*\"$3\"*-*\"$4}'"
            )
        );

        return response()->json($this->parsePsOutput($output));
    }


    /**
     * Top disk usage
     *
     * @return Application|Factory|View
     *
     * @throws GuzzleException
     */
        public function topDiskUsage()
    {
        if (! Permission::can(auth('api')->user()->id, 'dz', 'id', 'server_details')) {
            throw new JsonResponseException([
                'message' => 'Bu işlemi yapmak için yetkiniz yok!'
            ], '', Response::HTTP_FORBIDDEN);
        }

        $server = server();

        if ($server->isWindows()) {
            $username = extensionDb('clientUsername');
            $password = extensionDb('clientPassword');
            $ip = $server->ip_address;

            $pythonPath = file_exists("/opt/limanpyenv/bin/python")
            ? "/opt/limanpyenv/bin/python"
            : "python3"; // local ya da varsayılan sistem python'ı

            $cmd = "$pythonPath /dz/scripts/win_disk_usage.py '$ip' '$username' '$password'";
            $output = shell_exec($cmd);

            if (!$output) {
                return response()->json([
                    'error' => 'Python çıktısı alınamadı',
                    'command' => $cmd
                ], 500);
            }

            $data = json_decode($output, true);

            if (json_last_error() !== JSON_ERROR_NONE) {
                return response()->json([
                    'error' => 'JSON parse hatası',
                    'raw' => $output
                ], 500);
            }

            return response()->json($data);
        }

        // Linux kısmı
        $output = trim(
            Command::runSudo(
                "df --output=pcent,source,size,used -hl -x squashfs -x tmpfs -x devtmpfs | sed -n '1!p' | head -n 5 | sort -hr | awk '{print $1\"*-*\"$2\"*-*\"$3\"*-*\"$4}'"
            )
        );

        return response()->json($this->parseDfOutput($output));
    }


    /**
     * Add server to favorites
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function favorite(Request $request)
    {
        auth('api')->user()
            ->myFavorites()
            ->toggle($request->server_id);

        return response()->json([
            'message' => 'İşlem başarılı.'
        ]);
    }

    /**
     * Calculate network flow as bytes
     *
     * @return int
     *
     * @throws GuzzleException
     */
    private function calculateNetworkBytes($download = true)
    {
        $text = $download ? 'rx_bytes' : 'tx_bytes';
        $count = 0;
        $raw = Command::runSudo('cat /sys/class/net/*/statistics/:text:', [
            'text' => $text,
        ]);
        foreach (explode("\n", trim((string) $raw)) as $data) {
            $count += intval($data);
        }

        return $count;
    }

    /**
     * Parse ps-aux output
     *
     * @return array
     */
    private function parsePsOutput($output)
    {
        $cores = str_replace("cpu cores\t: ", '', trim(explode("\n", Command::runSudo("cat /proc/cpuinfo | grep 'cpu cores'"))[0]));

        $data = [];
        foreach (explode("\n", (string) $output) as $row) {
            $row = explode('*-*', $row);
            $row[3] = str_replace('\\', '/', $row[3]);
            $fetch = explode('/', $row[3]);
            $data[] = [
                'pid' => $row[0],
                'percent' => round($row[1] / $cores, 1),
                'user' => $row[2],
                'cmd' => end($fetch),
            ];
        }

        return $data;
    }

    /**
     * Parse df-h output
     *
     * @return array
     */
    private function parseDfOutput($output)
    {
        $data = [];
        foreach (explode("\n", (string) $output) as $row) {
            $row = explode('*-*', $row);
            $row[1] = str_replace('\\', '/', $row[1]);
            $fetch = explode('/', $row[1]);
            $data[] = [
                'percent' => str_replace('%', '', $row[0]),
                'source' => end($fetch),
                'size' => $row[2],
                'used' => $row[3],
            ];
        }

        return $data;
    }
}