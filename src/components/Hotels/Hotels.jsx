import React from 'react'
import "./Hotels.css"
import Header from "./SeeHotels/Header"
import Research from "./SeeHotels/Research"
import Destinations from './SeeHotels/Destinations'
import Kayaking from './SeeHotels/Kayaking'
import Footer from "./SeeHotels/FooterHotel"

const Hotels = () => {
  return (
    <div>
            <div className='compo1'>
                 <Header />
            </div>
             
              <div className='compo2'>
                 <Research />
            </div>
             
            <div >
                 <Destinations />

               
            </div>
                <br />

              <div className='compo4-hotels'>
                 <Kayaking />
            </div>
          
            <div className='compo5-hotels'>
                 <Footer />
            </div>








     
    </div>
  )
}

export default Hotels