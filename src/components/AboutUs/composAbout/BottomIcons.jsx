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
                           
                            <h5> <MdModeOfTravel size={100}/> <br />Travel</h5>
                      </div>
                      <div className='icon-b'>
                             
                             <h5>   <PiIslandFill  size={100}/> <br />Island Tour</h5>
                            
                      </div>
                      <div className='icon-b'>
                             
                             <h5>  <FaCity size={100}/> <br />City tour</h5>
                      </div>
                      <div className='icon-b'>
                            
                              <h5>  <FaMapMarkedAlt  size={100}/> <br />Explore World</h5>
                           
                      </div>
          
                   </div>
    </div>
  )
}

export default BottomIcons