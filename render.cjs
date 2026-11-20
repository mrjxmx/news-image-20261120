// Renders frontpage.html to entry.png at exactly 1024x1024 with headless Chrome.
// The page is one self-contained HTML file (inline CSS and SVG, system fonts),
// so rendering needs no network. Puppeteer comes from the shared radar-tools
// install. Usage: node render.cjs [output-path]
const puppeteer = require('/home/hatch/workspace/makefun/radar-tools/node_modules/puppeteer');
const { join } = require('node:path');

async function main() {
  const out = process.argv[2] ?? join(__dirname, 'entry.png');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-dev-shm-usage', '--force-color-profile=srgb'],
  });
  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1024, height: 1024, deviceScaleFactor: 1 });
    await page.goto('file://' + join(__dirname, 'frontpage.html'), { waitUntil: 'load' });
    await new Promise((resolve) => setTimeout(resolve, 350));
    // Diagnostic: how far down the stacked page content actually reaches, so
    // an over- or under-filled page is visible before the shot is taken.
    const bottom = await page.evaluate(() => {
      const host = document.querySelector('.page');
      let edge = 0;
      for (const child of host.children) {
        edge = Math.max(edge, child.getBoundingClientRect().bottom);
      }
      return Math.round(edge);
    });
    console.log(`content bottom edge: ${bottom}px of 1024`);
    await page.screenshot({ path: out, type: 'png' });
    console.log('wrote', out);
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
