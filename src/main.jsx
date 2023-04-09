import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import './index.css'

//RUTAS DE IMPORTACION
import Root from './routes/root'
import ItemRoot from './routes/items';
import Cart from './routes/cart';
import Checkout from './routes/checkout';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId
};

const app = initializeApp(firebaseConfig);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
  },
  {
    path: "/category/:id",
    element: <Root/>,
  },
  {
    path: "/item/:category/:id",
    element: <ItemRoot/>,
  },
  {
    path: "/cart",
    element: <Cart/>,
  },
  {
    path: "/checkout",
    element: <Checkout/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
