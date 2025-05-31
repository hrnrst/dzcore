import sys
import subprocess
import winrm
import json
import base64

if len(sys.argv) < 6:
    print(json.dumps({"error": "Eksik parametre"}))
    exit(1)

ip = sys.argv[1]
username = sys.argv[2]
password = sys.argv[3]
action = sys.argv[4].lower()
service = sys.argv[5]

ps_template = ""

if action == "start":
    ps_template = f"Start-Service -Name '{service}' -ErrorAction Stop"

elif action == "stop":
    ps_template = f"Stop-Service -Name '{service}' -ErrorAction Stop"

elif action == "restart":
    ps_template = f"Restart-Service -Name '{service}' -ErrorAction Stop"

elif action == "enable":
    ps_template = f"Set-Service -Name '{service}' -StartupType Automatic"

elif action == "disable":
    ps_template = f"Set-Service -Name '{service}' -StartupType Manual"

elif action == "status":
    ps_template = f"""
    $svc = Get-Service -Name '{service}' -ErrorAction SilentlyContinue
    if ($svc -eq $null) {{
        $status = "NotFound"
    }} else {{
        $status = $svc.Status.ToString()
    }}
    $data = @{{ status = $status }}
    $data | ConvertTo-Json -Compress
    """

else:
    print(json.dumps({"error": f"Geçersiz işlem: {action}"}))
    exit(1)

# PowerShell script encode
encoded = base64.b64encode(ps_template.encode('utf_16_le')).decode('ascii')

# WinRM oturumu başlat
try:
    session = winrm.Session(f'http://{ip}:5985/wsman', auth=(username, password))
    result = session.run_cmd(f"powershell -encodedcommand {encoded}")

    if result.status_code != 0:
        print(json.dumps({
            "message": f"Servis {action} işlemi başarısız.",
            "error": result.std_err.decode().strip()
        }))
    else:
        try:
            parsed = json.loads(result.std_out.decode())
            print(json.dumps(parsed))
        except:
            print(json.dumps({"message": f"Servis {action} işlemi başarılı."}))
except Exception as e:
    print(json.dumps({
        "message": f"Servis {action} işlemi gerçekleştirilemedi.",
        "error": str(e)
    }))
