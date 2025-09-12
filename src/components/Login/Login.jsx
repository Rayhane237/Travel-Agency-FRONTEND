import React from 'react'
import "./Login.css"

const Login = () => {

  return (
   <div className='homepage'>
      <img src="/public/perfect-vacation.jpg" alt="" className='bg-img' />    
    <div className='overlay'>     
       <form className="login-container">
           <div className='item1'>
            <h2>Login</h2>
            <h5>Login to access your Phnes.Travels account</h5>
           </div>
           <div className='item2'>
            <p>Email</p>
            <input type="email" placeholder='enter your email' />
          </div>
           <div className='item3'>
            <p>Password</p>
            <input type="password" placeholder='enter your password' />
           </div>
           <div className='item4'>
            <button className='login-btn'>Login</button>
            <h6>Don’t have an account?<a href="http://localhost:5173/Signup">Sign up</a>     </h6>
           </div>
            

       </form>
     </div>
    </div>
  )
}

export default Login