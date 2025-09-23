import React from 'react'
import "./Discover.css"
//import { useNavigate } from 'react-router-dom'
import HeaderDiscover from './CompoDiscover/HeaderDiscover'
import SouthIsland from './CompoDiscover/SouthIsland'
import NaturalFeatures from './CompoDiscover/NaturalFeatures'
import FooterDiscover from './CompoDiscover/FooterDiscover'
const Discover = () => {

  return (
    <div>
            <div className='compo1'>
                  <HeaderDiscover />
            </div>

             <div className='compo2'>
                  <SouthIsland />
            </div>
              
                          
             <div className='compo3'>
                <NaturalFeatures />
              </div>

            <div className='compo4'>
                <FooterDiscover />
            </div>
    </div>
  )
}

export default Discover