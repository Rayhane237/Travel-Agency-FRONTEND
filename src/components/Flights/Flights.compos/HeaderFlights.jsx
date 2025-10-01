import React from 'react'
import Flight from "../../../assets/perfect.jpg"
import { useNavigate } from 'react-router-dom';
import  { useState } from 'react'
import { IoIosMenu } from 'react-icons/io';
import { RiCloseLargeFill } from 'react-icons/ri';


const HeaderFlights = () => {
             
      const [sidebarOpen ,setSidebarOpen] = useState(false)
      const toggleSidebar =()=> setSidebarOpen(!sidebarOpen)
                 
          
   
          const background = {
            backgroundImage: `url(${Flight})`,
             backgroundSize: 'cover', 
             backgroundPosition: 'right', 
             backgroundRepeat: 'no-repeat', 
             width:"100%",
             height:"370px",
             margin:"0",
             padding:"0",
             borderRadius:"0px" ,
             position:'relative',
            }; 

  const navigate = useNavigate()
     const navigateHome =()=>{
      navigate("/")
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
        // const navigateContact =()=>{
        //      navigate("/Contact")
        // }

  return (
         <header style={background}>
                     <div className='black'> 
                             {!sidebarOpen && (
                               <button className='toggle-btn' onClick={toggleSidebar}>
                                     <IoIosMenu style={{color:"black"}} />
                                 </button>
                  
                             )}
                   
                            <div className={`nav-container ${sidebarOpen ? 'open' : ''}`}>
                             {sidebarOpen && (
                              <button className='nav-close-btn' onClick={toggleSidebar}>
                                     <RiCloseLargeFill />
                                 </button>
                              )}
                                <h2>PhnesTravel</h2>
                               <button className='nav-btn' onClick={navigateHome}>Home</button>
                               <button className='nav-btn' onClick={navigateFlights}>Flights</button>
                               <button className='nav-btn' onClick={navigateHotels}>Hotels</button>
                               <button className='nav-btn' onClick={navigateDiscover}>Discover</button>
                               <button className='nav-btn' onClick={navigateAboutUs}>About us</button>
                            </div>
                              
                              <div className='text-home'>
                                 <h2>Create your travel wish list and leave the rest for us</h2> 

                              </div>
                              
                          </div>
     </header>   
  )
}

export default HeaderFlights