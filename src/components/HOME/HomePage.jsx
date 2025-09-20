import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./HomePage.css"


const HomePage = () => {
  const navigate = useNavigate()
    const navigateUser =()=>{
    navigate("/Signup")
    }

      const navigateUserLogin =()=>{
      navigate("/Login")
    }

  return (
    <div className='home'>
      <img src="/home.jpg" alt="" className='img' />
      <div className='overlay-home'>
           <div className='n-container'>
               <div>
                
               </div>
               <div className='menu-bar'>

                  <h1>Do not call it a dream. Call it a plan </h1>
                  <div className='btn-container'>  
                  
                       <button onClick={navigateUser} className='login'>Sign up</button> 
                         <br />
                      <button  onClick={navigateUserLogin} className='sign-up'>Login</button>
                      <br />
                    <h3 style={{color:"white"}}>   Travel the way you wish to go with Phnes Travels helping you discover, live and travel at your own pace. </h3>
                  </div>
                  
               </div>
               </div>
      
      </div>
    </div>
  )
}

export default HomePage