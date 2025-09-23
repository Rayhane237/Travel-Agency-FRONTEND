import React from 'react'
import "../Discover.css"

import roses from "../../../assetsDiscover/roses.jpg"
import lights from "../../../assetsDiscover/lights.jpg"
import destination from "../../../assetsDiscover/newziland.jpg"
import snow from "../../../assetsDiscover/islandof maui.jpg"
import New from "../../../assetsDiscover/new5.jpg"

const NaturalFeatures = () => {
       
           const backRoses = {
                       backgroundImage: `url(${roses})`,
                       backgroundSize: 'cover', 
                       backgroundPosition: 'right', 
                       backgroundRepeat: 'no-repeat', 
                       width:"26vw",
                       height:"20vh",
                       marginLeft:"1",
                       padding:"0.5",
                       borderRadius:"13px" ,
                       position:'relative',
                       };
                
           const backLights = {
                       backgroundImage: `url(${lights})`,
                       backgroundSize: 'cover', 
                       backgroundPosition: 'right', 
                       backgroundRepeat: 'no-repeat', 
                       width:"26vw",
                       height:"20vh",
                       marginLeft:"1",
                       padding:"0.5",
                       borderRadius:"13px" ,
                       position:'relative',
                       };
            
               const backNew = {
                       backgroundImage: `url(${New})`,
                       backgroundSize: 'cover', 
                       backgroundPosition: 'right', 
                       backgroundRepeat: 'no-repeat', 
                       width:"26vw",
                       height:"18vh",
                       marginLeft:"1",
                       padding:"0.5",
                       borderRadius:"13px" ,
                       position:'relative',
                       };


                  const backDes = {
                       backgroundImage: `url(${destination})`,
                       backgroundSize: 'cover', 
                       backgroundPosition: 'right', 
                       backgroundRepeat: 'no-repeat', 
                       width:"50%",
                       height:"30vh",
                       marginLeft:"1",
                       padding:"0.5",
                       borderRadius:"13px" ,
                       position:'relative',
                       };
              
                const backSnow = {
                       backgroundImage: `url(${snow})`,
                       backgroundSize: 'cover', 
                       backgroundPosition: 'right', 
                       backgroundRepeat: 'no-repeat', 
                      width:"50%",
                       height:"30vh",
                       marginLeft:"1",
                       padding:"0.5",
                       borderRadius:"13px" ,
                       position:'relative',
                       };

  return (
    <div className='body'>
           <div className='top-text-natural'>
               <h2>Natural geographic features 
              <h6 id='natural-h5'>New zealand </h6> </h2>
              <br /> 
             </div>
          
        <div className='flex-body-container'>
             <div className='flex-body' id='body1'>
                
                <div className='flex'>
                   <h5>The South Island has 15 named maritime fiords which are all located in the southwest of the island in a mountainous area known as Fiordland. The spelling 'fiord' is used in New Zealand rather than 'fjord', although all the maritime fiords use the word Sound in their name instead.

                       <h5></h5>A number of lakes in the Fiordland and Otago regions also fill glacial valleys. Lake Te Anau has three western arms which are fiords (and are named so). Lake McKerrow / Whakatipu Waitai to the north of Milford Sound / Piopiotahi is a fiord with a silted-up mouth. Lake Wakatipu fills a large glacial valley, as do lakes Hakapoua, Poteriteri, Monowai and Hauroko in the far south of Fiordland. Lake Manapouri has fiords as its west, north and south arms..</h5>
                         
                         <div className='flex-pics'>
                             <div className='flex' style={backSnow}>

                             </div>
                             <div className='flex' style={backDes}>

                             </div>
                            <br />
                     </div>

                     <h5>Most of New Zealand's glaciers are in the South Island. They are generally found in the Southern Alps near the Main Divide..

                         <h5></h5>An inventory of South Island glaciers during the 1980s indicated there were about 3,155 glaciers with an area of at least one hectare (2.5 acres).[60] About a sixth of these glaciers covered more than 10 hectares. These include the Fox and Franz Josef glaciers on the West Coast, and the Haupapa / Tasman, Hooker, Mueller and Murchison glaciers in the east.</h5>
                
                </div>

                <div className='flex-body-pics'>
                    <div style={backLights} className='other-drection'>
                        <h3>The island of Maui</h3>
                        <h5>Hawaii</h5>
                        <button className='o-btn'>View more</button>
                    </div>
                    <br />
                     <div style={backRoses} className='other-direction'>
                        <h3>The island of Maui</h3>
                        <h5>Hawaii</h5>
                        <button className='o-btn'>View more</button>
                    </div>
                    <br />
                     <div style={backNew} className='other-directions'>
                        <h3>The island of Maui</h3>
                        <h5>Hawaii</h5>
                        <button className='o-btn'>View more</button>
                    </div>
                    <br />
                   
                </div>
   
             </div>
         </div>
     

    </div>
  )
}

export default NaturalFeatures