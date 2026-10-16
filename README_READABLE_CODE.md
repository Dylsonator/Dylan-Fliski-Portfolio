# Human-readable portfolio source

This is the **same portfolio site** as the latest `The Last Service` release package, with code formatting improved for maintenance and editing. No project content, links, images, videos, routes or intended functionality were changed.

## Where to find things

- `src/main.tsx` — React pages, site navigation, routes, shared components.
- `src/projects.ts` — project descriptions, status, links and case studies. Find an entry by its `slug`.
- `src/style.css` — site-wide design and responsive rules, split into readable CSS blocks.
- `src/components/CurrentProjects.tsx` — latest release / Character Creator section.
- `src/components/CurrentProjects.css` — styling for that section.
- `public/` — images, videos, favicons and CV.
- `package.json` — project scripts and packages.

## Run the website

1. Open this folder in VS Code.
2. Run `npm ci` (or `npm install` if your lockfile needs updating).
3. Run `npm run dev` to view the site locally.
4. Run `npm run build` before deployment.

## Keep the formatting readable

The included `.editorconfig` and `.prettierrc.json` define consistent 2-space indentation and line lengths. In VS Code, install the **Prettier – Code formatter** extension, then choose **Format Document** when you edit a file. Enable Format on Save if you prefer automatic formatting. Prettier is an optional editor tool, not a new site dependency.

`README_READABLE_CODE.md` and the formatting configuration are the only new files; existing project content has been left intact. All existing functionality should remain unchanged. Formatting, syntax and structure checks were performed, but a complete `npm run build` was not possible in the packaging environment because the npm dependencies were unavailable.
