import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store, persistor } from "./components/redux/auth/store";
import { App } from './components/App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'components/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from "redux-persist/integration/react";

//кольоры для прикладу
const colors = {
  mainText: '#000',
  bodyColor: '#fff',
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
         <ThemeProvider theme={colors}>
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
  