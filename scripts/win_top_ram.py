import winrm
import sys
import json

ip = sys.argv[1]
username = sys.argv[2]
password = sys.argv[3]

session = winrm.Session(f'http://{ip}:5985/wsman', auth=(username, password))

# Bu script RAM kullanımına göre sıralar ve kullanıcı adı da alır
powershell_script = r"""
$totalRam = (Get-CimInstance -ClassName Win32_OperatingSystem).TotalVisibleMemorySize * 1KB
$top = Get-Process | Sort-Object -Descending WorkingSet | Select-Object -First 5
$result = @()

foreach ($proc in $top) {
    $user = "Unknown"
    try {
        $wmi = Get-WmiObject Win32_Process -Filter "ProcessId=$($proc.Id)"
        $ownerInfo = $wmi.GetOwner()
        if ($ownerInfo.ReturnValue -eq 0) {
            $user = "$($ownerInfo.Domain)\$($ownerInfo.User)"
        }
    } catch {
        $user = "AccessDenied"
    }

    $percent = if ($totalRam -gt 0) {
        [math]::Round(($proc.WorkingSet / $totalRam) * 100, 2)
    } else {
        0
    }

    $result += [PSCustomObject]@{
        pid     = $proc.Id
        cmd     = $proc.ProcessName
        user    = $user
        percent = $percent
    }
}

$result | ConvertTo-Json


"""

result = session.run_ps(powershell_script)

try:
    data = json.loads(result.std_out.decode('utf-8'))
    if isinstance(data, dict):
        data = [data]
    print(json.dumps(data))
except Exception as e:
    print(json.dumps({
        "error": "parse error",
        "detail": str(e),
        "raw": result.std_out.decode('utf-8', errors='ignore')
    }))
