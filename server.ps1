# Servidor Web Local Ultraligero para Celulares y Red Local
# Plataforma SIY1704 - Ysabel Carolina Nuñez
param (
    [int]$Port = 8080
)

$currentDir = $PSScriptRoot
if (-not $currentDir) { $currentDir = (Get-Location).Path }

# Detectar IP Local Wi-Fi
$wifiIP = (Get-NetIPAddress -AddressFamily IPv4 | Where-Object { 
    $_.InterfaceAlias -notlike "*Loopback*" -and $_.IPAddress -notlike "169.254*" -and $_.IPAddress -like "192.168.*"
} | Select-Object -First 1).IPAddress

if (-not $wifiIP) {
    $wifiIP = (Get-NetIPAddress -AddressFamily IPv4 | Where-Object { 
        $_.InterfaceAlias -notlike "*Loopback*" -and $_.IPAddress -notlike "169.254*"
    } | Select-Object -First 1).IPAddress
}

if (-not $wifiIP) { $wifiIP = "localhost" }

$listener = New-Object System.Net.HttpListener
$prefix = "http://*:$Port/"

try {
    $listener.Prefixes.Add($prefix)
    $listener.Start()
} catch {
    # Si falla registrar con asterisco (permisos), intentar con localhost y la IP específica
    $listener = New-Object System.Net.HttpListener
    $listener.Prefixes.Add("http://localhost:$Port/")
    try {
        $listener.Prefixes.Add("http://$($wifiIP):$Port/")
    } catch {}
    $listener.Start()
}

Clear-Host
Write-Host "==========================================================" -ForegroundColor Yellow
Write-Host "   🚀 SERVIDOR LOCAL SIY1704 INICIADO EXITOSAMENTE        " -ForegroundColor Cyan
Write-Host "   Dedicado a: Ysabel Carolina Nuñez                      " -ForegroundColor Magenta
Write-Host "==========================================================" -ForegroundColor Yellow
Write-Host ""
Write-Host "📱 PARA ABRIR E INSTALAR EN TU TELÉFONO:" -ForegroundColor Green
Write-Host "   1. Asegúrate de que tu celular esté conectado al mismo Wi-Fi." -ForegroundColor White
Write-Host "   2. Abre Chrome o Safari en tu teléfono y escribe:" -ForegroundColor White
Write-Host ""
Write-Host "      http://$($wifiIP):$Port/" -ForegroundColor Yellow -BackgroundColor DarkBlue
Write-Host ""
Write-Host "   3. En tu teléfono:" -ForegroundColor White
Write-Host "      - Android (Chrome): Toca los 3 puntos (⋮) -> 'Agregar a la pantalla principal'." -ForegroundColor Cyan
Write-Host "      - iPhone (Safari): Toca el botón Compartir -> 'Agregar a inicio'." -ForegroundColor Magenta
Write-Host ""
Write-Host "💻 O en tu computadora: http://localhost:$Port/" -ForegroundColor Gray
Write-Host "==========================================================" -ForegroundColor Yellow
Write-Host "Presiona CTRL + C en cualquier momento para detener el servidor." -ForegroundColor DarkGray
Write-Host ""

$mimeTypes = @{
    ".html" = "text/html; charset=utf-8"
    ".css"  = "text/css; charset=utf-8"
    ".js"   = "application/javascript; charset=utf-8"
    ".json" = "application/manifest+json; charset=utf-8"
    ".svg"  = "image/svg+xml"
    ".png"  = "image/png"
    ".ico"  = "image/x-icon"
}

while ($listener.IsListening) {
    try {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $urlPath = $request.Url.LocalPath.TrimStart('/')
        if ([string]::IsNullOrWhiteSpace($urlPath)) {
            $urlPath = "index.html"
        }

        $filePath = Join-Path $currentDir $urlPath

        if (Test-Path $filePath -PathType Leaf) {
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
            $mime = $mimeTypes[$ext]
            if (-not $mime) { $mime = "application/octet-stream" }

            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            $response.ContentType = $mime
            $response.ContentLength64 = $bytes.Length
            $response.StatusCode = 200
            # Habilitar CORS
            $response.AddHeader("Access-Control-Allow-Origin", "*")
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $response.StatusCode = 404
            $msg = [System.Text.Encoding]::UTF8.GetBytes("Archivo no encontrado: $urlPath")
            $response.OutputStream.Write($msg, 0, $msg.Length)
        }
        $response.Close()
    } catch {
        # Si se cancela o cierra
    }
}
