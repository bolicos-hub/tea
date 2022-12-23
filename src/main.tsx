import React from 'react';
import ReactDOM from 'react-dom/client';

import App from '#/pages/App';

const ROOT = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

ROOT.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
