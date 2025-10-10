import React from 'react'
import search from "../../../assetsHotel/bora.jpg"
import Sea from "../../../assetsHotel/bora2.jpg"
import sear from "../../../assetsHotel/photo-beach.jpeg"
import SEARCH3 from "../../../assetsHotel/SEARCH3.jpg"


const Research = () => {
  return (
    <div>
            <br />
             <div className='top-text'>
                 <h2 style={{color:" rgba(18, 20, 20, 1)"}}>Recent searches</h2>
                 
                 <div className='top-search'>

                        <div className='search'>    
                           <img className='img-search' src={search} alt="" /> 
                             <div className='img-search'>
                                  <h4 style={{color:"black"}}>Bora Bora</h4>
                                 
                             </div>
                        </div>
            
                         <div className='search'>
                           <img className='img-search' src={Sea} alt="" />
                             <div className='img-search'>
                                    <h4 style={{color:"black"}}>Hawai</h4>
                            
                           
                             </div>
                       </div>
                        <div className='search'>
                           <img className='img-search' src={sear} alt="" />
                             <div className='img-search'>
                                  <h4 style={{color:"black"}}>Bora Bora</h4>
                            
                                  
                             </div>
                       </div>
                         <div className='search'>
                           <img className='img-search' src={SEARCH3} alt="" />
                                 <div className='img-search'>
                                        <h4 style={{color:"black"}}>Male</h4>
                            
                                      
                                 </div>
                       </div>
                      
                 </div>
                    
            </div>
             
          
    </div>
  )
}

export default Research