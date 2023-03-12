import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import './index.css'

//RUTAS DE IMPORTACION
import Root from './routes/root'
import ItemRoot from './routes/items';

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
