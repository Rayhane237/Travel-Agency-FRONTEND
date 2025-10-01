import React from 'react'
import "../Discover.css"

import roses from "../../../assetsDiscover/roses.jpg"
import lights from "../../../assetsDiscover/lights.jpg"

import New from "../../../assetsDiscover/new5.jpg"

import destination from "../../../assetsDiscover/newziland.jpg"
import snow from "../../../assetsDiscover/islandof maui.jpg"


const NaturalFeatures = () => {

      const backRoses = {
       backgroundImage: `url(${roses})`,
       backgroundSize: 'cover', 
       backgroundPosition: 'right', 
       backgroundRepeat: 'no-repeat', 
        width: 'clamp(220px, 26vw, 400px)',
       height: 'clamp(170px, 24vw, 300px)',
       marginLeft:"1rem",
       padding:"0.5",
       borderRadius:"13px" ,
        position:'relative',
       };
                                          
                const backLights = {
                  backgroundImage: `url(${lights})`,                                                          backgroundSize: 'cover', 
                 backgroundPosition: 'right', 
                 backgroundRepeat: 'no-repeat', 
                     width: 'clamp(220px, 26vw, 400px)',
                   height: 'clamp(170px, 24vw, 300px)',
                  marginLeft:"1rem",
                  padding:"0.5",
                  borderRadius:"13px" ,
                   position:'relative',
                 };
                                      
                const backNew = {
                      backgroundImage: `url(${New})`,
                      backgroundSize: 'cover', 
                      backgroundPosition: 'right', 
                      backgroundRepeat: 'no-repeat', 
                       width: 'clamp(220px, 26vw, 400px)',
                       height: 'clamp(170px, 24vw, 300px)',
                      marginLeft:"1rem",
                      padding:"0.5",
                     borderRadius:"13px" ,
                    position:'relative',
                }

  
                                    const backDes = {
                                         backgroundImage: `url(${destination})`,
                                         backgroundSize: 'cover', 
                                         backgroundPosition: 'right', 
                                         backgroundRepeat: 'no-repeat', 
                                            width: 'clamp(220px, 30vw, 520px)',
                                         height: 'clamp(170px, 30vw, 480px)',
                                         marginLeft:"1rem",
                                         padding:"0.5",
                                         borderRadius:"13px" ,
                                         position:'relative',
                                         };
                                
                                  const backSnow = {
                                         backgroundImage: `url(${snow})`,
                                         backgroundSize: 'cover', 
                                         backgroundPosition: 'right', 
                                         backgroundRepeat: 'no-repeat', 
                                           width: 'clamp(220px, 30vw, 520px)',
                                           height: 'clamp(170px, 30vw, 480px)',
                                     
                                         marginLeft:"1rem",
                                         padding:"0.5",
                                         borderRadius:"13px" ,
                                         position:'relative',
                                         };


                               
              
    
  return (
    <div className='body-n'>
         
         <h2 id='south'>Natural geographic features</h2>
         
            <br />
           <div className='flex-body' id='natural-body'>
              
                <div className='grid1'>
                  
                  <h5>New zealand The South Island has 15 named maritime fiords which are all located in the southwest of the island in a mountainous area known as Fiordland. The spelling 'fiord' is used in New Zealand rather than 'fjord', although all the maritime fiords use the word Sound in their name instead.
                      A number of lakes in the Fiordland and Otago regions also fill glacial valleys. Lake Te Anau has three western arms which are fiords (and are named so). Lake McKerrow / Whakatipu Waitai to the north of Milford Sound / Piopiotahi is a fiord with a silted-up mouth. Lake Wakatipu fills a large glacial valley, as do lakes Hakapoua, Poteriteri, Monowai and Hauroko in the far south of Fiordland. Lake Manapouri has fiords as its west, north and south arms..</h5>
                     <br />
                       
                    <div className='natural-pics'>
                        <div style={backDes}></div>
                        <div style={backSnow}></div>
                    </div>
                    <br />
                    <h5>Most of New Zealand's glaciers are in the South Island. They are generally found in the Southern Alps near the Main Divide..

An inventory of South Island glaciers during the 1980s indicated there were about 3,155 glaciers with an area of at least one hectare (2.5 acres).[60] About a sixth of these glaciers covered more than 10 hectares. These include the Fox and Franz Josef glaciers on the West Coast, and the Haupapa / Tasman, Hooker, Mueller and Murchison glaciers in the east.</h5>


                 </div>
          <div className='grid2' id='body2'>
               <h2 style={{color:"rgba(20, 78, 87, 1)"}}>Other destinations</h2>
                   <div style={backNew} className='back' >
                        <h2 >Glacier National Park</h2>
                        <h3>Montana</h3>
                        <button className='back-btn'>View more</button>
                  
                  </div>
                    <div style={backLights} className='back' >
                         <h2>Fabulous northern lights</h2>
                        <h3>Canada</h3>
                        <button className='back-btn'>View more</button>
                  
                  </div>
                    <div style={backRoses} className='back'>
                        <h2>Roses in new zealand </h2>
                        <h3>Montana</h3>
                        <button className='back-btn'>View more</button>
                  
                  </div>
           
          </div>
           
           
             
          <div className='flex3' id='body2'>
               
                   <div style={backNew} className='back' >
                        <h2>Glacier National Park</h2>
                        <h3>Montana</h3>
                        <button className='back-btn'>View more</button>
                  
                  </div>
                    <div style={backLights} className='back' >
                         <h2>Glacier National Park</h2>
                        <h3>Montana</h3>
                        <button className='back-btn'>View more</button>
                  
                  </div>
                    <div style={backRoses} className='back'>
                        <h2>Glacier National Park</h2>
                        <h3>Montana</h3>
                        <button className='back-btn'>View more</button>
                  
                  </div>
          

          </div>
        </div>


    </div>


  )
}
  

export default NaturalFeatures