# Web Services & The Last Service case study — 21 November 2026

**Status: Feature branch + draft pull request. DO NOT MERGE OR DEPLOY to production without explicit approval.**

## Scope

The existing Games Programming homepage and website project archive are preserved. The Web Development section remains visually separate, keeps the existing green/cream palette and computer-and-gear logo, and links to Games Programming through a discreet reciprocal footer link. The `/web/projects` page now showcases the two real website experiences Dylan built (Games Programming and Web Development), clearly labelled as personal portfolio projects. Both share one application codebase and are not presented as paid client commissions. Website case studies no longer advertise or link to the source repository. No fake reviews, clients or client case studies have been added.

### Existing prices unchanged

- Website Refresh £79: 1 existing webpage, 1 revision.
- Starter Website £149: 1 new responsive page, 1 revision.
- Small Business Website £249: 3 responsive pages, 2 revision rounds.
- Complete Business Website £349: 5 responsive pages, 2 revision rounds.

### New additional services (introductory indicative estimates)

| Route suffix | Service | Price range |
| --- | --- | --- |
| `speed-optimisation` | Website Speed Optimisation | £49–£99 |
| `local-seo` | Local SEO Setup | £59–£119 |
| `google-business-profile` | Google Business Profile Assistance | £39–£69 |
| `contact-forms` | Contact Form Upgrades | £29–£59 |
| `galleries` | Portfolio & Gallery Improvements | £39–£79 |
| `booking-systems` | Booking System Integration | £79–£149 |

Each has a complete detail page at `/web/services/:slug` showing included work, exclusions, typical use, limitations and a query-prefilled `Request a Quote` action. Quotes depend on the platform and exact scope; no automatic checkout, guaranteed PageSpeed/SEO results or paid third-party subscriptions are included. Google Business Profile itself is free; any quoted charge is for setup assistance, and clients keep ownership.

### Monthly care plans

New `/web/maintenance` route:

- Essential Care: £15/month. Health check, monitor setup where supported, link/contact checks, available software/security checks, problem report; fixes and edits separate.
- Business Care: £29/month. Essential, up to 30 minutes of small monthly edits, broken-link fixes in allowance, backup check where supported and request prioritisation; unused time does not roll over.
- Priority Care: £49/month. Business, up to **60 minutes total** monthly, urgent-issue prioritisation, best-efforts emergency help, monthly performance review and basic SEO health suggestions. Not 30+60 minutes.

All plans exclude hosting, domain and third-party fees; no unlimited changes, 24/7 availability, guaranteed response time or fixed repair time. Larger work is quoted separately.

### Netlify Forms — deliberately not enabled

Form at `/web/contact`: required `name`, `email`, `service`, `description`, consent; optional `business`, `phone`, `website`, `budget`, `contact-method`. The hidden form in `index.html` matches the React fields. Query-string service IDs are matched against the built-in allowlist; links use `?service=` and legacy `?package=` links remain supported. There is a honeypot and success/error/loading feedback; an accepted HTTP response means **the form provider accepted it**, not guaranteed email delivery. Netlify provider-side validation/spam processing must be configured and tested before activation.

Set `VITE_WEB_FORM_PROVIDER=netlify` **only in an approved deploy preview**, after Netlify has detected the `web-enquiry` form and submission email notification to `dylsonator.b@gmail.com` is configured in the dashboard. Verify a harmless test submission appears in Netlify Forms, that mail arrives, and check input abuse and notification delivery. Never add credentials to frontend environment variables. Default disabled with working `mailto:` fallback.

## Real The Last Service screenshots

`/games/projects/the-last-service` has five genuinely captured images supplied by the developer; `.webp` compressed at approximately the original capture dimensions to avoid unnecessary loading. The genuine in-game bus-stop cover and official itch.io download link remain. The case study now explains C++/Blueprint systems, environment baseline, the eight-stamp rule, 41 anomalies and the post-release v1.0.1 bug-fix update. It does not spoil hidden anomalies or present the planned v1.1 overhaul as already completed. Images are in `public/images/gallery/last-service/` and total about 250 KB instead of approximately 10 MB of PNGs.

## Design-quality checklist applied

Based on the user-supplied Vibe Coded Websites Report: one established type pair (`Space Grotesk` / `DM Sans`), existing green palette, consistent 14 px card radii, two- or three-column responsive grid, no sparkle icons/emoji/fake clients, readable pricing, functional CTAs and restrained hover behaviour. Existing web header opacity and blur were removed in favour of a solid, higher-contrast header. No animation dependencies introduced. New components have reduced-motion support.

## SEO

Added unique route-aware title, meta description and canonical for six service detail routes plus `/web/maintenance`; updated the sitemap. These are React/Vite client-side updates, so rich previews/crawlers without JavaScript may still see root metadata. A separate prerender review would be needed for crawler-perfect per-route OG tags.

## Checks

```bash
npm ci
npm run test:routes
npm run build
npm run dev
```

- Automated smoke tests check all 11 original game entries, 6 routes/prices, 3 care plans, 4 unchanged prices, 5 screenshot files, links, SEO and form fields.
- GitHub Actions must pass for the **latest feature-branch commit** before merging.
- Manual visual QA required at 320, 375, 768, 1024 and wide desktop widths; verify keyboard focus, readable text, service preselection, image loading and old link redirects.
- Netlify email notification and spam protection remain unverified until a real preview deployment and submission; default stays disabled.

## Key files

- `src/web/offerings.ts`: new pricing, scopes, inclusions, exclusions and service IDs.
- `src/web/ServiceCatalog.tsx`: cards, detail pages, maintenance page.
- `src/web/service-catalog.css`: scoped responsive styling.
- `src/web/WebPortfolio.tsx`: web page integration and full enquiry form.
- `src/web/web.css`: solid header and restrained hover affordances.
- `src/main.tsx`: new `/web/maintenance` and `/web/services/:slug` routes.
- `src/dual/SeoManager.tsx`, `public/sitemap.xml`: metadata and discovery.
- `index.html`: Netlify form blueprint.
- `scripts/verify-dual.mjs`: extended route/content checks.
- `src/projects.ts` and five `.webp` files: The Last Service portfolio improvements.

Do not publish to production without explicit approval.
