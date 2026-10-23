#!/usr/bin/env node
/**
 * Capture sales-kit screenshots from the local Vite app (open-browse in DEV).
 * Usage: node scripts/capture-screenshots.mjs [baseUrl]
 */
import { chromium } from '../../biomark-web/node_modules/playwright/index.mjs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.resolve(__dirname, '../assets/screenshots');
const BASE = process.argv[2] || 'http://localhost:5173';

const shots = [
  { file: '01-homepage.png', url: '/', fullPage: true },
  { file: 'hero-banner.png', url: '/', fullPage: false, clipHero: true },
  { file: '02-register.png', url: '/register.html' },
  { file: '03-member-dashboard.png', url: '/member-dashboard.html?browse=1' },
  { file: '04-farmer-dashboard.png', url: '/farmer-dashboard.html?browse=1' },
  { file: '05-admin-dashboard.png', url: '/admin-dashboard.html?browse=1' },
  { file: '06-checkout.png', url: '/checkout.html?browse=1' },
  { file: '07-farm-detail.png', url: '/farm-detail.html?id=1&browse=1' },
];

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 1,
});

for (const shot of shots) {
  const url = `${BASE}${shot.url}`;
  console.log(`→ ${shot.file}  ${url}`);
  await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 }).catch(() =>
    page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 })
  );
  await page.waitForTimeout(1200);

  const outPath = path.join(OUT, shot.file);
  if (shot.clipHero) {
    await page.screenshot({ path: outPath, clip: { x: 0, y: 0, width: 1440, height: 900 } });
  } else {
    await page.screenshot({ path: outPath, fullPage: Boolean(shot.fullPage) });
  }
  console.log(`  saved ${outPath}`);
}

await browser.close();
console.log('Done.');
