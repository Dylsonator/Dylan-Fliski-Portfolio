BOIDS PORTFOLIO REMASTER — 3 DOWNLOADS (each below 10 MB)

You only need these three small ZIPs. They update your existing React/Vite
portfolio without overwriting unrelated website files.

1. Back up your portfolio folder:
   D:\portfolio\dylan-portfolio

2. Extract 01_Boids_Site_and_Images.zip directly INTO
   D:\portfolio\dylan-portfolio
   Overwrite src\projects.ts if asked.

3. Extract 02_Boids_Video_A.zip and 03_Boids_Video_B.zip into the SAME
   D:\portfolio\dylan-portfolio folder, maintaining subfolders.

4. Run Rebuild_Boids_Video.bat at the TOP LEVEL of your portfolio folder.
   It combines the two pieces into:
   public\videos\boids-remaster-2026.mp4
   You need both part files for this to work.

5. Verify the video and project page locally:
   cd /d D:\portfolio\dylan-portfolio
   npm run dev

6. Once it all works, you can delete the two .part files from
   public\videos\ and Rebuild_Boids_Video.bat.

Note: If your existing portfolio source has changed since the package was
built, inspect src/projects.ts before overwriting it.
