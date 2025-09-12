import React from 'react'
import { useNavigate } from 'react-router-dom'
import SignupOrLogin from '../Signup/Signup'
import Login from '../Login/Login'
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
    <div className='homepage'>
      <img src="/public/perfect-vacation.jpg" alt="" className='bg-img' />
      <div className='overlay'>
           <div className='navbar-container'>
               <div>
                
               </div>
               <div className='menu-bar'>

                  <h1>Do not call it a dream. Call it a plan </h1>
                  <div className='btn-container'>  
                  
                       <button onClick={navigateUser} className='login'>Sign up</button> 
                         <br />
                      <button  onClick={navigateUserLogin}        className='sign-up'>Login</button>
                    <p>   Travel the way you wish to go with Phnes Travels helping you discover, live and travel at your own pace. </p>
                  </div>
                  
               </div>
               </div>
      
      </div>
    </div>
  )
}

export default HomePage