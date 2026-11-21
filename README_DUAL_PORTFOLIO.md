# Dylan Fliski — Dual Portfolio Upgrade

**Status:** Git branch / review preparation. **Do not merge to `main` or deploy without Dylan's approval.**

## What changed and why

The original game portfolio remains intact: all **11** game projects, case studies, screenshots, videos, demos, GitHub/itch links, the featured project carousel, the latest-work cards, CV, About page, and game contact options are preserved. Game pages now live under `/games` rather than sharing navigation and content with web development.

The existing Vite 6 / React 19 / TypeScript / Tailwind 3 setup is retained, with **no new runtime dependencies**. The existing game CSS is unchanged; new styles are scoped to `.portfolio-choice` (dual landing) and `.web-site` (light, green-accent web portfolio). The games section keeps its existing dark/red visual identity. There is a small portfolio switcher above both sites.

### Routes

| Route | Purpose |
| --- | --- |
| `/` | Two-panel developer selection landing page |
| `/games` | Existing game portfolio homepage |
| `/games/projects` | Existing 11-project games archive |
| `/games/projects/:slug` | Existing game case studies |
| `/games/about` | Games background, skills and CV |
| `/games/contact` | Existing games contact options |
| `/web` | Local small-business web development homepage |
| `/web/services` | Four introductory-rate website packages |
| `/web/projects` | Empty state until authentic work can be shown |
| `/web/projects/:slug` | Extensible approved web case studies |
| `/web/about` | Independent web developer background and skills |
| `/web/contact` | Website project enquiry form / direct email fallback |
| `/web/privacy` | Enquiry privacy information |

The Netlify-style `public/_redirects` preserves historic public URLs: `/projects`, `/projects/:slug`, `/about`, `/contact`, `/services`. The React routes provide matching in-app fallbacks. The existing root homepage is intentionally replaced by the choice landing, **not** redirected.

### Prices — introductory rates

Edit `src/web/data.ts` to change the packages, terms and web projects.

- Website Refresh — **£79**, one existing page, one revision.
- Starter Website — **£149**, one responsive page, one revision.
- Small Business Website — **£249**, three pages, two revision rounds.
- Complete Business Website — **£349**, five pages, two revision rounds.

The page explicitly excludes hosting, domain registration, premium plugins, ecommerce and advanced booking systems. No SEO ranking or lead-generation guarantees are made.

### Publishing future web work

Use `src/web/data.ts` `webProjects` to add genuine case studies. A `type: 'Client'` item remains invisible until **both** `clientPermission: true` and `status: 'Completed'` are set. Obtain permission before using client names, images, screenshots or site links. The existing game projects remain in `src/projects.ts` and are never mixed into the web portfolio.

The initial Web Projects page is deliberately empty; it has no fabricated clients, reviews, ratings or testimonials.

## Netlify-hosted enquiry form — verification required

The repository already used `public/_redirects` for Netlify-style SPA routing. This is consistent with Netlify deployment but **the hosting account, form detection setting, notification recipient, and real delivery have not been independently verified**.

The Web Contact UI implements an accessible form with name, business name, email, optional site URL, package, optional budget, description, consent and a honeypot. `index.html` contains the matching static form blueprint required for Netlify's build-time form detection. React submits URL-encoded POST data to Netlify's form service when enabled. It handles success and network/server errors without exposing credentials. Netlify offers provider-managed spam filtering, in addition to the honeypot; whether it is active on this site must be verified.

**Safe default:** the submit button is disabled and visitors see a clear explanation plus a functional `mailto:` fallback until the hosted form is configured. `src/web/WebPortfolio.tsx` reads `VITE_WEB_FORM_PROVIDER=netlify` at **build** time. `src/vite-env.d.ts` enables Vite's TypeScript environment types. Never put secrets in any `VITE_` variable.

To enable **after deploying to a non-production preview with explicit approval**:

1. Confirm the host is Netlify; enable form detection in the site settings if necessary.
2. Deploy a preview and confirm Netlify's **Forms** dashboard detects `web-enquiry` with the expected input names.
3. Configure Netlify's submission notification recipient as `dylsonator.b@gmail.com` in its dashboard (not the frontend).
4. Set `VITE_WEB_FORM_PROVIDER=netlify` for the **preview environment only**, redeploy, then submit one harmless test enquiry.
5. Confirm receipt in Netlify's Verified submissions **and** email notification. Check spam handling, duplicate handling, empty/invalid input, privacy text, and the success/error UI. Test from mobile too.
6. Only after those checks and Dylan's explicit approval should the setting be applied to production.

If the site is hosted somewhere other than Netlify, the form and redirects require a host-appropriate implementation; do not activate the flag.

## SEO and limitations

`src/dual/SeoManager.tsx` manages page titles, descriptions, Open Graph tags, canonical URLs, theme colour and relevant Person/WebSite/Service schema on the client. `public/sitemap.xml` lists **22** public routes, including all 11 game projects. `public/robots.txt` links to it. Update the sitemap when publishing new approved work.

**Known limitation:** this remains a Vite **client-rendered SPA**, not an SSR/prerendered site. Some crawlers and social sharing bots may not run JavaScript, so route-specific OG metadata might not be visible to all crawlers. For stricter per-route SEO, enable safe build-time prerendering or SSR in a separate reviewed change and verify the output with link-preview tools. No performance or search results are guaranteed.

## Checks and review

```bash
npm ci
npm run test:routes
npm run build
npm run dev
```

Local static checks completed: TypeScript/TSX parsing, PostCSS parsing, sitemap XML parsing, route/redirect/field checks, package prices, and game project preservation. A new read-only GitHub Actions pull-request check runs `npm ci`, `npm run test:routes`, and `npm run build` against the branch on a normal npm-enabled runner. **The complete production build and rendered desktop/tablet/mobile QA could not be run in the isolated environment because `npm ci --offline` was missing a cached npm package.** Run those checks using an environment with normal npm access before merging.

Manual review checklist:

- Landing: both panels keyboard clickable and visually distinct on mobile and desktop.
- Games: featured carousel, 11 projects, all case studies, images/videos, About, CV, contact and mobile nav.
- Legacy URLs: each redirects to its matching new game page (or `/web/services`).
- Web: each page and mobile menu, accurate package prices, no fabricated client projects, real Upwork/Fiverr links.
- Contact: disabled before configuration; complete consent, validation and hosted delivery tests before enabling.
- SEO: page metadata, sitemap, redirects, direct URL refreshes, no unpublished work.
- Accessibility: keyboard navigation, focus styles, headings, contrast and reduced-motion.
- Review device widths around 320px, 375px, 768px, 1024px and desktop; check no horizontal overflow.

## Changed files

- `src/main.tsx`: new routing shells, game-link migration, contextual portfolio switcher, legacy redirects.
- `src/components/CurrentProjects.tsx`: migrated game project URLs only.
- `src/dual/PortfolioChooser.tsx`, `dual.css`, `SeoManager.tsx`: landing page, switcher styling, SEO.
- `src/web/WebPortfolio.tsx`, `web.css`, `data.ts`: independent web portfolio, pricing, guarded project model and hosted enquiry UX.
- `src/services.ts`: previously supplied public Upwork and Fiverr links brought in from the live `main` branch.
- `index.html`: static hosted form blueprint and default meta tags.
- `public/_redirects`, `robots.txt`, `sitemap.xml`: routing compatibility and discovery.
- `src/vite-env.d.ts`, `.env.example`: documented safe form activation.
- `scripts/verify-dual.mjs`, `package.json`: dependency-free architecture checks.
- `.github/workflows/portfolio-checks.yml`: PR-only type-check, route check and production build; no deployment steps.

**No existing games project assets or case-study copy were deleted.**
