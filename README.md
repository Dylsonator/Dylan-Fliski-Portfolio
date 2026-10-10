# Boids 2026 Remaster — Portfolio Update

This is a complete copy of the existing React/Vite portfolio with the Boids page updated.
All other project entries, images, videos, colours, pages and components are preserved.

## Updated page

- `/projects/3d-boids`
- New remaster screenshot as the project thumbnail and cover
- Full-resolution original university screenshot and initial recovered-project screenshot retained in the story
- New sections describing the university baseline, steering fixes, spatial neighbour search, obstacle tests, new UMG interface and why the project was revisited
- Three user-provided remaster screenshots (separation test, obstacle flock, debug spheres)
- Still from the new forest demonstration
- Original YouTube demonstration retained
- Embedded 66.5-second 2026 remaster video (`public/videos/boids-remaster-2026.mp4`, compressed for web)

## To update your existing local portfolio

If you already have the latest portfolio checked out at `D:\portfolio\dylan-portfolio`, use the smaller `BOIDS_ONLY_PATCH` ZIP instead. Extract its contents into your existing project, maintaining the folder structure and replacing the matching file `src/projects.ts`.

Alternatively, make a backup of your existing project folder and replace it with this full project copy. Do not overwrite newer local edits you have made since the last portfolio version.

## Preview

Open CMD:

    cd /d D:\portfolio\dylan-portfolio
    npm install
    npm run dev

Open: http://localhost:5173/projects/3d-boids

## Deploy to the linked Netlify site

If you use GitHub-connected Netlify auto-deploy, from your local project directory:

    git add src/projects.ts public/images/gallery/boids-remaster public/videos/boids-remaster-2026.mp4
    git commit -m "Update Boids remaster portfolio case study and gameplay video"
    git push

Only push once you have reviewed the page locally. Netlify should deploy the connected repository's latest commit according to its current settings.

## Accuracy note

The case study describes the implemented 2026 C++ flocking and UI upgrades. No measured before/after benchmark or numeric FPS improvement is claimed. The screenshot of debug neighbour spheres visualises local sensing and should not be mistaken for the internal spatial grid itself.
