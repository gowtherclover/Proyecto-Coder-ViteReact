import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import './index.css'

//RUTAS DE IMPORTACION
import App from './routes/app'
import ItemRoot from './routes/item';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/category/:id",
    element: <App/>,
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
