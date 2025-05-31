import winrm
import sys
import json

ip = sys.argv[1]
username = sys.argv[2]
password = sys.argv[3]

session = winrm.Session(f'http://{ip}:5985/wsman', auth=(username, password))

powershell_script = """
$cpu = Get-CimInstance Win32_Processor | Select-Object -ExpandProperty Name
$ram = Get-CimInstance Win32_ComputerSystem | Select-Object -ExpandProperty TotalPhysicalMemory
$os = Get-CimInstance Win32_OperatingSystem
$ramUsage = [math]::Round((($os.TotalVisibleMemorySize - $os.FreePhysicalMemory)*100) / $os.TotalVisibleMemorySize,2)

$disks = Get-CimInstance Win32_LogicalDisk -Filter "DriveType=3" | ForEach-Object {
    [PSCustomObject]@{
        DeviceID = $_.DeviceID
        SizeGB = [math]::Round($_.Size / 1GB, 2)
        UsedPercent = [math]::Round((($_.Size - $_.FreeSpace)/$_.Size)*100, 2)
    }
}

$uptimeSpan = (Get-Date) - $os.LastBootUpTime
$uptime = "$($uptimeSpan.Days) gün $($uptimeSpan.Hours) saat $($uptimeSpan.Minutes) dk"

$manufacturer = (Get-CimInstance Win32_ComputerSystem).Manufacturer
$model = (Get-CimInstance Win32_ComputerSystem).Model

$result = @{
    CPU = $cpu
    RAM = "$([math]::Round($ram/1GB,2)) GB"
    RAMUsage = "$ramUsage %"
    Disk = $disks
    Uptime = $uptime
    Manufacturer = $manufacturer
    Model = $model
}

$result | ConvertTo-Json -Depth 3
"""

# Komutu çalıştır
result = session.run_ps(powershell_script)

if result.status_code == 0:
    print(result.std_out.decode('iso-8859-9'))  # Türkçe karakter destekler
else:
    print(json.dumps({"error": result.std_err.decode()}))
