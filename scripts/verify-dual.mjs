/** Dependency-free architecture/SEO/asset checks. Run with npm run test:routes. */
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(fileURLToPath(new URL('.', import.meta.url)), '..');
const file = path => readFileSync(join(root, path), 'utf8');
let failures = 0;
function check(condition, label) {
  console.log(`${condition ? 'PASS' : 'FAIL'}  ${label}`);
  if (!condition) failures++;
}

const routes = file('src/main.tsx');
const sitemap = file('public/sitemap.xml');
const redirects = file('public/_redirects');
const html = file('index.html');
const web = file('src/web/WebPortfolio.tsx');
const data = file('src/web/data.ts');
const offerings = file('src/web/offerings.ts');
const catalog = file('src/web/ServiceCatalog.tsx');
const gameMedia = 'public/images/gallery/last-service';
const projects = file('src/projects.ts');
const slugs = [...projects.matchAll(/"slug":\s*"([^\"]+)"/g)].map(m => m[1]);
const knownPaths = ['/', '/games/projects', '/games/about', '/games/contact', '/web', '/web/services', '/web/maintenance', '/web/projects', '/web/about', '/web/contact', '/web/privacy', ...['speed-optimisation','local-seo','google-business-profile','contact-forms','galleries','booking-systems'].map(id => `/web/services/${id}`)];

for (const path of knownPaths) check(sitemap.includes(`<loc>https://dylanfliski.com${path}</loc>`), `Sitemap: ${path}`);
for (const slug of slugs) check(sitemap.includes(`<loc>https://dylanfliski.com/games/projects/${slug}</loc>`), `Game project preserved: ${slug}`);
for (const slug of slugs) check(!file('src/web/data.ts').includes(`slug: '${slug}'`), `Game project ${slug} not duplicated in web portfolio`);
check(slugs.length === 11, `Existing game project count unchanged (${slugs.length})`);
check(routes.includes('path="/games"') && routes.includes('path="/web"') && routes.includes('path="/"'), 'Separate games and web routes mounted');
check(routes.includes('<Route path="/" element={<GamePortfolioLayout />}'), 'Root displays original game portfolio, not a chooser');
check(!routes.includes('PortfolioChooser') && !routes.includes('Switch to Web Development'), 'No chooser or cross-promotion from games');
check(!web.includes('to="/games"') && !web.includes('to="/"'), 'Web portfolio never links to games or chooser');
check(web.includes('/images/logo-mark.png') && existsSync(join(root, 'public/images/logo-mark.png')), 'Web header reuses existing Games Programmer logo');
check(!web.includes('OTHER PORTFOLIO') && !web.includes('Switch to Game Development'), 'Web footer and header stay independent');
check(!existsSync(join(root, 'src/dual/PortfolioChooser.tsx')), 'Removed old selection page component');
check(routes.includes('path="/projects/:slug"') && redirects.includes('/projects/:slug /games/projects/:slug 301'), 'Legacy game project redirect');
check(redirects.includes('/* /index.html 200'), 'SPA fallback configured');
check(web.includes('publishedWebProjects') && data.includes('clientPermission === true'), 'Client approval gating');
check(data.includes('webProjects: WebProject[] = []'), 'No invented client projects');
for (const p of [79, 149, 249, 349]) check(data.includes(`priceGBP: ${p}`), `Introductory rate £${p}`);
check(html.includes('data-netlify="true"') && html.includes('name="web-enquiry"'), 'Static hosted form blueprint detected');
for (const input of ['name','business','email','phone','website','service','budget','contact-method','description','consent','bot-field']) check(html.includes(`name="${input}"`) && web.includes(`name="${input}"`), `Form field present in HTML blueprint and React: ${input}`);
check(web.includes("import.meta.env.VITE_WEB_FORM_PROVIDER === 'netlify'"), 'Form disabled unless explicitly configured');
check(html.includes('name="submitted-at"') && web.includes("body.set('submitted-at'"), 'Submission timestamp sent to Netlify');
check(web.includes("query.get('service') ?? query.get('package')") && web.includes('serviceChoices.some'), 'Service selection is allowlisted and accepts legacy package links');
check(web.includes('value={selectedService}') && web.includes('setSelectedService(defaultService)'), 'Service choice updates when contact URL changes');
check(web.includes('web-email-fallback') && web.includes('emailHref'), 'Disabled form has an actionable email enquiry instead');
check(routes.includes('aria-pressed={filter === f}'), 'Game archive filters expose selected state');
check(web.includes("state === 'submitting'") && web.includes('disabled={!formEnabled'), 'Submission feedback and disabled state');
check(web.includes("method: 'POST'") && web.includes("headers: { 'Content-Type': 'application/x-www-form-urlencoded' }"), 'Hosted form submission uses URL encoded POST');
check(web.includes('role="alert"') && web.includes('role="status"'), 'Form feedback is announced accessibly');
check(file('src/style.css').includes('prefers-reduced-motion') && file('src/web/web.css').includes('prefers-reduced-motion'), 'Reduced-motion CSS present');
check(existsSync(join(root, 'public/robots.txt')) && sitemap.includes('dylanfliski.com'), 'SEO discovery files present');
check(file('src/services.ts').includes('https://www.fiverr.com/dylsonator') && file('src/services.ts').includes('www.upwork.com/services/product'), 'Known public freelance links retained');
check(file('src/components/CurrentProjects.tsx').includes('/games/projects/the-last-service'), 'Latest work points to migrated case study');
for (const [id,lo,hi] of [
  ['speed-optimisation',49,99],['local-seo',59,119],
  ['google-business-profile',39,69],['contact-forms',29,59],
  ['galleries',39,79],['booking-systems',79,149],
]) {
  check(offerings.includes(`id: '${id}'`) && catalog.includes('extraServices.map'), `Optional service published: ${id}`);
  check(offerings.includes(`minGBP: ${lo},`) && offerings.includes(`maxGBP: ${hi},`), `Indicative range for ${id}`);
  check(routes.includes('path="services/:slug"'), 'Service detail route mounted');
}
for (const [id, price] of [['essential-care',15],['business-care',29],['priority-care',49]]) {
  check(offerings.includes(`id: '${id}'`) && offerings.includes(`monthlyGBP: ${price}`), `Care plan ${id} £${price}/month`);
}
check(routes.includes('path="maintenance"') && catalog.includes('WebMaintenance'), 'Monthly care route enabled');
check(catalog.includes('quotePath(service.id)') && catalog.includes('quotePath(plan.id)'), 'Every optional service and care plan has a quote action');
check(file('src/dual/SeoManager.tsx').includes("normalised.startsWith('/web/services/')"), 'Dedicated SEO metadata for each service page');
for (const name of ['bus-stop.webp','bus-interior.webp','ticket.webp','fire-wide.webp','fire-detail.webp']) {
  check(existsSync(join(root, gameMedia, name)) && projects.includes(`/images/gallery/last-service/${name}`), `Authentic Last Service screenshot: ${name}`);
}
check(projects.includes('v1.0.1 bug fixes published 26 October') && projects.includes('"C++"') && projects.includes('"Blueprints"'), 'Last Service technically accurate release update');


console.log(`\n${failures ? `${failures} failure(s)` : 'All architecture smoke checks passed'}.`);
if (failures) process.exitCode = 1;
