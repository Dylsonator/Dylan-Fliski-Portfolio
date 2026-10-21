# Freelance Services portfolio update

This is a focused extension of the existing Dylan Fliski games programming portfolio. The established design, homepage hero, featured carousel, case studies, and contact features are preserved.

## New visitor-facing features

- `/services` route and fifth top-navigation item.
- Three service cards: Website Development, Game Development, Testing & Debugging.
- Homepage service teaser after Featured projects, before Latest work.
- Three profile/contact options: Upwork, Fiverr, and the existing Contact page.
- Projects archive tabs: All Work / Personal Projects / Freelance / Client Work. Status filters and search still work.
- Dynamic Services page title and description for basic client-side SEO.
- Tablet navigation spacing fixes, plus responsive service cards and reduced-motion handling.

## Edit your services

`src/services.ts` is the source of truth. Edit `freelanceServices` to change the service copy or features. Its `highlights` list determines the items displayed on each card.

To activate your freelance profile links, replace the `null` URLs in `freelanceProfiles` with **your real profile URLs**:

```ts
export const freelanceProfiles: FreelanceProfile[] = [
  { name: 'Upwork', url: null }, // use your real URL
  { name: 'Fiverr', url: null }  // use your real URL
];
```

Until supplied, the cards clearly read "Profile link coming soon" and are *not* broken or fake clickable links. The Contact button is functional immediately.

## Publishing client work safely

Existing projects are implicitly `workType: 'Personal'` and stay unchanged. The `Project` type in `src/projects.ts` adds two optional fields:

```ts
workType?: 'Personal' | 'Client';
clientApproved?: boolean;
```

A client project appears **only if** `workType: 'Client'` **and** `clientApproved: true` have explicitly been set on its entry. Leave `clientApproved` unset or false if you have not received permission to showcase it. This safeguard also affects Featured projects and direct project-detail URLs. No fictitious client entries or testimonials have been added.

## Test locally

```bash
npm ci
npm run build
npm run dev
```

Routes use the existing `public/_redirects` Netlify SPA fallback (`/* /index.html 200`).

## Verification in this environment

- Existing website source was confirmed to match the repository's current `main` branch files by Git blob SHA.
- New and modified TS/TSX files parsed/transpiled successfully.
- New Services module was type-checked against temporary minimal ambient declarations (not a substitute for the actual React types).
- CSS parsed successfully using PostCSS.
- The **full production build has not been run**: dependency installation was unavailable offline. Run `npm ci && npm run build` on your machine or a network-enabled CI runner before merging.
