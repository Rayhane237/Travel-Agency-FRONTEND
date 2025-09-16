import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import HomePage from './components/HOME/HomePage.jsx'
import Signup from './components/Signup/Signup.jsx'
import Login from './components/Login/Login.jsx'
import Plan from './components/Plan/Plan.jsx'


import {  
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
   
   {
    path: "/",
    element: <HomePage />,
  },
    {
    path: "/Signup",
    element: <Signup />,
  },
   {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Plan",
    element: <Plan />,
  },





]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
