@echo off
title SIY1704 - Servidor para Celulares y Red Local
color 0e
echo ========================================================
echo   INICIANDO PLATAFORMA SIY1704 PARA TU TELEFONO...
echo   Dedicado a: Ysabel Carolina Nunez
echo ========================================================
echo.
powershell -ExecutionPolicy Bypass -NoExit -File "%~dp0SIY1704\server.ps1"
pause
