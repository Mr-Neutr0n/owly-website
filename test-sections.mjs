import { chromium } from 'playwright';
import { mkdir } from 'fs/promises';

const viewports = [
  { name: 'mobile', width: 375, height: 812 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1440, height: 900 },
];

// Sections to test (approximate scroll positions)
const sections = [
  { name: '01-hero', scrollY: 0 },
  { name: '02-parallax-images', scrollY: 800 },
  { name: '03-magic-text', scrollY: 1600 },
  { name: '04-interactive-product', scrollY: 3500 },
  { name: '05-features', scrollY: 4500 },
  { name: '06-video-formats', scrollY: 5500 },
  { name: '07-video-gallery', scrollY: 6500 },
  { name: '08-testimonials', scrollY: 8500 },
  { name: '09-contact', scrollY: 10000 },
  { name: '10-footer', scrollY: 12000 },
];

async function testSections() {
  await mkdir('/tmp/owly-sections', { recursive: true });

  const browser = await chromium.launch();
  console.log('Taking section screenshots at multiple viewports...\n');

  for (const vp of viewports) {
    console.log(`\n=== ${vp.name.toUpperCase()} (${vp.width}x${vp.height}) ===`);

    const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
    await page.goto('http://localhost:3005', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);

    // Get actual page height
    const pageHeight = await page.evaluate(() => document.documentElement.scrollHeight);
    console.log(`Page height: ${pageHeight}px`);

    for (const section of sections) {
      // Adjust scroll position based on viewport (mobile pages are usually taller)
      const adjustedScrollY = vp.name === 'mobile'
        ? Math.min(section.scrollY * 1.2, pageHeight - vp.height)
        : Math.min(section.scrollY, pageHeight - vp.height);

      await page.evaluate((y) => window.scrollTo(0, y), adjustedScrollY);
      await page.waitForTimeout(500);

      const filename = `/tmp/owly-sections/${vp.name}-${section.name}.png`;
      await page.screenshot({ path: filename });
      console.log(`  ${section.name} -> ${filename}`);
    }

    await page.close();
  }

  await browser.close();
  console.log('\n--- Screenshots saved to /tmp/owly-sections/ ---');
}

testSections().catch(console.error);
