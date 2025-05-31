import sys
import json
import winrm
import base64

if len(sys.argv) < 4:
    print(json.dumps({"error": "Eksik parametre"}))
    exit(1)

ip = sys.argv[1]
username = sys.argv[2]
password = sys.argv[3]

ps_script = r"""
# Tüm işlemleri al ve toplam CPU zamanı (User + Kernel) ile sırala
$procs = Get-CimInstance Win32_Process |
    Where-Object { $_.Name -ne $null } |
    Sort-Object -Property @{Expression = { $_.KernelModeTime + $_.UserModeTime }} -Descending |
    Select-Object -First 5

$cpuCount = (Get-CimInstance Win32_ComputerSystem).NumberOfLogicalProcessors
$uptimeSec = (Get-Date) - (gcim Win32_OperatingSystem).LastBootUpTime
$uptimeSec = $uptimeSec.TotalSeconds

$result = @()

foreach ($proc in $procs) {
    try {
        $owner = $proc.GetOwner().User
    } catch {
        $owner = "Sistem"
    }

    $totalTime = ($proc.KernelModeTime + $proc.UserModeTime) / 10000000  # 100ns -> saniye
    $cpuUsage = [math]::Round(($totalTime / $uptimeSec) * 100 / $cpuCount, 2)

    $result += [PSCustomObject]@{
        user = $owner
        cmd = $proc.Name
        percent = $cpuUsage
    }
}

$result | ConvertTo-Json
"""

encoded = base64.b64encode(ps_script.encode('utf_16_le')).decode('ascii')
session = winrm.Session(f'http://{ip}:5985/wsman', auth=(username, password))
response = session.run_cmd(f"powershell -encodedcommand {encoded}")

if response.status_code != 0:
    print(json.dumps({"error": "Komut çalıştırılamadı"}))
    exit(1)

try:
    print(response.std_out.decode("utf-8"))
except Exception as e:
    print(json.dumps({"error": str(e)}))
