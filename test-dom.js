import { JSDOM } from 'jsdom';
const dom = new JSDOM('<!DOCTYPE html><html><body><div id="root"></div></body></html>', {
  url: 'http://localhost'
});
global.window = dom.window;
global.document = dom.window.document;
Object.defineProperty(global, 'navigator', {
  value: dom.window.navigator,
  configurable: true
});

async function run() {
  const React = await import('react');
  const { renderToString } = await import('react-dom/server');
  const { default: App } = await import('./src/App.tsx');
  try {
    console.log(renderToString(React.createElement(App)));
  } catch (e) {
    console.error('ERROR RETAINED:', e);
  }
}
run();
