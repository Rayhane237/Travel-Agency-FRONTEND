import React from 'react'
import Flight from "../../../assets/perfect.jpg"
import { useNavigate } from 'react-router-dom';




const HeaderFlights = () => {
   
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
                        <button>Discover</button>
                        </div>
                        <div className='flight-btn'>
                        <button>About us</button>
                        </div>
                        <div className='flight-btn'>
                        <button>Contact</button>
                        </div>
                      
                   </div>
                   <div className='flight-text'>
                         <h1>Create your own travel wish list and leave the rest for us.</h1>
                         <h5 style={{color:"white"}}>Special offers to suit your plan.</h5>
                   </div> 
   
             </div>

       </div>  
    </div>
  )
}

export default HeaderFlights