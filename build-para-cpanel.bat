@echo off
echo ========================================
echo  LucraChef - Build para cPanel
echo ========================================
echo.

REM Verifica se bun ja esta instalado
where bun >nul 2>&1
IF %ERRORLEVEL% == 0 GOTO :build_bun

REM Verifica se npm ja esta instalado
where npm >nul 2>&1
IF %ERRORLEVEL% == 0 GOTO :build_npm

REM Instala bun automaticamente via PowerShell
echo Bun nao encontrado. Instalando agora...
echo (pode demorar alguns segundos)
echo.
powershell -NoProfile -ExecutionPolicy Bypass -Command "irm bun.sh/install.ps1 | iex"
IF %ERRORLEVEL% NEQ 0 (
    echo.
    echo ERRO ao instalar o bun. Tentando via winget...
    winget install Oven-sh.Bun -e
)

REM Recarrega o PATH para incluir o bun recem-instalado
set "BUN_PATH=%USERPROFILE%\.bun\bin"
set "PATH=%BUN_PATH%;%PATH%"

where bun >nul 2>&1
IF %ERRORLEVEL% == 0 GOTO :build_bun

echo.
echo ERRO: nao foi possivel instalar automaticamente.
echo Instale manualmente em: https://bun.sh  ou  https://nodejs.org
pause
exit /b 1

:build_bun
echo [1/2] Instalando dependencias...
call "%USERPROFILE%\.bun\bin\bun.exe" install 2>nul || bun install
echo.
echo [2/2] Gerando build...
call "%USERPROFILE%\.bun\bin\bun.exe" run build 2>nul || bun run build
GOTO :done

:build_npm
echo [1/2] Instalando dependencias com npm...
npm install
echo [2/2] Gerando build com npm...
npm run build
GOTO :done

:done
IF NOT EXIST "dist\index.html" (
    echo.
    echo ERRO: build falhou. O arquivo dist\index.html nao foi criado.
    pause
    exit /b 1
)

echo.
echo ========================================
echo  BUILD CONCLUIDO COM SUCESSO!
echo.
echo  Abra a pasta DIST que apareceu aqui
echo  ao lado e suba o CONTEUDO dela para
echo  o cPanel (nao a pasta em si).
echo.
echo  Arquivos para subir:
echo    - index.html
echo    - .htaccess
echo    - assets\ (pasta inteira)
echo ========================================
echo.

REM Abre a pasta dist no Explorer automaticamente
explorer dist

pause
