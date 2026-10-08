# Генерация значков приложения.
#
# Запуск: powershell -ExecutionPolicy Bypass -File tools/make-icons.ps1
#
# Зачем отдельные maskable-значки. Android обрезает значок под форму,
# принятую в системе, — круг, скруглённый квадрат, каплю. Обычный значок со
# скруглённой рамкой в круге теряет углы и выглядит обрубленным. У maskable
# фон занимает весь холст, а рисунок помещается в «безопасную зону» — круг
# в 80% ширины, который не обрежут ни при какой форме.
#
# Рисуется программно, без графических редакторов: System.Drawing входит в
# состав Windows, и повторить результат можно в любой момент.

param(
    [string]$Out = (Join-Path (Split-Path -Parent $PSScriptRoot) 'assets')
)

Add-Type -AssemblyName System.Drawing

$paper  = [System.Drawing.ColorTranslator]::FromHtml('#ffffff')
$paper2 = [System.Drawing.ColorTranslator]::FromHtml('#efe8d8')
$line   = [System.Drawing.ColorTranslator]::FromHtml('#d9cdb8')
$accent = [System.Drawing.ColorTranslator]::FromHtml('#2c56d6')

function New-RoundedPath {
    param($X, $Y, $W, $H, $R)

    $path = New-Object System.Drawing.Drawing2D.GraphicsPath
    $d = $R * 2

    if ($d -ge [Math]::Min($W, $H)) { $d = [Math]::Min($W, $H) - 1 }

    $path.AddArc($X, $Y, $d, $d, 180, 90)
    $path.AddArc($X + $W - $d, $Y, $d, $d, 270, 90)
    $path.AddArc($X + $W - $d, $Y + $H - $d, $d, $d, 0, 90)
    $path.AddArc($X, $Y + $H - $d, $d, $d, 90, 90)
    $path.CloseFigure()

    return $path
}

function New-Icon {
    param([int]$Size, [switch]$Maskable)

    $bmp = New-Object System.Drawing.Bitmap($Size, $Size)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias

    $rect = New-Object System.Drawing.Rectangle(0, 0, $Size, $Size)
    $grad = New-Object System.Drawing.Drawing2D.LinearGradientBrush($rect, $paper, $paper2, 90)

    if ($Maskable) {
        $g.FillRectangle($grad, $rect)
    } else {
        $pad = $Size * 0.06
        $tile = New-RoundedPath -X $pad -Y $pad -W ($Size - $pad*2) -H ($Size - $pad*2) -R ($Size * 0.22)
        $g.FillPath($grad, $tile)

        $pen = New-Object System.Drawing.Pen($line, [float]($Size * 0.01))
        $g.DrawPath($pen, $tile)
        $pen.Dispose()
        $tile.Dispose()
    }

    $grad.Dispose()

    <#
        Знак: конверт — письмо.

        Конверт читается при любом размере и говорит ровно то, что нужно:
        «здесь пишут письма». Контур, а не заливка: в 48 точках залитый
        конверт становится синим пятном, а контур с «клапаном» остаётся
        конвертом.
    #>
    $scale = if ($Maskable) { 0.52 } else { 0.62 }
    $w = $Size * $scale
    $h = $w * 0.72
    $x = ($Size - $w) / 2
    $y = ($Size - $h) / 2

    $stroke = [float]($Size * 0.045)
    $accentPen = New-Object System.Drawing.Pen($accent, $stroke)
    $accentPen.LineJoin = [System.Drawing.Drawing2D.LineJoin]::Round
    $accentPen.StartCap = [System.Drawing.Drawing2D.LineCap]::Round
    $accentPen.EndCap = [System.Drawing.Drawing2D.LineCap]::Round

    $body = New-RoundedPath -X $x -Y $y -W $w -H $h -R ($Size * 0.04)
    $white = New-Object System.Drawing.SolidBrush($paper)
    $g.FillPath($white, $body)
    $g.DrawPath($accentPen, $body)

    # Клапан: от углов к центру
    $cx = $x + $w / 2
    $cy = $y + $h * 0.56
    $g.DrawLine($accentPen, [float]($x + $stroke), [float]($y + $stroke), [float]$cx, [float]$cy)
    $g.DrawLine($accentPen, [float]($x + $w - $stroke), [float]($y + $stroke), [float]$cx, [float]$cy)

    $white.Dispose()
    $body.Dispose()
    $accentPen.Dispose()
    $g.Dispose()

    return $bmp
}

if (-not (Test-Path $Out)) { New-Item -ItemType Directory -Path $Out | Out-Null }

$plan = @(
    @{ Size = 192; Maskable = $false; Name = 'icon-192.png' },
    @{ Size = 512; Maskable = $false; Name = 'icon-512.png' },
    @{ Size = 192; Maskable = $true;  Name = 'icon-maskable-192.png' },
    @{ Size = 512; Maskable = $true;  Name = 'icon-maskable-512.png' }
)

foreach ($item in $plan) {
    $bmp = if ($item.Maskable) { New-Icon -Size $item.Size -Maskable } else { New-Icon -Size $item.Size }
    $path = Join-Path $Out $item.Name

    $bmp.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()

    Write-Host "$($item.Name) — $($item.Size)x$($item.Size)$(if ($item.Maskable) { ', maskable' })"
}

Write-Host 'Готово. Поднимите APP_VERSION в sw.js, иначе у установленных приложений останется старый значок.' -ForegroundColor Yellow
