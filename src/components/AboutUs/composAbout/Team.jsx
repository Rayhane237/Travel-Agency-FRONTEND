import React from 'react'
import team1 from "../../../assetsAbout/team1.jpg"
import team2 from "../../../assetsAbout/team2.jpg"
import team3 from "../../../assetsAbout/team3.jpg"
import team4 from "../../../assetsAbout/team4.jpg"
import team5 from "../../../assetsAbout/team5.jpg"

const Team = () => {
      
  return (
    <div  className='team-container'>
        <br />
            <div className='team-header'>
             <h2 style={{color:"black"}}>Meet our teams</h2>
             <h6 style={{color:"rgb(36, 113, 120)"}}>Meet the people who help keep Phnes.Travels running</h6>
         </div>
            <br />
        <div className='team-section'>
             <div className='team'>
                  <img src={team1} className='team-img'/>
                  <h5>Viola Gates </h5>
                  <h6>International Relations</h6>
             </div>
              <div className='team'>
                  <img src={team2} className='team-img' />
                  <h5>Henry Cemit</h5>
                  <h6>Web Designer</h6>
             </div>
             <div className='team'>
                  <img src={team3} className='team-img' />
                  <h5>Kojo Apei</h5>
                  <h6>Marketing Director</h6>
             </div>
             <div className='team'>
                  <img src={team4} alt="" className='team-img' />
                  <h5>Karen Pit</h5>
                  <h6>Medical Check</h6>
             </div>
             <div className='team'>
                  <img src={team5} alt="" className='team-img' />
                  <h5>Doris Heathen</h5>
                  <h6>Aviation Head</h6>
             </div>
             
            
        </div>


    </div>
  )
}

export default Team
