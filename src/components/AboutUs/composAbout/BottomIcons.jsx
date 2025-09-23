import React from 'react'
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaCity } from "react-icons/fa";
import { PiIslandFill } from "react-icons/pi";
import { MdModeOfTravel } from "react-icons/md";
import '../AboutUs.css'

const BottomIcons = () => {
  return (
    <div>
       <br />
                   <div className='icons-container'>
                      <div className='icon-b' >
                            <MdModeOfTravel size={100}/>
                            <h5>Travel</h5>
                      </div>
                      <div className='icon-b'>
                             <PiIslandFill  size={100}/>
                             <h5>Island Tour</h5>
                            
                      </div>
                      <div className='icon-b'>
                              <FaCity size={100}/>
                             <h5>City tour</h5>
                      </div>
                      <div className='icon-b'>
                              <FaMapMarkedAlt  size={100}/>
                              <h5>Explore World</h5>
                           
                      </div>
          
                   </div>
    </div>
  )
}

export default BottomIcons