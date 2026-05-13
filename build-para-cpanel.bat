@echo off
echo ========================================
echo  LucraChef - Build para cPanel
echo ========================================
echo.

REM Tenta com bun primeiro
where bun >nul 2>&1
IF %ERRORLEVEL% == 0 (
    echo [1/2] Instalando dependencias com bun...
    bun install
    echo [2/2] Gerando build...
    bun run build
    goto :done
)

REM Fallback para npm
where npm >nul 2>&1
IF %ERRORLEVEL% == 0 (
    echo [1/2] Instalando dependencias com npm...
    npm install
    echo [2/2] Gerando build...
    npm run build
    goto :done
)

echo ERRO: nem bun nem npm foram encontrados.
echo Instale o Node.js em: https://nodejs.org
pause
exit /b 1

:done
echo.
echo ========================================
echo  BUILD CONCLUIDO!
echo  Arquivos prontos na pasta: dist\
echo  Suba o CONTEUDO da pasta dist\ para o
echo  cPanel (nao a pasta em si, o conteudo)
echo ========================================
echo.
pause
