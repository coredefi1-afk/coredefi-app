import puppeteer from 'puppeteer';
(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 2000));
  const html = await page.content();
  console.log(html.substring(0, 1000)); // Print the first 1000 chars of the page content
  await browser.close();
})();
