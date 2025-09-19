import React from 'react'
import flights from "../../../assets/flights.jpg";
import hotels from "../../../assets/hotels.jpg";


const ShowPlan = () => {
     const backgroundFlights = {
    backgroundImage: `url(${flights})`,
    backgroundSize: 'cover', 
    backgroundPosition: 'right', 
    backgroundRepeat: 'no-repeat', 
    height: '40vh', 
    width: "250px",
    borderRadius:"10px" ,
  };
    
    const backgroundHotels = {
    backgroundImage: `url(${hotels})`,
    backgroundSize: 'cover', 
    backgroundPosition: 'left', 
    backgroundRepeat: 'no-repeat', 
    height: '40vh', 
    width: '250px',
    borderRadius: "10px", 
  };



  return (
    <div className='show-plan-body' >

        <div className='show-container'>
            <div className='show'>
                <div style={backgroundFlights}  id='show1'>
                     <h3>Flights</h3>
                      <h6  >Search flights & places and book for your amazing trips.</h6>
                      <button className='show-btn'> Show Flights</button>
                </div>
            </div>
             <div style={backgroundHotels} >
                
                 <div className='show'>
                     <h3 >Hotels</h3>
                     <h6 >From luxury suites to cozy budget rooms, there's always a place to rest and recharge.</h6>
                     <button className='show-btn'>Show Hotels</button>
                 </div>
            </div>
           
           

        </div>

    </div>
  )
}

export default ShowPlan