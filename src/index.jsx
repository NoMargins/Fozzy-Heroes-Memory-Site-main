import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);

if (container.hasChildNodes()) {
  root.hydrate(<App />);
} else {
  root.render(<App />);
}