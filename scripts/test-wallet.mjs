import { chromium } from 'playwright';
import fs from 'fs';

const outDir = '/workspace/docs/demo';
const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await context.newPage();

const logs = [];
page.on('console', (msg) => logs.push(`[${msg.type()}] ${msg.text()}`));
page.on('pageerror', (err) => logs.push(`[pageerror] ${err.message}`));

await page.goto('http://localhost:3000/', { waitUntil: 'networkidle', timeout: 90000 });
await page.waitForTimeout(2500);
await page.screenshot({ path: `${outDir}/home.png`, fullPage: false });

const btn = page.getByRole('button', { name: /connect wallet/i }).first();
await btn.click({ timeout: 15000 });
await page.waitForTimeout(3500);

const modalVisible = await page.locator('w3m-modal').evaluate((el) => {
  const style = window.getComputedStyle(el);
  const shadow = el.shadowRoot;
  return {
    display: style.display,
    visibility: style.visibility,
    openAttr: el.getAttribute('open'),
    hasShadow: !!shadow,
    shadowText: shadow ? shadow.textContent?.slice(0, 400) : null,
  };
}).catch((e) => ({ error: String(e) }));

await page.screenshot({ path: `${outDir}/wallet-modal.png`, fullPage: false });

await page.goto('http://localhost:3000/buy', { waitUntil: 'networkidle' });
await page.waitForTimeout(1500);
await page.screenshot({ path: `${outDir}/buy-kdat.png`, fullPage: false });

await page.goto('http://localhost:3000/profile', { waitUntil: 'networkidle' });
await page.waitForTimeout(1000);
await page.screenshot({ path: `${outDir}/profile.png`, fullPage: false });

await page.goto('http://localhost:3000/stores', { waitUntil: 'networkidle' });
await page.waitForTimeout(1000);
await page.screenshot({ path: `${outDir}/stores.png`, fullPage: false });

// short video via page screenshots is enough; also write video with playwright
const context2 = await browser.newContext({
  viewport: { width: 1280, height: 720 },
  recordVideo: { dir: '/tmp/pw-video', size: { width: 1280, height: 720 } },
});
const vpage = await context2.newPage();
await vpage.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
await vpage.waitForTimeout(1500);
await vpage.getByRole('button', { name: /connect wallet/i }).first().click().catch(()=>{});
await vpage.waitForTimeout(2500);
await vpage.goto('http://localhost:3000/buy', { waitUntil: 'networkidle' });
await vpage.waitForTimeout(1500);
await vpage.goto('http://localhost:3000/profile', { waitUntil: 'networkidle' });
await vpage.waitForTimeout(1200);
await vpage.goto('http://localhost:3000/stores', { waitUntil: 'networkidle' });
await vpage.waitForTimeout(1200);
await context2.close();

fs.writeFileSync('/workspace/docs/demo/wallet-test-result.json', JSON.stringify({ modalVisible, logs: logs.slice(-50) }, null, 2));
console.log(JSON.stringify({ modalVisible, logCount: logs.length }, null, 2));
await browser.close();
