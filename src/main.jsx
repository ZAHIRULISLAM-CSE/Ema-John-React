import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './Components/Header/Header';
import Order from './Components/orders/Order';
import Loader from './Components/loaderFunction/Loader';
import SignUp from './Components/config/UserManagement/SignUp';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Header></Header>,
    children:[
      {
        path: "/",
        element:<App></App>
      },
      {
        path: "/order",
        element:<Order></Order>,
        loader:Loader
      },
      {
        path: "/signup",
        element:<SignUp></SignUp>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
