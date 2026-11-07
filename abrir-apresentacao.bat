@echo off
REM Abre a apresentacao via servidor local (necessario para os videos do YouTube funcionarem)
cd /d "%~dp0"
start "" http://localhost:8080/index.html
python -m http.server 8080

