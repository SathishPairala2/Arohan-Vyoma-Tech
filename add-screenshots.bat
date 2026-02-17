@echo off
echo ============================================
echo TECHMAWA Portfolio Screenshot Helper
echo ============================================
echo.
echo This script will help you add screenshots to your portfolio.
echo.
echo Please follow these steps:
echo.
echo 1. Open Chrome or Edge browser
echo 2. Visit each website below and take a screenshot:
echo.
echo    Website 1: https://ganeshresthouse.online/
echo    - Press F12, click the 3-dot menu, select "Capture screenshot"
echo    - Choose "Capture full size screenshot"
echo    - Save as: ganesh-resthouse.jpg
echo.
echo    Website 2: https://acttravelcompany.online/
echo    - Press F12, click the 3-dot menu, select "Capture screenshot"
echo    - Choose "Capture full size screenshot"
echo    - Save as: act-travel.jpg
echo.
echo    Website 3: http://13.51.196.215/user/
echo    - Press F12, click the 3-dot menu, select "Capture screenshot"
echo    - Choose "Capture full size screenshot"
echo    - Save as: user-portal.jpg
echo.
echo 3. Move all three .jpg files to:
echo    %~dp0public\images\portfolio\
echo.
echo 4. Refresh your browser at http://localhost:5173
echo.
echo ============================================
echo Press any key to open the portfolio folder...
pause >nul
explorer "%~dp0public\images\portfolio"
