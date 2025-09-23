import React from 'react';
import "../Discover.css";

import Item from "../../../assetsDiscover/home3.jpg"
import Map from "../../../assetsDiscover/map2.jpg"

import NaturalFeatures from './NaturalFeatures';

const SouthIsland = () => {
        
                const backItem = {
                backgroundImage: `url(${Item})`,
                backgroundSize: 'cover', 
                backgroundPosition: 'right', 
                backgroundRepeat: 'no-repeat', 
                width:"95%%",
                height:"40vh",
                marginLeft:"1",
                padding:"0.5",
                borderRadius:"13px" ,
                position:'relative',
                };
                   const backMap = {
                backgroundImage: `url(${Map})`,
                backgroundSize: 'cover', 
                backgroundPosition: 'right', 
                backgroundRepeat: 'no-repeat', 
                width:"26vw",
                height:"60vh",
                marginLeft:"1",
                padding:"0.5",
                borderRadius:"13px" ,
                position:'relative',
                };
   
  return (
    <div className='body  ' >
         
         <h2>South Island </h2>
        <div className='flex-body-container'>
             <div className='flex-body' id='body1'>
                
                <div className='flex'>
                   <h5>The South Island of New Zealand is renowned for its mountains, lakes and glaciers. The Southern Alps, home to 3,724m-high Aoraki Mt. Cook, run along the entire length of the island. In the southwest is Fiordland National Park, with steep-sided Milford Sound.

                    <h5></h5>In the north is Abel Tasman National Park, known for its trails and ocean kayaking. Queenstown is famed for adventure sports like bungee jumping and skiing.</h5>
                     <br />
                     <div style={backItem} className='backItem'>
                    </div>
                
                </div>

                <div className='flex-body'>
                    <div style={backMap} className='map'>

                    </div>
                    <br />
                       <div className='destination-text'><h3>Other Destinations</h3></div>
                </div>
   
             </div>
         </div>

    </div>
  )

}

export default SouthIsland