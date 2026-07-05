import { JSDOM } from 'jsdom';
const dom = new JSDOM('<!DOCTYPE html><html><body><div id="root"></div></body></html>', {
  url: 'http://localhost',
  pretendToBeVisual: true
});
global.window = dom.window;
global.document = dom.window.document;
Object.defineProperty(global, 'navigator', {
  value: dom.window.navigator,
  configurable: true
});

async function run() {
  try {
    await import('./src/main.tsx');
    console.log("Main loaded successfully!");
  } catch (e) {
    console.error('ERROR RETAINED:', e);
  }
}
run();
