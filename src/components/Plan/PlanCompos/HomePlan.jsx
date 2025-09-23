import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomePlan = () => {

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
   
    <div>
        <div className='homepage-plan'>
               <img src="/home.jpg" className='bgd-img' />
                
                <div className='overlay-plan'>
                   <div className='btns-container'>
                      <div className='btn'>
                        <button  onClick={navigateHome}>Home</button>
                      </div>
                       <div className='btn'>
                        <button onClick={navigateFlights} >Flights</button>
                       </div>
                        <div className='btn'>
                         <button  onClick={navigateHotels}>Hotels</button>
                        </div>
                        <div className='btn'>
                        <button onClick={navigateDiscover} >Discover</button>
                      
                        </div>
                        <div className='btn'>
                        <button onClick={navigateAboutUs}>About us</button>
                        </div>
                        <div className='btn'>
                        <button onClick={navigateContact}>Contact</button>
                        </div>
                        
                      
                   </div>
                   <div className='plan-text'>
                         <h1>Don’t call it a dream. Call it a plan</h1>
                         <h5 style={{color:"white"}}>Travel the way you wish to go with Phnes Travels helping you discover, live and travel at your own pace.</h5>
                   </div>
 
                  
                </div>
        </div>
  
    </div>
    
    
  )
}

export default HomePlan