@echo off
setlocal
cd /d "%~dp0"
set "VID=public\videos\boids-remaster-2026.mp4"
if not exist "%VID%.part01" (
  echo Missing %VID%.part01
  echo Extract 02_Boids_Video_A.zip into this portfolio folder first.
  pause
  exit /b 1
)
if not exist "%VID%.part02" (
  echo Missing %VID%.part02
  echo Extract 03_Boids_Video_B.zip into this portfolio folder first.
  pause
  exit /b 1
)
copy /b "%VID%.part01"+"%VID%.part02" "%VID%" >nul
if errorlevel 1 (
  echo Failed to combine video.
  pause
  exit /b 1
)
echo Finished: %VID%
echo Open the Boids page locally to check playback.
pause
