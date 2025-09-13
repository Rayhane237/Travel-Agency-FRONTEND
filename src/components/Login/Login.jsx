import React, { useState } from 'react'
import "./Login.css"

const Login = () => {
   
  const [data,setData] = useState({
     email:"",
    passWord:"" 
  })
   
  const [errData,setErrData]=useState({
    errEmail:"",
    errPassWord:""
  })
  const onSubmitLogic =(event)=>{
    event.preventDefault()
    console.log("your email:", data?.email);
    console.log("your passWord:", data?.passWord);

     var userError ={
       errEmail:"",
       errPassWord:""
     }
   
   if(!data?.email){
    userError={...userError,errEmail:"you must fill this input"}
   }else{
    userError={...userError,errEmail:""}
   }
        
   if(!data?.passWord){
    userError={...userError,errPassWord:"you must fill this input"}
   }else{
    userError={...userError,errPassWord:""}
   }
   setErrData(userError)
  };
  
  
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
            <input onChange={(event)=>getEmailLogic(event) } type="email" placeholder='enter your email' />
            {errData?.errEmail? <h4 className="err">{errData?.errEmail} </h4> :null }
          </div>
           <div  className='item2'>
            <p>Password</p>
            <input onChange={ (event)=>getPassWordLogic(event)} type="password" placeholder='enter your password' />
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