import React from 'react'
import './AboutUs.css'
import HeaderAbout from './composAbout/HeaderAbout'
import TopContent from './composAbout/TopContent'
import MidContent from './composAbout/MidContent'
import Team from './composAbout/Team'
import BottomIcons from './composAbout/BottomIcons'
import FooterAbout from './composAbout/FooterAbout'



const AboutUs = () => {
        

  return (
    <div>
           <div className='compo1'>
            <HeaderAbout/>
           </div>
            <br />

           <div className='compo2'>
            <TopContent/>
           </div>
            <br />
            
            <div className='compo3'>
            <MidContent />
           </div>
             <br />
             
            <div className='compo4'>
            <Team />
           </div>
            <br />

                 
            <div className='compo5'>
            <BottomIcons />
           </div>
              <br />
           <div className='compo6'>
            <FooterAbout />
           </div>



    </div>
  )
  

}

export default AboutUs