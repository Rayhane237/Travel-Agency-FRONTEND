import React from 'react'
import '../AboutUs.css'
import Hotel from "../../../assetsAbout/About5.jpg"
import { useNavigate } from 'react-router-dom';



const HeaderAbout = () => {
       
             
        const background = {
                  backgroundImage: `url(${Hotel})`,
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
                 const navigateContact =()=>{
                 navigate("/Contact")
                  }

  return (
       <div style={background}>
    
         <div className='black'>
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
                        <h1>About Us</h1>
                   </div> 
                     
             </div>

         </div>
          
            

    </div>
  )
}

export default HeaderAbout