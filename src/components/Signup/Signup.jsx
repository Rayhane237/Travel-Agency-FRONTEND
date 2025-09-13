import { useState } from "react";
import "./SignUp.css"



const SignUp =()=>{  
   const [data,setData] =useState({
      name: "",
      number: "",
      email: "",
      passWord: ""
   })
   const [errData,setErrData]= useState({
     errName: "",
    errNumber: "",
    errEmail: "",
    errPassWord: ""
   })
  

  const onClickLogic = (event) => {
    event.preventDefault();
    console.log("your name:", data?.name);
    console.log("your number:", data?.number);
    console.log("your email:", data?.email);
    console.log("your passWord:", data?.passWord);
        
         var  userError = {
               errName: "",
               errNumber: "",
               errEmail: "",
               errPassWord: ""
          };
   if(!data?.name){
    userError={...userError,errName:"you must fill this input"}
   }else{
    userError={...userError,errName:""}
   }
   
   if(!data?.number){
    userError={...userError,errNumber:"you must fill this input"}
   }else{
    userError={...userError,errNumber:""}
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

  const getNameLogic =(event)=>{
  setData({...data,name:event.target.value})
    if(event.target.value){ 
      setErrData({...errData,errName:""})
    }else{
      setErrData({...errData,errName:"you must fill this input"})
    }
  }
  
  
  const getNumberLogic =(event)=>{
  setData({...data,number:event.target.value})
    if(event.target.value){ 
      setErrData({...errData,errNumber:""})
    }else{
      setErrData({...errData,errNumber:"you must fill this input"})
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
  
  const getPasswordLogic =(event)=>{
  setData({...data,passWord:event.target.value})
    if(event.target.value){ 
      setErrData({...errData,errPassWord:""})
    }else{
      setErrData({...errData,errPassWord:"you must fill this input"})
    }
  }

  return (
    <div className="homepage">
      <img src="/perfect-vacation.jpg" alt="Vacation" className="bg-img" />
      <div className="overlay">
          <form className="form-container">
          <header id="item1" >
            <h1>Sign up</h1>
            <h4 style={{color:"rgba(160, 84, 37, 1) "}} >Create your account to unlock personalized travel experiences, exclusive offers, and seamless booking.</h4>
          </header>
       
          <div  id="item2">
            <h6 className="item-text">Name:</h6>
            <input onChange={getNameLogic} type="text" placeholder="enter your name" />
            {errData?.errName ? <h5 className="err" style={{color:"red"}}>{errData.errName}</h5> : null}
          </div>

          <div  id="item3">
            <h6 className="item-text"> Number:</h6>
            <input onChange={(event) => getNumberLogic(event)} type="tel" placeholder="enter your phone number" />
            {errData?.errNumber ? <h5 className="err" style={{color:"red"}}>{errData?.errNumber}</h5> : null}
          </div>

          <div  className="item4">
            <h6 className="item-text">Email:</h6>
            <input onChange={(event) => getEmailLogic(event)} type="email" placeholder="enter your email" />
            {errData?.errEmail ? <h5 className="err" style={{color:"red"}}>{errData.errEmail}</h5> : null}
          </div>

          <div   id="item5">
            <h6 className="item-text">Password:</h6>
            <input onChange={(event) => getPasswordLogic(event)} type="password" placeholder="enter your password" />
            {errData?.errPassWord ? <h5 className="err" style={{color:"red"}}>{errData.errPassWord}</h5> : null}
          </div>
           
           <div  id="item6">  
            <button  onClick={onClickLogic} type="submit" className="sign-btn">Create Account</button>
            <h6 >
            Already have an account?{' '}
            <a href="http://localhost:5173/Login">Login</a>
          </h6>
         </div>
      
        </form>
      </div>
    </div>
  );
};

export default SignUp;
