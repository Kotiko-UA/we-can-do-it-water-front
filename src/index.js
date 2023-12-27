import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store, persistor } from "./components/redux/auth/store";
import { App } from './components/App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'components/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from "redux-persist/integration/react";

const theme = {
  primaryWhite: '#FFFFFF',
  primaryBlack: '#2F2F2F',
  primaryBlue: '#407BFF',
  secondaryGrey: '#ECF2FF',
  secondaryRed: '#EF5050',
  secondaryBlue: '#9EBBFF',
  secondaryOrange: '#FF9D43',
  secondaryLightBlue: '#D7E3FF',
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <BrowserRouter basename="/we-can-do-it-water-front">
            <App />
            <GlobalStyles />
          </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// <ThemeProvider theme={colors}>