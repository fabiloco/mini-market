import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { MiniMarketApp } from './MiniMarketApp';

import { store } from './store';

import './globals.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <MiniMarketApp />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
