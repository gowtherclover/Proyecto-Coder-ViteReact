import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import './index.css'

//RUTAS DE IMPORTACION
import Root from './routes/root'
import ItemRoot from './routes/items';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCXiWkBcO1N8ebRPJDUIL0jzzFYf6Kd5MM",
  authDomain: "ecommerce-malka.firebaseapp.com",
  projectId: "ecommerce-malka",
  storageBucket: "ecommerce-malka.appspot.com",
  messagingSenderId: "53008726126",
  appId: "1:53008726126:web:ac5cb604bbd25016054e7f"
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
    element: <div>Hello world!</div>,
  },
  {
    path: "/checkout",
    element: <div>Hello world!</div>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
