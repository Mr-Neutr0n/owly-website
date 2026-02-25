import { chromium } from 'playwright';

async function screenshot() {
  const browser = await chromium.launch();

  // Test 320px
  const page320 = await browser.newPage({ viewport: { width: 320, height: 568 } });
  await page320.goto('http://localhost:3005', { waitUntil: 'networkidle' });
  await page320.waitForTimeout(1500);
  await page320.evaluate(() => window.scrollTo(0, 650));
  await page320.waitForTimeout(500);
  await page320.screenshot({ path: '/tmp/teams-320-scrolled.png' });
  console.log('320px done');
  await page320.close();

  // Test 428px
  const page428 = await browser.newPage({ viewport: { width: 428, height: 926 } });
  await page428.goto('http://localhost:3005', { waitUntil: 'networkidle' });
  await page428.waitForTimeout(1500);
  await page428.evaluate(() => window.scrollTo(0, 750));
  await page428.waitForTimeout(500);
  await page428.screenshot({ path: '/tmp/teams-428-scrolled.png' });
  console.log('428px done');
  await page428.close();

  await browser.close();
}

screenshot().catch(console.error);
