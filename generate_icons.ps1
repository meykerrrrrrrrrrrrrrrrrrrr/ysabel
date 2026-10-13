Add-Type -AssemblyName System.Drawing

function Generate-Icon([int]$size, [string]$outputPath) {
    $bmp = New-Object System.Drawing.Bitmap($size, $size)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

    # Fondo Negro Oscuro
    $bgBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 5, 6, 9))
    $g.FillRectangle($bgBrush, 0, 0, $size, $size)

    # Anillo Neón Azul
    $scale = $size / 512.0
    $penBlue = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(255, 29, 88, 219), (14 * $scale))
    $g.DrawEllipse($penBlue, (20 * $scale), (20 * $scale), (($size - 40 * $scale)), (($size - 40 * $scale)))

    # Anillo Fucsia punteado
    $penFuchsia = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(200, 255, 0, 127), (4 * $scale))
    $penFuchsia.DashStyle = [System.Drawing.Drawing2D.DashStyle]::Dash
    $g.DrawEllipse($penFuchsia, (36 * $scale), (36 * $scale), (($size - 72 * $scale)), (($size - 72 * $scale)))

    # Cabeza y Orejas de Monito
    $furBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 140, 75, 30))
    $faceBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 245, 215, 185))
    
    # Orejas
    $g.FillEllipse($furBrush, (120 * $scale), (210 * $scale), (70 * $scale), (70 * $scale))
    $g.FillEllipse($faceBrush, (135 * $scale), (225 * $scale), (40 * $scale), (40 * $scale))
    $g.FillEllipse($furBrush, (322 * $scale), (210 * $scale), (70 * $scale), (70 * $scale))
    $g.FillEllipse($faceBrush, (337 * $scale), (225 * $scale), (40 * $scale), (40 * $scale))

    # Cabeza
    $g.FillEllipse($furBrush, (166 * $scale), (180 * $scale), (180 * $scale), (170 * $scale))
    $g.FillEllipse($faceBrush, (186 * $scale), (220 * $scale), (140 * $scale), (120 * $scale))

    # Ojos tiernos
    $eyeBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::Black)
    $sparkleBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
    $g.FillEllipse($eyeBrush, (215 * $scale), (245 * $scale), (22 * $scale), (28 * $scale))
    $g.FillEllipse($eyeBrush, (275 * $scale), (245 * $scale), (22 * $scale), (28 * $scale))
    $g.FillEllipse($sparkleBrush, (220 * $scale), (248 * $scale), (8 * $scale), (8 * $scale))
    $g.FillEllipse($sparkleBrush, (280 * $scale), (248 * $scale), (8 * $scale), (8 * $scale))

    # Gafas Azules
    $penGlasses = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(255, 59, 130, 246), (5 * $scale))
    $g.DrawRectangle($penGlasses, (200 * $scale), (235 * $scale), (48 * $scale), (42 * $scale))
    $g.DrawRectangle($penGlasses, (264 * $scale), (235 * $scale), (48 * $scale), (42 * $scale))
    $g.DrawLine($penGlasses, (248 * $scale), (252 * $scale), (264 * $scale), (252 * $scale))

    # Casco de Seguridad Amarillo
    $helmetBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 250, 204, 21))
    $helmetPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(255, 217, 119, 6), (4 * $scale))
    $g.FillPie($helmetBrush, (156 * $scale), (110 * $scale), (200 * $scale), (180 * $scale), 180, 180)
    $g.DrawArc($helmetPen, (156 * $scale), (110 * $scale), (200 * $scale), (180 * $scale), 180, 180)
    # Visera del casco
    $g.FillRectangle($helmetBrush, (140 * $scale), (195 * $scale), (232 * $scale), (20 * $scale))
    $g.DrawRectangle($helmetPen, (140 * $scale), (195 * $scale), (232 * $scale), (20 * $scale))

    # Cruz en el casco
    $crossBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 29, 88, 219))
    $g.FillRectangle($crossBrush, (248 * $scale), (135 * $scale), (16 * $scale), (36 * $scale))
    $g.FillRectangle($crossBrush, (238 * $scale), (145 * $scale), (36 * $scale), (16 * $scale))

    # Chaleco Naranja
    $vestBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 255, 87, 34))
    $g.FillRectangle($vestBrush, (180 * $scale), (340 * $scale), (152 * $scale), (80 * $scale))
    $stripeBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(240, 248, 250, 252))
    $g.FillRectangle($stripeBrush, (180 * $scale), (365 * $scale), (152 * $scale), (12 * $scale))

    # Texto SIY1704 en Amarillo Mostaza
    $fontSize = [Math]::Max(10, [int](30 * $scale))
    $font = New-Object System.Drawing.Font("Arial", $fontSize, [System.Drawing.FontStyle]::Bold)
    $textBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 250, 204, 21))
    $format = New-Object System.Drawing.StringFormat
    $format.Alignment = [System.Drawing.StringAlignment]::Center
    $g.DrawString("SIY1704", $font, $textBrush, ($size / 2.0), ($size - 60 * $scale), $format)

    $bmp.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $g.Dispose()
    $bmp.Dispose()
    Write-Host "Generado: $outputPath"
}

Generate-Icon 192 "c:\Users\DIOS ES AMOR\OneDrive\Desktop\SIY1704\icon-192.png"
Generate-Icon 512 "c:\Users\DIOS ES AMOR\OneDrive\Desktop\SIY1704\icon-512.png"
