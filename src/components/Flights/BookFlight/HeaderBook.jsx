import React from 'react'
import "./BookFlight.css"
import { useNavigate } from 'react-router-dom'


const HeaderBook = () => {
      
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
    
     <div>
          <div className='plan-book' >
               <div className='btns-container-book'>
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
                          <button>Discover</button>
                        </div>
                        <div className='btn'>
                          <button>About us</button>
                        </div>
                        <div className='btn'>
                           <button>Contact</button>
                        </div>
                </div>
           </div>

           
         <div className='flex-input-result'>

            <div className='flex-item'>
              <form className='user-books-flight'>
                <div className='user-books'>
                  <p>From</p>
                  <input className='input' type="text" placeholder='enter your current location' />
                </div>  
                 
                  <div className='user-books'>
                  <p>To</p>
                  <input className='input' type="text" placeholder='enter your destination' />
                 </div>
                  
                 <div className='user-books'>
                  <p>Date of stay</p>
                  <input className='input' type="date" placeholder='enter date of booking' />
                </div>
                   
                <div className='user-books'>
                  <p>Traveler-Class</p>
                  <input className='input' type="text" placeholder='enter your class' />
                </div>

             </form>
            </div>

                 <div className='flex-item'>

                 </div>
            </div>
   </div> 

  )
}

export default HeaderBook