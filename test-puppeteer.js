import puppeteer from 'puppeteer';
(async () => {
  try {
    const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
    const page = await browser.newPage();
    
    page.on('console', msg => console.log('BROWSER CONSOLE:', msg.text()));
    page.on('pageerror', err => console.log('BROWSER ERROR:', err.message));
    page.on('requestfailed', request => {
      console.log('REQUEST FAILED:', request.url(), request.failure().errorText);
    });

    await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
    await new Promise(r => setTimeout(r, 2000));
    
    const html = await page.content();
    if (html.includes('id="root"></div>')) {
       console.log('ROOT IS EMPTY!');
    } else {
       console.log('ROOT IS POPULATED.');
    }
    await browser.close();
  } catch (e) {
    console.error('SCRIPT ERROR:', e);
  }
})();
