import sys
import json
import base64
import winrm

def get_session(ip, username, password):
    return winrm.Session(f'http://{ip}:5985/wsman', auth=(username, password))

def run_powershell(session, script):
    encoded_ps = base64.b64encode(script.encode('utf_16_le')).decode('ascii')
    result = session.run_cmd(f'powershell -encodedcommand {encoded_ps}')
    if result.status_code != 0:
        raise Exception(result.std_err.decode(errors="ignore"))
    return result.std_out.decode(errors="ignore")

if __name__ == "__main__":
    if len(sys.argv) != 4:
        print(json.dumps({"error": "Eksik parametre"}))
        sys.exit(1)

    ip = sys.argv[1]
    username = sys.argv[2]
    password = sys.argv[3]

    try:
        session = get_session(ip, username, password)

        powershell_script = """
        Get-WmiObject Win32_LogicalDisk -Filter "DriveType=3" | ForEach-Object {
            [PSCustomObject]@{
                source = $_.DeviceID
                size = [Math]::Round($_.Size / 1GB, 2).ToString() + "G"
                used = [Math]::Round(($_.Size - $_.FreeSpace) / 1GB, 2).ToString() + "G"
                percent = [Math]::Round((($_.Size - $_.FreeSpace) / $_.Size) * 100, 2).ToString()
            }
        } | ConvertTo-Json -Depth 3
        """

        output = run_powershell(session, powershell_script)

        # UI tarafı array beklediği için, tek obje bile olsa JSON array'e sarılmalı
        data = json.loads(output)
        if isinstance(data, dict):
            data = [data]

        print(json.dumps(data))

    except Exception as e:
        print(json.dumps({"error": str(e)}))
