# Dylan Fliski — Dual Portfolio Upgrade

**Status:** Draft PR on a feature branch. **Do not merge to `main` or deploy without Dylan's approval.**

## What changed and why

**Share separate links:** `https://dylanfliski.com/games` for games programming and `https://dylanfliski.com/web` for local web-development clients. `https://dylanfliski.com/` also displays games programming. No visitor-facing selection or cross-links exist; no second domain is required.


The original game portfolio remains intact: all **11** game projects, case studies, screenshots, videos, demos, GitHub/itch links, the featured project carousel, the latest-work cards, CV, About page, and game contact options are preserved. The original games portfolio is shown at `/` and `/games`; the independent web business is available at `/web`. Visitors can be sent one URL without encountering a portfolio selector.

The existing Vite 6 / React 19 / TypeScript / Tailwind 3 setup is retained, with **no new runtime dependencies**. The existing game CSS is unchanged; new web styles are scoped to `.web-site` (light, green-accent web portfolio). The games section keeps its existing dark/red visual identity. There is **no chooser, cross-portfolio navigation, or switcher**; the web header now reuses the actual existing logo asset (`/images/logo-mark.png`).

### Routes

| Route | Purpose |
| --- | --- |
| `/` | Existing Games Programming homepage, no chooser |
| `/games` | Games Programming homepage alias for sharing (canonical `/`) |
| `/games/projects` | Existing 11-project games archive |
| `/games/projects/:slug` | Existing game case studies |
| `/games/about` | Games background, skills and CV |
| `/games/contact` | Existing games contact options |
| `/web` | Local small-business web development homepage |
| `/web/services` | Four website packages, six optional improvements and care-plan overview |
| `/web/maintenance` | Three monthly website care plans |
| `/web/services/:slug` | Individual details for six optional improvement services |
| `/web/projects` | Empty state until authentic work can be shown |
| `/web/projects/:slug` | Extensible approved web case studies |
| `/web/about` | Independent web developer background and skills |
| `/web/contact` | Website project enquiry form / direct email fallback |
| `/web/privacy` | Enquiry privacy information |

The Netlify-style `public/_redirects` preserves historic public URLs: `/projects`, `/projects/:slug`, `/about`, `/contact`, `/services`. The React routes provide matching in-app fallbacks. The original Games Programming homepage is **preserved at `/`**, with `/games` offering a shareable alias; its canonical URL is `/` to avoid duplicate indexing. The Web portfolio is only linked within its own `/web/*` pages, and there is no visible cross-navigation or shared selection page. Both use the **same domain**, so this is URL/path and interface separation, not separate domains or technical isolation.

### Prices — introductory rates

Edit `src/web/data.ts` to change the original website packages and web project entries. The **six additional services and three monthly care plans** are configured separately in `src/web/offerings.ts` so their pricing and scopes are kept in one place.

- Website Refresh — **£79**, one existing page, one revision.
- Starter Website — **£149**, one responsive page, one revision.
- Small Business Website — **£249**, three pages, two revision rounds.
- Complete Business Website — **£349**, five pages, two revision rounds.

The page explicitly excludes hosting, domain registration, premium plugins, ecommerce and advanced booking systems. No SEO ranking or lead-generation guarantees are made.

The new service catalogue shows indicative rates of £49–£99 (speed), £59–£119 (local SEO), £39–£69 (Google Business Profile assistance), £29–£59 (contact forms), £39–£79 (galleries), and £79–£149 (booking integration). These are individually quoted, not guaranteed fixed prices. Care plans are Essential £15/month, Business £29/month and Priority £49/month, with clear time allowances and exclusions. Full terms are in `src/web/offerings.ts` and `README_WEB_SERVICES_UPDATE.md`.

### Publishing future web work

Use `src/web/data.ts` `webProjects` to add genuine case studies. A `type: 'Client'` item remains invisible until **both** `clientPermission: true` and `status: 'Completed'` are set. Obtain permission before using client names, images, screenshots or site links. The existing game projects remain in `src/projects.ts` and are never mixed into the web portfolio.

The initial Web Projects page is deliberately empty; it has no fabricated clients, reviews, ratings or testimonials.

## Netlify-hosted enquiry form — verification required

The repository already used `public/_redirects` for Netlify-style SPA routing. This is consistent with Netlify deployment but **the hosting account, form detection setting, notification recipient, and real delivery have not been independently verified**.

The Web Contact UI implements an accessible form with required name, email, service of interest and project description; optional business name, phone, website URL, budget and preferred contact method; a consent checkbox and honeypot. Every service, care plan and website package can preselect a value using `?service=<id>`; old `?package=<id>` links also work. The selection is allowlisted. `index.html` contains the matching static form blueprint required for Netlify's build-time form detection. React submits URL-encoded POST data to Netlify's form service when enabled. It handles success and network/server errors without exposing credentials. Netlify offers provider-managed spam filtering, in addition to the honeypot; whether it is active on this site must be verified.

**Safe default:** the submit button is disabled and visitors see a clear explanation plus a functional `mailto:` fallback until the hosted form is configured. `src/web/WebPortfolio.tsx` reads `VITE_WEB_FORM_PROVIDER=netlify` at **build** time. `src/vite-env.d.ts` enables Vite's TypeScript environment types. Never put secrets in any `VITE_` variable.

To enable **after deploying to a non-production preview with explicit approval**:

1. Hosting is confirmed as Netlify by the site owner; enable form detection in the site settings if necessary.
2. Deploy a preview and confirm Netlify's **Forms** dashboard detects `web-enquiry` with the expected input names.
3. Configure Netlify's submission notification recipient as `dylsonator.b@gmail.com` in its dashboard (not the frontend).
4. Set `VITE_WEB_FORM_PROVIDER=netlify` for the **preview environment only**, redeploy, then submit one harmless test enquiry.
5. Confirm receipt in Netlify's Verified submissions **and** email notification. Check spam handling, duplicate handling, empty/invalid input, privacy text, and the success/error UI. Test from mobile too.
6. Only after those checks and Dylan's explicit approval should the setting be applied to production.

If the site is hosted somewhere other than Netlify, the form and redirects require a host-appropriate implementation; do not activate the flag.

## SEO and limitations

`src/dual/SeoManager.tsx` manages page titles, descriptions, Open Graph tags, canonical URLs, theme colour and relevant Person/WebSite/Service schema on the client. Root metadata is games-only, and `/games` canonicalises to `/`. `public/sitemap.xml` lists **28** canonical public routes, including all 11 game projects and the separate web pages. `public/robots.txt` links to it. Update the sitemap when publishing new approved work.

**Known limitation:** this remains a Vite **client-rendered SPA**, not an SSR/prerendered site. Some crawlers and social sharing bots may not run JavaScript, so route-specific OG metadata might not be visible to all crawlers. For stricter per-route SEO, enable safe build-time prerendering or SSR in a separate reviewed change and verify the output with link-preview tools. No performance or search results are guaranteed.

## Checks and review

```bash
npm ci
npm run test:routes
npm run build
npm run dev
```

Local static checks completed: TypeScript/TSX parsing, PostCSS parsing, sitemap XML parsing, route/redirect/field checks, package prices, and game project preservation. A new read-only GitHub Actions pull-request check runs `npm ci`, `npm run test:routes`, and `npm run build` against the branch on a normal npm-enabled runner. The local environment does not have the complete npm dependency cache. The PR GitHub Actions workflow performs dependency install, route/content checks and production build using a normal runner. Run and verify its latest result before merging, and complete manual rendered desktop/tablet/mobile QA.

Manual review checklist:

- Root `/`: game portfolio immediately opens. No selection screen, visible web links or portfolio switcher.
- Web header: existing red computer/gear logo appears instead of “df”, and web-only footer actions appear.
- Shareable independent URLs: `/games` and `/web`, without links between them.
- Games: featured carousel, 11 projects, all case studies, images/videos, About, CV, contact and mobile nav. The Last Service now has five optimised genuine gameplay screenshots and an up-to-date 2026 release/patch case study.
- Legacy URLs: each redirects to its matching new game page (or `/web/services`).
- Web: six detail routes, maintenance page, each service CTA preselecting the correct form choice, no fabricated client projects, real Upwork/Fiverr links.
- Contact: disabled before configuration; complete consent, validation and hosted delivery tests before enabling.
- SEO: page metadata, sitemap, redirects, direct URL refreshes, no unpublished work.
- Accessibility: keyboard navigation, focus styles, headings, contrast and reduced-motion.
- Review device widths around 320px, 375px, 768px, 1024px and desktop; check no horizontal overflow.

## Changed files

- `src/main.tsx`: additional web-service/maintenance routes; original games-first root and old links preserved.
- `src/components/CurrentProjects.tsx`: migrated game project URLs only.
- `src/dual/SeoManager.tsx`, `not-found.css`: standalone routing SEO and fallback styling. Removed the unneeded portfolio selector and switcher stylesheet.
- `src/web/WebPortfolio.tsx` and `web.css`: service catalogue integration and guarded contact improvements; existing web identity preserved. `src/web/data.ts` fixed website packages unchanged.
- `src/web/offerings.ts`, `ServiceCatalog.tsx`, `service-catalog.css`: six optional services, detail pages, three care plans and scoped responsive styling.
- `src/projects.ts`, `public/images/gallery/last-service/*.webp`: updated game programming breakdown with five genuine in-game captures, compressed for the web.
- `src/services.ts`: previously supplied public Upwork and Fiverr links brought in from the live `main` branch.
- `index.html`: static hosted form blueprint and default meta tags.
- `public/_redirects`, `robots.txt`, `sitemap.xml`: routing compatibility and discovery.
- `src/vite-env.d.ts`, `.env.example`: documented safe form activation.
- `scripts/verify-dual.mjs`, `package.json`: dependency-free architecture checks.
- `.github/workflows/portfolio-checks.yml`: PR-only type-check, route check and production build; no deployment steps.

**No existing games project assets or case-study copy were deleted.**
