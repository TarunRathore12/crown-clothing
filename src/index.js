import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import { CartProvider } from './contexts/cart.context';
import './index.scss';
import { store, persistor } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {/* <UserProvider> */}
          {/* <CategoriesProvider> */}
          <CartProvider>
            <App />
          </CartProvider>
          {/* </CategoriesProvider> */}
          {/* </UserProvider> */}
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
