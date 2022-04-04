import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { NavProvider } from 'utils/NavProvider';

import { App } from './App';

import './styles.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavProvider>
        <App />
      </NavProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
