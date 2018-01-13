param([boolean]$enable) 

Function Set-ServiceStatus {
    Process  {
        $svc = Get-Service $_
        if (($enable -eq $true) -and ($svc.StartType -eq [System.ServiceProcess.ServiceStartMode]::Automatic)) {
            Write-Host ("Starting service $_")
            Set-Service -Name $_ -Status Running
        } elseif (($enable -eq $false) -and ($svc.Status -eq [System.ServiceProcess.ServiceControllerStatus]::Running)) {
            Write-Host ("Stopping service $_")
            Set-Service -Name $_ -Status Stopped
        }
    }
}

Function Get-Executable {
    $x86 = "${env:ProgramFiles(x86)}\Google\Update\GoogleUpdate.exe";
    if (Test-Path $x86) {
        return $x86
    }

    $x64 = "${env:ProgramFiles}\Google\Update\GoogleUpdate.exe";
    if (Test-Path $x64) {
        return $x64
    }

    return $null
}

Function Get-DisabledExecutable {
    $x86 = "${env:ProgramFiles(x86)}\Google\Update\GoogleUpdate._exe";
    if (Test-Path $x86) {
        return $x86
    }

    $x64 = "${env:ProgramFiles}\Google\Update\GoogleUpdate._exe";
    if (Test-Path $x64) {
        return $x64
    }

    return $null
}

Function Disable-Executable() {
    $path = Get-Executable
    if ($path -eq $null) {
        return $null
    }

    $disabledPath = $path -replace ".exe","._exe"
    Write-Host ("Setting Chrome update executable invalid name")
    Rename-Item -Path $path -NewName $disabledPath
    return $disabledPath
}

Function Enable-Executable() {
    $path = Get-DisabledExecutable
    if ($path -eq $null) {
        return $null
    }

    Write-Host ("Reverting Chrome update executable name")
    $enabledPath = $path -replace "._exe",".exe"
    Rename-Item -Path $path -NewName $enabledPath
}

$services = "gupdate", "gupdatem"

if ($enable -eq $true) {
    Write-Host "Enabling Chrome updates"
    $services | Set-ServiceStatus
    Enable-Executable
} else {
    Write-Host "Disabling Chrome updates"
    $services | Set-ServiceStatus
    Disable-Executable
}
