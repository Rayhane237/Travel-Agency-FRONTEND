import React, { useRef, useState } from 'react'
import "./Login.css"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  const navigate = useNavigate()
  const passWordRef = useRef(null)
  const emailRef = useRef(null)

   
  const [data,setData] = useState({
     email:"",
    passWord:"" 
  })
   
  const [errData,setErrData]=useState({
    errEmail:"",
    errPassWord:""
  })
  const onSubmitLogic = async(event)=>{
    
      event.preventDefault()

      const clientData ={
        email:emailRef?.current?.value,
        password:passWordRef?.current?.value 
      }
      const res = await axios.post("http://localhost:5000/login",clientData)
      console.log(res);
      try{
        if(res.status ===200){
          localStorage.setItem("token",res.data.token)
          navigate("/Plan")
        }
      }catch(error){
        res.status(error).json({message:"something went wrong"})
      }
  }
  
  
  const getEmailLogic =(event)=>{
  setData({...data,email:event.target.value})
    if(event.target.value){ 
      setErrData({...errData,errEmail:""})
    }else{
      setErrData({...errData,errEmail:"you must fill this input"})
    }
  }
  
  const getPassWordLogic =(event)=>{
  setData({...data,passWord:event.target.value})
    if(event.target.value){ 
      setErrData({...errData,errPassWord:""})
    }else{
      setErrData({...errData,errPassWord:"you must fill this input"})
    }
  }



  return (
   <div className='homepage'>
      <img src="/perfect-vacation.jpg" alt="" className='bg-img' />    
    <div className='overlay'>     
       <form onSubmit={onSubmitLogic}  className="login-container">
           <header className='group'>
            <h2>Login</h2>
            <h5  style={{color:"rgba(160, 84, 37, 1) "}}>Login to access your Phnes.Travels account</h5>
           </header>

           <div id='email' className='item1'>
            <p>Email</p>
            <input ref={emailRef}   onChange={(event)=>getEmailLogic(event) } type="email" placeholder='enter your email' />
            {errData?.errEmail? <h4 className="err">{errData?.errEmail} </h4> :null }
          </div>
           <div  className='item2'>
            <p>Password</p>
            <input ref={passWordRef} onChange={ (event)=>getPassWordLogic(event)} type="password" placeholder='enter your password' />
            {errData?.errPassWord? <h4 className="err"> {errData?.errPassWord}  </h4> :null  }
           </div>
           <div className='item3'>
            <button   type='submit' className='login-btn'>Login</button>
            <h6>Don’t have an account?<a href="http://localhost:5173/Signup">Sign up</a>     </h6>
           </div>
            

       </form>
     </div>
    </div>
  )
}

export default Login