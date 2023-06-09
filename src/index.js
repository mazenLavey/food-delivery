import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import "global.css";
import { MenuDataContextProvider } from "./context/MenuDataContext";
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MenuDataContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MenuDataContextProvider>
  </React.StrictMode>
);
