import React from 'react'
import Dubai from "../../../assets/Dubai.jpg";
import albania from "../../../assets/albania.jpg";
import Paris from "../../../assets/paris.jpg";
import Moscow from "../../../assets/Moscow.jpg";
import Brazil from "../../../assets/Brazil.jpg";
import Taj from "../../../assets/Taj.jpg";
import Lights from "../../../assets/Lights.jpg";
import tour from "../../../assets/tour.jpg"
import Sea from "../../../assets/photo-sea.jpeg"

import { useNavigate } from 'react-router-dom';


const Destinations = () => { 
       
        const navigate = useNavigate()
         const navBookFlight =()=>{
          navigate("/BookFlight")
         }
         
            const imgSea = {
         backgroundImage: 
          `url(${Sea})  `,
         backgroundSize: 'cover', 
         backgroundPosition: 'right', 
         backgroundRepeat: 'no-repeat', 
         height: '40vh', 
         width: "250px",
         borderRadius:"10px" ,
       };
        
         const imgTour = {
         backgroundImage: 
          `url(${tour})  `,
         backgroundSize: 'cover', 
         backgroundPosition: 'right', 
         backgroundRepeat: 'no-repeat', 
         height: '40vh', 
         width: "250px",
         borderRadius:"10px" ,
       };
         
       const imgBrazil = {
         backgroundImage: 
          `url(${Brazil})  `,
         backgroundSize: 'cover', 
         backgroundPosition: 'right', 
         backgroundRepeat: 'no-repeat', 
         height: '40vh', 
         width: "250px",
         borderRadius:"10px" ,
       };

       const imgDubai = {
         backgroundImage: 
          `url(${Dubai})  `,
         backgroundSize: 'cover', 
         backgroundPosition: 'right', 
         backgroundRepeat: 'no-repeat', 
         height: '40vh', 
         width: "250px",
         borderRadius:"10px" ,
       };
         const imgAlbania ={ 
         backgroundImage: 
          `url(${albania})  `,
         backgroundSize: 'cover', 
         backgroundPosition: 'right', 
         backgroundRepeat: 'no-repeat', 
         height: '40vh', 
         width: "250px",
         borderRadius:"10px" ,
       };
    const imgParis = {
         backgroundImage: 
          `url(${Paris})  `,
         backgroundSize: 'cover', 
         backgroundPosition: 'right', 
         backgroundRepeat: 'no-repeat', 
         height: '40vh', 
         width: "250px",
         borderRadius:"10px" ,
       };
         
              const imgTaj = {
         backgroundImage: 
          `url(${Taj})  `,
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
                <div style={imgTaj}  >
                    <div className='text-f'>  
                       <h1 >India</h1>     
                        <h3>Taj Mahal</h3>
                        <h1 className='price'>$600</h1>
                    </div>
                  
                      <button onClick={navBookFlight} className='f-btn'> Book Flights</button>
               </div>
            </div> 
             <div className='flight-item' >
                <div style={imgParis}  >
                    <div className='text-f'>  
                       <h1 >Paris</h1>     
                        <h3> A Paris adventure</h3>
                        <h1 className='price'>$560</h1>
                    </div>
                  
                      <button onClick={navBookFlight} className='f-btn'> Book Flights</button>
               </div>
            </div>
               <div className='flight-item' >
                <div style={imgDubai}  >
                    <div className='text-f'>  
                       <h1 >Dubai</h1>     
                        <h3 > Explore your taste</h3>
                        <h1 className='price'>$230</h1>
                    </div>
                  
                      <button onClick={navBookFlight} className='f-btn'> Book Flights</button>
               </div>
            </div>
              <div className='flight-item' >
                <div style={imgAlbania}  >
                    <div className='text-f'>  
                       <h1 >Albania</h1>     
                        <h3>An amazing journey</h3>
                        <h1 className='price'>$1,200</h1>
                    </div>
                  
                      <button onClick={navBookFlight} className='f-btn'> Book Flights</button>
               </div>
            </div>
              <div className='flight-item' >
                <div style={imgTaj}  >
                    <div className='text-f'>  
                       <h1 >India</h1>     
                        <h3>Taj Mahal</h3>
                        <h1 className='price'>$370</h1>
                    </div>
                  
                      <button onClick={navBookFlight} className='f-btn'> Book Flights</button>
               </div>
            </div>
           
              <div className='flight-item' >
                <div style={imgBrazil}  >
                    <div className='text-f'>  
                       <h1 >Brazil</h1>     
                        <h3>Best summer in Brazil</h3>
                        <h1 className='price'>$600</h1>
                    </div>
                  
                      <button onClick={navBookFlight} className='f-btn'> Book Flights</button>
               </div>
            </div>
        
                <div className='flight-item' >
                <div style={imgTour}  >
                    <div className='text-f'>  
                       <h1 >Italy</h1>     
                        <h3> the famouse monument in italy</h3>
                        <h1 className='price'>$460</h1>
                    </div>
                  
                      <button onClick={navBookFlight} className='f-btn'> Book Flights</button>
               </div>
            </div>
                <div className='flight-item' >
                <div style={imgSea}  >
                    <div className='text-f'>  
                       <h1 >Maldive</h1>     
                        <h3> A Maldive  adventure</h3>
                        <h1 className='price'>$560</h1>
                    </div>
                  
                      <button onClick={navBookFlight} className='f-btn'> Book Flights</button>
               </div>

           </div>
       </div>         
   </div>
  )
}

export default Destinations