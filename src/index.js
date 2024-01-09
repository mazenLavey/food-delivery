import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import "global.css";
import { GlobalProvider } from "./context/GlobalContext";
import { MenuProvider } from "./context/MenuContext";
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalProvider>
      <MenuProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MenuProvider>
    </GlobalProvider>
  </React.StrictMode>
);
