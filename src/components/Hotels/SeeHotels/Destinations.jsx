import React from 'react'

import Hotel from "../../../assetsHotel/hilton.jpg"
 import Hotel1 from "../../../assetsHotel/hilton2.jpg"
 import Hotel2 from "../../../assetsHotel/hotel1.jpg"
 import Hotel3 from "../../../assetsHotel/hotel5.jpg"
 import Hotel4 from "../../../assetsHotel/hotel7.jpg"
 import Hotel5 from "../../../assetsHotel/hotel8.jpg"
 import Hotel6 from "../../../assetsHotel/bora.jpg"
 import Hotel7 from "../../../assetsHotel/hotels.jpg"
import Hotel8 from "../../../assetsHotel/Rubens-hotel.jpg"
import Hotel9 from "../../../assetsHotel/the-penisula.jpg"


const Destinations = () => {
     
               const img = {
                  backgroundImage: 
                 `url(${Hotel})  `,
                 backgroundSize: 'cover', 
                 backgroundPosition: 'right', 
                backgroundRepeat: 'no-repeat', 
                 height: '40vh', 
                width: "250px",
                 borderRadius:"10px" ,
                 };
                  
                  const img1 = {
                  backgroundImage: 
                 `url(${Hotel1})  `,
                 backgroundSize: 'cover', 
                 backgroundPosition: 'right', 
                backgroundRepeat: 'no-repeat', 
                 height: '40vh', 
                width: "250px",
                 borderRadius:"10px" ,
                 };
                  
                   const img2 = {
                  backgroundImage: 
                 `url(${Hotel2})  `,
                 backgroundSize: 'cover', 
                 backgroundPosition: 'right', 
                backgroundRepeat: 'no-repeat', 
                 height: '40vh', 
                width: "250px",
                 borderRadius:"10px" ,
                 };
                  
                   const img3 = {
                  backgroundImage: 
                 `url(${Hotel3})  `,
                 backgroundSize: 'cover', 
                 backgroundPosition: 'right', 
                backgroundRepeat: 'no-repeat', 
                 height: '40vh', 
                width: "250px",
                 borderRadius:"10px" ,
                 };
                  
                    const img4 = {
                  backgroundImage: 
                 `url(${Hotel4})  `,
                 backgroundSize: 'cover', 
                 backgroundPosition: 'right', 
                backgroundRepeat: 'no-repeat', 
                 height: '40vh', 
                width: "250px",
                 borderRadius:"10px" ,
                 };
                  
                    const img5 = {
                  backgroundImage: 
                 `url(${Hotel5})  `,
                 backgroundSize: 'cover', 
                 backgroundPosition: 'right', 
                backgroundRepeat: 'no-repeat', 
                 height: '40vh', 
                width: "250px",
                 borderRadius:"10px" ,
                 };
                  
                   const img6 = {
                  backgroundImage: 
                 `url(${Hotel6})  `,
                 backgroundSize: 'cover', 
                 backgroundPosition: 'right', 
                backgroundRepeat: 'no-repeat', 
                 height: '40vh', 
                width: "250px",
                 borderRadius:"10px" ,
                 };
                  
                     const img7 = {
                  backgroundImage: 
                 `url(${Hotel7})  `,
                 backgroundSize: 'cover', 
                 backgroundPosition: 'right', 
                backgroundRepeat: 'no-repeat', 
                 height: '40vh', 
                width: "250px",
                 borderRadius:"10px" ,
                 };
                const img8 = {
                  backgroundImage: 
                 `url(${Hotel8})  `,
                 backgroundSize: 'cover', 
                 backgroundPosition: 'right', 
                backgroundRepeat: 'no-repeat', 
                 height: '40vh', 
                width: "250px",
                 borderRadius:"10px" ,
                 };
                  
             const img9 = {
                  backgroundImage: 
                 `url(${Hotel9})  `,
                 backgroundSize: 'cover', 
                 backgroundPosition: 'right', 
                backgroundRepeat: 'no-repeat', 
                 height: '40vh', 
                width: "250px",
                 borderRadius:"10px" ,
                 };
 
  return (

    <div>
                <br />
                   <div className='top-text'>
                        <h3 style={{color:" rgb(36, 102, 117)"}}>Top Destinations</h3>
                       <h2 style={{color:"black"}}>Discover your love </h2>
                    
                   </div>

        <div className='-container'>
            <div className='flight-item' >
                <div style={img}  >
                    <div className='text-f'>  
                       <h1 >Paris</h1>     
                        <h3>Paris adventure</h3>
                        <h1 className='price'>$160</h1>
                    </div>
                  
                      <button  className='f-btn'> Book Hotel</button>
               </div>
            </div> 
               <div className='flight-item' >
                <div style={img1}  >
                    <div className='text-f'>  
                       <h1 >Dubai</h1>     
                        <h3>An amazing journey</h3>
                        <h1 className='price'>$230</h1>
                    </div>
                  
                      <button  className='f-btn'> Book Hotel</button>
               </div>
            </div>  
               <div className='flight-item' >
                <div style={img2}  >
                    <div className='text-f'>  
                       <h1 >Rome</h1>     
                        <h3>Explore your taste</h3>
                        <h1 className='price'>$180</h1>
                    </div>
                  
                      <button  className='f-btn'> Book Hotel</button>
               </div>
            </div> 
                 <div className='flight-item' >
                <div style={img3}  >
                    <div className='text-f'>  
                       <h1 >India</h1>     
                        <h3>Hilton hotel</h3>
                        <h1 className='price'>$310</h1>
                    </div>
                  
                      <button  className='f-btn'> Book Hotel</button>
               </div>
            </div> 
                 <div className='flight-item' >
                <div style={img4}  >
                    <div className='text-f'>  
                       <h1 >Nigeria</h1>     
                        <h3>An amazing journey</h3>
                        <h1 className='price'>$157</h1>
                    </div>
                  
                      <button  className='f-btn'> Book Hotel</button>
               </div>
            </div> 
                <div className='flight-item' >
                <div style={img5}  >
                    <div className='text-f'>  
                       <h1 >Bali</h1>     
                        <h3>An amazing journey</h3>
                        <h1 className='price'>$260</h1>
                    </div>
                  
                      <button  className='f-btn'> Book Hotel</button>
               </div>
            </div> 
                <div className='flight-item' >
                <div style={img6}  >
                    <div className='text-f'>  
                       <h1 > Ghana</h1>     
                        <h3>Explore your taste</h3>
                        <h1 className='price'>$190</h1>
                    </div>
                  
                      <button  className='f-btn'> Book Hotel</button>
               </div>
            </div> 
                  <div className='flight-item' >
                <div style={img7}  >
                    <div className='text-f'>  
                       <h1 >LA</h1>     
                        <h3> An amazing journey</h3>
                        <h1 className='price'>$400</h1>
                    </div>
                  
                      <button  className='f-btn'> Book Hotel</button>
               </div>
            </div> 
                        <div className='flight-item' >
                <div style={img8}  >
                    <div className='text-f'>  
                       <h1 >Rubens</h1>     
                        <h3> An amazing journey</h3>
                        <h1 className='price'>$310</h1>
                    </div>
                  
                      <button  className='f-btn'> Book Hotel</button>
               </div>
            </div> 
                         <div className='flight-item' >
                <div style={img9}  >
                    <div className='text-f'>  
                       <h1 >Peninsula </h1>     
                        <h3> An amazing journey</h3>
                        <h1 className='price'>$238</h1>
                    </div>
                  
                      <button  className='f-btn'> Book Hotel</button>
               </div>
            </div> 
             
          
       </div>

 </div>         
    
  )
}

export default Destinations