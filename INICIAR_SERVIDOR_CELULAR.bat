@echo off
title SIY1704 - Servidor para Celulares y Red Local
color 0b
echo ========================================================
echo   INICIANDO PLATAFORMA SIY1704 PARA TU TELEFONO...
echo   Dedicado a: Ysabel Carolina Nunez
echo ========================================================
echo.
powershell -ExecutionPolicy Bypass -NoExit -File "%~dp0server.ps1"
pause
