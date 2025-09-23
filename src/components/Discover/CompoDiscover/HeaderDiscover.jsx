import React from 'react'
import "../Discover.css";

import { useNavigate } from 'react-router-dom'
import Home from "../../../assetsDiscover/6.jpg"


const HeaderDiscover = () => {
          const background = {
            backgroundImage: `url(${Home})`,
            backgroundSize: 'cover', 
            backgroundPosition: 'right', 
            backgroundRepeat: 'no-repeat', 
            width:"100vw",
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
      const navigateContact =()=>{
        navigate("/Contact")
      }


  return (
       <div style={background}>
    
         <div className='black-d'>

                  <div className='flight-container' >
                 <div className='btns-flight'>
                      <div className='flight-btn'>
                        <button  onClick={navigateHome}>Home</button>
                      </div>
                       <div className='flight-btn'>
                        <button onClick={navigateFlights} >Flights</button>
                       </div>
                        <div className='flight-btn'>
                         <button  onClick={navigateHotels}>Hotels</button>
                        </div>
                        <div className='flight-btn'>
                        <button onClick={navigateDiscover}>Discover</button>
                        </div>
                        <div className='flight-btn'>
                        <button  onClick={navigateAboutUs}>About us</button>
                        </div>
                        <div className='flight-btn'>
                        <button onClick={navigateContact}  >Contact</button>
                        </div>
                      
                   </div>
                      <div className='flight-text'>
                         <h1 >Discover</h1>
                       
                   </div> 
   
             </div>

         </div>
          
            

    </div>
  )
   
}

export default HeaderDiscover