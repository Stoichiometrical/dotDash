import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import SignUp from "./components/signup/Signup.jsx";
import SignIn from "./components/signup/SignIn.jsx";
import Home from "./pages/dashboard/Home.jsx";
import CropClinics from "./pages/crop_clinic/CC.jsx";
import Report from "./pages/reports/Report.jsx";

const router = createBrowserRouter([
    {
        path:"",
        element:<SignIn/>
    },
    {
        path:"/cropclinic",
        element:<CropClinics/>
    },
    {
        path:"/reports",
        element:<Report/>
    },
    {
        path:"/dash",
        element: <Home/>
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
