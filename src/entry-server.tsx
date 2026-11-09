// Build-time only: scripts/prerender.mjs renders the page to HTML with this and writes it into dist/index.html.
import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App.tsx';

export const render = () => renderToString(<StrictMode><App /></StrictMode>);
