import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './components/HOME/HomePage.jsx'
import Signup from './components/Signup/Signup.jsx'
import Login from './components/Login/Login.jsx'
import Plan from './components/Plan/Plan.jsx'
import Flights from './components/Flights/Flights.jsx'
import BookFlight from "./components/Flights/BookFlight/BookFlights.jsx"
import Hotels from './components/Hotels/Hotels.jsx'
import BookHotel from './components/Hotels/BookHotel.jsx'

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
   {
      path: "/Flights",
       element:<Flights />
   },
    {  
        path:"/BookFlight" ,
        element:<BookFlight />
    },

  
     {
          path: "/Hotels",
           element: <Hotels />
      },

     { 
        path:"BookHotel",
       element:<BookHotel /> 
      },

          
  






]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
