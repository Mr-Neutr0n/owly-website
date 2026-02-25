import { chromium } from 'playwright';

const viewports = [
  { name: 'Mobile Small', width: 320, height: 568 },
  { name: 'Mobile', width: 375, height: 812 },
  { name: 'Mobile Large', width: 428, height: 926 },
  { name: 'Tablet', width: 768, height: 1024 },
  { name: 'Tablet Landscape', width: 1024, height: 768 },
  { name: 'Desktop Small', width: 1280, height: 800 },
  { name: 'Desktop', width: 1440, height: 900 },
  { name: 'Desktop Large', width: 1920, height: 1080 },
];

async function testResponsive() {
  const browser = await chromium.launch();
  console.log('Testing responsive layout at multiple viewports...\n');

  const results = [];

  for (const vp of viewports) {
    const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
    await page.goto('http://localhost:3005', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1500);

    // Check for horizontal overflow
    const scrollInfo = await page.evaluate(() => {
      return {
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
        hasOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth
      };
    });

    const status = scrollInfo.hasOverflow ? 'OVERFLOW' : 'OK';
    console.log(`${vp.name} (${vp.width}x${vp.height}): ${status}`);
    if (scrollInfo.hasOverflow) {
      console.log(`  Scroll: ${scrollInfo.scrollWidth}px, Client: ${scrollInfo.clientWidth}px, Overflow: ${scrollInfo.scrollWidth - scrollInfo.clientWidth}px`);
    }

    results.push({ ...vp, ...scrollInfo, status });
    await page.close();
  }

  await browser.close();

  console.log('\n--- Summary ---');
  const failures = results.filter(r => r.hasOverflow);
  if (failures.length === 0) {
    console.log('All viewports passed! No horizontal overflow detected.');
  } else {
    console.log(`${failures.length} viewport(s) have horizontal overflow:`);
    failures.forEach(f => console.log(`  - ${f.name} (${f.width}px)`));
  }
}

testResponsive().catch(console.error);
