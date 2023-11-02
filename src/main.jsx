import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import SignUp from "./components/signup/Signup.jsx";
import SignIn from "./components/signup/SignIn.jsx";

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
        element: <App/>
    },
    {
        path:"/signup",
        element: <SignUp/>
    },
    {
        path:"/signin",
        element:<SignIn/>
    }

    ])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
