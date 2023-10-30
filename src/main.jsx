import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path:"",
        element:<App/>
    },
    {
        path:"/cropclinic",
        element:""
    },
    {
        path:"/reports",
        element:""
    },
    {
        path:"/dash",
        element:""
    }

    ])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
