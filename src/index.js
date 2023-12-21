import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'components/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';

const colors = {};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={colors}>
      <BrowserRouter basename="/we-can-do-it-water-front">
        <App />
        <GlobalStyles />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
