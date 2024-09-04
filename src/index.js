import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';


import App from './App';
import { UserProvider } from './contexts/user-context';
import { CategoriesProvider } from './contexts/categories.context.jsx';
import { CardProvider } from './contexts/card.context.jsx';

import './index.scss';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CategoriesProvider>
          <CardProvider>
          <App />
          </CardProvider>
        </CategoriesProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
