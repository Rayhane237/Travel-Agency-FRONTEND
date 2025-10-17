import React from 'react';
import comments from "../../../assets/comments.jpg";
import { LiaStarSolid } from "react-icons/lia";
import  {useRef} from "react";

import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";


const Comments = () => {
     
  const scrollRef = useRef(null)
   const scrollLeft =()=> {
              scrollRef.current.scrollBy({left: -300,behavior:"smooth"})
          }
          const scrollRight =()=> {
              scrollRef.current.scrollBy({left:300,behavior:"smooth"})
          }
   
      const background = {
      backgroundImage: `url(${comments})`,
       backgroundSize: 'cover', 
      backgroundPosition: 'right', 
    
      backgroundRepeat: 'no-repeat', 
        width:"100%",
        height:"60vh",
         margin:"0",
         padding:"0",
         borderRadius:"0px" ,
         position:'relative',
        };

  return (
    <div className='comments-body' >
        
            <div style={background}  >

                 <div className='top-comments'>
            
                   <h1  style={{color:"white"}}>What they say about us</h1> 
                   
                 </div>
                <br/>

                      <div className='scroll-comments-btn'>
                          <button className='scroll-comment' onClick={scrollLeft}>< FaArrowLeft  /></button>
                         <button className='scroll-comment' onClick={scrollRight}><FaArrowRight  />  </button>
                      </div>

                             <div className='comments-container' ref={scrollRef} >
                     
                                  <div className='comment' >
                                      <h1 style={{color:"orange"}}> <LiaStarSolid />  <LiaStarSolid /> <LiaStarSolid /> <LiaStarSolid /> </h1>
                                      <h3 style={{color:"white"}}>Salim</h3>
                                      <br />
                                      <h5 style={{color:"white"}}>
                                           “From the moment I booked, everything felt seamless. The team was always one step ahead — I never had to worry about a thing.”
                                      </h5>
                                  </div>
                                   <div className='comment'>
                                      <h1 style={{color:"orange"}}> <LiaStarSolid /> <LiaStarSolid />  <LiaStarSolid /> <LiaStarSolid /> </h1>
                                       
                                      <h3 style={{color:"white"}}>Dan</h3>
                                      <br />
                                      <h5 style={{color:"white"}}> Personalized Experience
                                        “They didn’t just plan a trip — they crafted an experience tailored to my style. I felt seen, heard, and spoiled.”</h5>
                                  </div>
                                   <div className='comment'>
                                      <h1 style={{color:"orange"}}> <LiaStarSolid /> <LiaStarSolid /> <LiaStarSolid />  <LiaStarSolid /> <LiaStarSolid /> </h1>
                                      
                                      <h3 style={{color:"white"}}>Lara</h3>
                                      <br />
                                      <h5 style={{color:"white"}}>✈️  Stress-Free Planning
                                           “I usually dread travel logistics, but this agency made it feel effortless. Flights, stays, excursions — all perfectly timed.”</h5>
                                  </div>
                                     <div className='comment'>
                                        <h1 style={{color:"orange"}}> <LiaStarSolid /><LiaStarSolid /> <LiaStarSolid />   <LiaStarSolid /> <LiaStarSolid /> </h1>
                                       
                                      <h3 style={{color:"white"}}>Sophia</h3>
                                       <h5 style={{color:"white"}}>💬  Friendly & Responsive
                                          “Every question I had was answered within minutes. The staff genuinely cared and made me feel like a VIP.”</h5>
                                    </div>
                                     <div className='comment'>
                                        <h1 style={{color:"orange"}}> <LiaStarSolid />   <LiaStarSolid /> <LiaStarSolid /> </h1>
                                     
                                      <h3 style={{color:"white"}}>Megan</h3>
                                      <h5 style={{color:"white"}}>. Business Travel Done Right
                                           “As a frequent traveler, I need efficiency. They delivered — fast bookings, reliable transfers, and zero hiccups.”</h5>
                                     </div>
                  
                       </div>
             

         </div>        
    </div>
  );
}

export default Comments