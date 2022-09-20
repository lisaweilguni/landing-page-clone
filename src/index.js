import { css, Global } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import baskerville from './fonts/Libre_Baskerville/LibreBaskerville-Regular.ttf';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Global
      styles={css`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }
        body {
          background-color: white;
          color: #202020;
          margin: 0;
          line-height: 20px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

          font-size: 14px;
        }
      `}
    />
    <App />
  </React.StrictMode>,
);
