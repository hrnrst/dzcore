import sys
import winrm
import json
import base64

# Giriş parametreleri
ip = sys.argv[1]
username = sys.argv[2]
password = sys.argv[3]

# WinRM oturumu başlat
session = winrm.Session(f'http://{ip}:5985/wsman', auth=(username, password))

# PowerShell script
powershell_script = """
# CPU Kullanımı
$cpu = (Get-Counter '\\Processor(_Total)\\% Processor Time').CounterSamples.CookedValue
$cpu = [math]::Round($cpu, 2)

# RAM Kullanımı (Kullanılan Bellek / Toplam Bellek)
$mem = Get-CimInstance Win32_OperatingSystem
$total = $mem.TotalVisibleMemorySize
$free = $mem.FreePhysicalMemory
$usedPercent = [math]::Round((($total - $free) / $total) * 100, 2)

# Network Trafiği
$rx1 = (Get-Counter '\\Network Interface(*)\\Bytes Received/sec').CounterSamples | Measure-Object -Property CookedValue -Sum
$tx1 = (Get-Counter '\\Network Interface(*)\\Bytes Sent/sec').CounterSamples | Measure-Object -Property CookedValue -Sum
Start-Sleep -Seconds 1
$rx2 = (Get-Counter '\\Network Interface(*)\\Bytes Received/sec').CounterSamples | Measure-Object -Property CookedValue -Sum
$tx2 = (Get-Counter '\\Network Interface(*)\\Bytes Sent/sec').CounterSamples | Measure-Object -Property CookedValue -Sum
$download = [math]::Round([math]::Max(($rx2.Sum - $rx1.Sum) / 1024, 0), 2)
$upload = [math]::Round([math]::Max(($tx2.Sum - $tx1.Sum) / 1024, 0), 2)

# Disk IO (Toplam Byte/sn)
$disk = (Get-Counter '\\PhysicalDisk(_Total)\\Disk Bytes/sec').CounterSamples.CookedValue
$diskIO = [math]::Round($disk / 1024, 2)

# JSON çıktısı
$data = @{
    CPUPercent = $cpu
    RAMUsage = "$usedPercent%"
    IO = $diskIO
    NetworkDownload = $download
    NetworkUpload = $upload
}
$data | ConvertTo-Json -Compress
"""

# PowerShell'i Base64'e encode et
encoded_ps = base64.b64encode(powershell_script.encode('utf_16_le')).decode('ascii')

# Script'i çalıştır
result = session.run_cmd(f"powershell -encodedcommand {encoded_ps}")

# Sonuç
try:
    output = json.loads(result.std_out.decode('utf-8'))
except Exception as e:
    output = {"error": "decode_failed", "detail": str(e)}

print(json.dumps(output, indent=4))
