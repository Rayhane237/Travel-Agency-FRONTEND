import React from 'react'
import '../AboutUs.css'
import { RiCustomerService2Fill } from "react-icons/ri";
import { TbTimezone } from "react-icons/tb";
import { MdCardTravel } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";

const MidContent = () => {
  return (
    <div className='mid-content'>
         <div className='mid-text'>
             <h2 style={{color:"black"}}>Why choose us?</h2>
             <h6 style={{color:"rgb(36, 113, 120)"}}>These popular destinations have a lot to offer</h6>
         </div>

         <div className='icons-container'>
            <div className='icon-box' >
                  <MdCardTravel   size={100}/>
                  <h5>Provide hassle free travel at affordable price</h5>
            </div>
            <div className='icon-box'>
                  <TbBrandBooking size={100}/>
                  <h5>Easy booking and comfortable travel.</h5>
            </div>
            <div className='icon-box'>
                   <TbTimezone  size={100}/>
                   <h5>Offers great cuisines & experience unique cultures.</h5>
            </div>
            <div className='icon-box'>
                   <RiCustomerService2Fill size={100}/>
                   <h5>Customer Service 24/7</h5>
            </div>

         </div>

    </div>
  )
}

export default MidContent