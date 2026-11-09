import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const root = document.getElementById('root')!;
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);
// The built site arrives with its HTML already in place (scripts/prerender.mjs): React takes it over.
// In development the root is empty and React renders it.
if (root.firstElementChild) hydrateRoot(root, app);
else createRoot(root).render(app);
