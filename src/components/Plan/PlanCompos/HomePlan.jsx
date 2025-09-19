import React from 'react'

const HomePlan = () => {

  return (
    <div>
        <div className='homepage-plan'>
               <img src="/home.jpg" className='bgd-img' />
                
                <div className='overlay-plan'>
                   <div className='btns-container'>
                      <div className='btn'>
                        <button>Home</button>
                      </div>
                       <div className='btn'>
                        <button>Flights</button>
                       </div>
                        <div className='btn'>
                         <button>Hotels</button>
                        </div>
                        <div className='btn'>
                        <button>Discover</button>
                        </div>
                        <div className='btn'>
                        <button>About us</button>
                        </div>
                        <div className='btn'>
                        <button>Contact</button>
                        </div>
                      
                   </div>
                   <div className='plan-text'>
                         <h1>Don’t call it a dream. Call it a plan</h1>
                         <h5 style={{color:"white"}}>Travel the way you wish to go with Phnes Travels helping you discover, live and travel at your own pace.</h5>
                   </div>
 
                  
                </div>
        </div>
  
    </div>
    
    
  )
}

export default HomePlan