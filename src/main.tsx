import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import App from '@/App';
import { GlobalProvider } from '@/contexts';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalProvider>
      <Router>
        <App />
      </Router>
    </GlobalProvider>
  </React.StrictMode>,
);
