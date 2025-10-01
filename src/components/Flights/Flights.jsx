import React from 'react'
import "./Flights.css"
import HeaderFlights from './Flights.compos/HeaderFlights'
import Destinations from './Flights.compos/Destinations'
import Kayaking from './Flights.compos/Kayaking'
import Footer from "./Flights.compos/Footer"


const Flights = () => {
    
  return (
    <div>
       
       <div className='compo1'>
            <HeaderFlights />
       </div>
     
       <div className='compo2'>
           <Destinations />

       </div>
          <br />
          
        <div >
           <Kayaking />
          
       </div>
    
           
             <div className='compo4'>
             <Footer />
            </div>

       
       



       





    </div>
  )
}

export default Flights