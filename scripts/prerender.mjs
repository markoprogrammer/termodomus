// After `vite build`: render the app to HTML and put it inside #root in dist/index.html, so the served page has its
// headings, text and links without JavaScript. Run by `npm run build`.
import { readFileSync, writeFileSync, rmSync } from 'node:fs';

const { render } = await import('../dist-ssr/entry-server.js');
const file = 'dist/index.html';
const html = readFileSync(file, 'utf8');
if (!html.includes('<!--app-->')) throw new Error('prerender: <!--app--> not found in dist/index.html');
writeFileSync(file, html.replace('<!--app-->', render()));
rmSync('dist-ssr', { recursive: true, force: true });
console.log('prerendered dist/index.html');
