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
                 <h3 style={{color:" rgba(18, 20, 20, 1)"}}>Recent searches</h3>
                 
                 <div className='top-search'>

                        <div className='search'>    
                           <img className='img-search' src={search} alt="" /> 
                            <h4 style={{color:"black"}}>Bora Bora</h4>
                            
                            <h6>305 places</h6>
                        </div>
            
                         <div className='search'>
                           <img className='img-search' src={Sea} alt="" />
                            <h4 style={{color:"black"}}>London UK</h4>
                            
                            <h6>315 places</h6>
                       </div>
                        <div className='search'>
                           <img className='img-search' src={sear} alt="" />
                            <h4 style={{color:"black"}}>Bora Bora</h4>
                            
                            <h6>305 places</h6>
                       </div>
                         <div className='search'>
                           <img className='img-search' src={SEARCH3} alt="" />
                            <h4 style={{color:"black"}}>Male Maldives</h4>
                            
                            <h6>300 places</h6>
                       </div>
                      
                 </div>
                    
            </div>
             
          
    </div>
  )
}

export default Research