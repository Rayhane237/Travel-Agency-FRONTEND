import React from 'react'
import "./BookFlight.css"
import { useNavigate } from 'react-router-dom'
import  { useState } from 'react'
import { IoIosMenu } from 'react-icons/io';
import { RiCloseLargeFill } from 'react-icons/ri';
import Payloads from "./Payloads"

const HeaderBook = () => {
              
           const [sidebarOpen ,setSidebarOpen] = useState(false)
           const toggleSidebar =()=> setSidebarOpen(!sidebarOpen)
             
      
       const navigate = useNavigate()

     const navigateHome =()=>{
      navigate("/Plan")
     }

      const navigateFlights =()=>{
       navigate("/Flights")
      }
      const navigateHotels =()=>{
       navigate("/Hotels")
      }
    const navigateDiscover =()=>{
        navigate("/Discover")
    } 
      const navigateAboutUs =()=>{
           navigate("/About")
       }
       
     
  return (
       
     <div className='black'> 
               {!sidebarOpen && (
                     <button className='navbar-toggle-btn' onClick={toggleSidebar}>
                         <IoIosMenu style={{color:"black"}} />
                    </button>
                      
                )}
                       
                 <div className={`navbar-container ${sidebarOpen ? 'open' : ''}`}>
                      {sidebarOpen && (
                          <button className='navbar-close-btn' onClick={toggleSidebar}>
                                 <RiCloseLargeFill />
                           </button>
                  )}
                                    <h2>PhnesTravel</h2>
                                   <button className='navbar-btn' onClick={navigateHome}>Plan</button>
                                   <button className='navbar-btn' onClick={navigateFlights}>Flights</button>
                                   <button className='navbar-btn' onClick={navigateHotels}>Hotels</button>
                                   <button className='navbar-btn' onClick={navigateDiscover}>Discover</button>
                                   <button className='navbar-btn' onClick={navigateAboutUs}>About us</button>
                                </div>
                                  
          <div className='text-home'>
            
    
           </div>
         <Payloads />                     
    </div>
          

  )
}

export default HeaderBook