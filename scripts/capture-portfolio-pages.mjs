/**
 * Capture genuine browser-rendered screenshots from the checked-out portfolio.
 * Run after building and starting Vite preview on 127.0.0.1:4173.
 * Screenshots are evidence of the actual UI, not composited marketing mockups.
 */
import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';

const baseUrl = 'http://127.0.0.1:4173';
const output = resolve('public/images/portfolio/captures');
const captures = [
  { path: '/', file: 'games-home.jpg', selector: null },
  { path: '/games/projects', file: 'games-projects.jpg', selector: '.filterbar', offset: 230 },
  { path: '/games/projects/the-last-service', file: 'games-case-study.jpg', selector: null },
  { path: '/web', file: 'web-home.jpg', selector: null },
  { path: '/web/services', file: 'web-services.jpg', selector: '.web-pricing-grid', offset: 90 },
  { path: '/web/contact', file: 'web-contact.jpg', selector: '.web-contact-layout', offset: 50 },
];

async function waitForPreview() {
  for (let retry = 0; retry < 40; retry++) {
    try {
      const response = await fetch(baseUrl);
      if (response.ok) return;
    } catch { /* Vite may not be listening yet */ }
    await new Promise(done => setTimeout(done, 500));
  }
  throw new Error('Local Vite preview was not available');
}

await mkdir(output, { recursive: true });
await waitForPreview();
const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] });

try {
  const page = await browser.newPage({ viewport: { width: 1365, height: 900 }, deviceScaleFactor: 1, reducedMotion: 'reduce' });
  page.on('pageerror', error => console.error('PAGE ERROR:', error.stack || error.message));
  page.on('console', message => { if (message.type() === 'error') console.error('BROWSER CONSOLE:', message.text()); });
  for (const capture of captures) {
    const response = await page.goto(baseUrl + capture.path, { waitUntil: 'domcontentloaded', timeout: 30000 });
    if (!response || !response.ok()) throw new Error('Page failed: ' + capture.path);
    try {
      await page.locator('main').first().waitFor({ state: 'visible', timeout: 10000 });
    } catch (error) {
      console.error('FAILED URL:', page.url());
      console.error('BODY:', (await page.locator('body').innerText()).slice(0, 1500));
      console.error('HTML:', (await page.content()).slice(0, 2200));
      throw error;
    }
    await page.evaluate(async () => {
      await document.fonts.ready;
      await Promise.all(Array.from(document.images).filter(img => img.loading !== 'lazy').map(img => img.decode().catch(() => {})));
    });
    if (capture.selector) {
      const el = page.locator(capture.selector).first();
      await el.waitFor({ state: 'visible', timeout: 10000 });
      await el.evaluate((node, offset) => {
        const y = node.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: Math.max(0, y), behavior: 'instant' });
      }, capture.offset ?? 0);
    } else {
      await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
    }
    await page.waitForTimeout(350);
    const target = resolve(output, capture.file);
    await page.screenshot({ path: target, type: 'jpeg', quality: 83, fullPage: false, animations: 'disabled' });
    console.log('Captured ' + capture.path + ' → ' + target);
  }
} finally {
  await browser.close();
}
