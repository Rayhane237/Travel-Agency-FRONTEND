import React from 'react'
import Dubai from "../../../assets/Dubai.jpg";
import albania from "../../../assets/albania.jpg";
import Turkey from "../../../assets/Turkey.jpg";
import paris from "../../../assets/paris.jpg";
import Moscow from "../../../assets/Moscow.jpg";
import italy from "../../../assets/italy.jpg";
import Brazil from "../../../assets/Brazil.jpg";
import Taj from "../../../assets/Taj.jpg";
 import Egypt from "../../../assets/Egypt.jpg";
  import old from "../../../assets/old.jpg";

//scroll elements
import {useRef} from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const TopDestinations = () => {
        
        const scrollRef = useRef(null);

  // scroll functions
  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  
  
    return(  
 
    <div className='scroll-wrapper'>
        <br />
       
           <h4 style={{color:"rgba(21, 63, 72, 1)"}}>Top destinations</h4>
            <h1 style={{color:"black"}}>Discover your love</h1>
      

       <div className='scroll-buttons-container' style={{ display: "flex", gap: "70%", margin: "10px" }}>
          <button className="scroll-btn" onClick={scrollLeft}>
             <FaArrowLeft /> 
          </button>
          <button className="scroll-btn" onClick={scrollRight}>
               <FaArrowRight />
          </button>
      </div>

      
    
          <div className='destinations-scroll-wrapper' ref={scrollRef}> 

             <div className='destination' >
                  <img src={Dubai} alt="" />
                 <h5 style={{color:"black"}}>Dubai</h5>
             </div>
              <div className='destination'>
                  <img src={Turkey} alt="" />
                 <h5 style={{color:"black"}}>Turkey</h5>
             </div>
              <div className='destination'>
                  <img src={albania} alt="" />
                 <h5 style={{color:"black"}}>Albania</h5>
             </div>
                <div className='destination'>
                  <img src={paris} alt="" />
                 <h5 style={{color:"black"}}>Paris</h5>
               </div>
                <div className='destination'>
                  <img src={Moscow} alt="" />
                 <h5 style={{color:"black"}}>Moscow</h5>
                </div>
                 <div className='destination'>
                  <img src={Brazil} alt="" />
                 <h5 style={{color:"black"}}>Brazil</h5>
                </div>
                 <div className='destination'>
                  <img src={italy} alt="" />
                 <h5 style={{color:"black"}}>Italy</h5>
                </div>
                  <div className='destination'>
                  <img src={Taj} alt="" />
                 <h5 style={{color:"black"}}>Taj Mahal</h5>
                </div> 
                 <div className='destination'>
                  <img src={Egypt} alt="" />
                 <h5 style={{color:"black"}}>Egypt</h5>
                </div>
                <div className='destination'>
                  <img src={old} alt="" />
                 <h5 style={{color:"black"}}>Singaphore</h5>
                </div>
        
        </div>
      
    </div>
  )
}

export default TopDestinations