import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from './Root/Root.jsx';
import Home from './Component/Pages/Home/Home';
import About from './Component/Pages/About/About';
import LogIn from './Component/Pages/LogIn/LogIn';
import Register from './Component/Pages/Register/Register';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      {
        path:'/home',
        element:<Home/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/login',
        element: <LogIn/>
      },
      {
        path:'/register',
        element: <Register/>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/> 
  </React.StrictMode>,
)
