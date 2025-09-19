//import { useState } from "react";
import "./SignUp.css"
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer,toast } from "react-toastify";

const SignUp =()=>{ 
 //toast function
  const notify =()=> toast("")



  const navigate = useNavigate()
  const nameRef = useRef(null)
  const numberRef = useRef(null)
  const passWordRef = useRef(null)
  const emailRef = useRef(null)

  //  const [data,setData] =useState({
  //     name: "",
  //     number: "",
  //     email: "",
  //     passWord: ""
  //  })
  //  const [errData,setErrData]= useState({
  //    errName: "",
  //   errNumber: "",
  //   errEmail: "",
  //   errPassWord: ""
  //  })

  //  const [data,setData] =useState({
  //     name: "",
  //     number: "",
  //     email: "",
  //     passWord: ""
  //  })
  //  const [errData,setErrData]= useState({
  //    errName: "",
  //   errNumber: "",
  //   errEmail: "",
  //   errPassWord: ""
  //  })
  

  const onClickLogic = async(event) => {
    event.preventDefault();

    const clientData ={
         name:nameRef?.current?.value,
        number:numberRef?.current?.value ,
        email:emailRef?.current?.value,
        password:passWordRef?.current?.value 
      }
      try{ 
      const res = await axios.post("http://localhost:5000/register",clientData)
      
        if(res.status ===201){
        toast.success("Account created successfully!");
        toast.success("Welcome!", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored"
         });
             navigate("/Login");
        }
         
      }catch(error){
        const msg = error.response?.data?.message || "something went wrong"
        toast.error(msg)
      }
    }  

    // console.log("your name:", data?.name);
    // console.log("your number:", data?.number);
    // console.log("your email:", data?.email);
    // console.log("your passWord:", data?.passWord);
        
    //      var  userError = {
    //            errName: "",
    //            errNumber: "",
    //            errEmail: "",
    //            errPassWord: ""
          
  //  if(!data?.name){
  //   userError={...userError,errName:"you must fill this input"}
  //  }else{
  //   userError={...userError,errName:""}
  //  }
   
  //  if(!data?.number){
  //   userError={...userError,errNumber:"you must fill this input"}
  //  }else{
  //   userError={...userError,errNumber:""}
  //  }
  
  //  if(!data?.email){
  //   userError={...userError,errEmail:"you must fill this input"}
  //  }else{
  //   userError={...userError,errEmail:""}
  //  }
        
  //  if(!data?.passWord){
  //   userError={...userError,errPassWord:"you must fill this input"}
  //  }else{
  //   userError={...userError,errPassWord:""}
  //  }
  //  setErrData(userError)
  // };

  return (
    <div className="homepage">
      <img src="/perfect-vacation.jpg" alt="Vacation" className="background" />
      <div className="over">
          <form className="form-container-signup">
          <header id="item1" >
            <h1>Sign up</h1>
            <h4 style={{color:"rgba(160, 84, 37, 1) "}} >Create your account to unlock personalized travel experiences, exclusive offers, and seamless booking.</h4>
          </header>
       
          <div  id="item2">
            <h6 className="item-text">Name:</h6>
            <input ref={nameRef}  type="text" placeholder="enter your name" />
            
          </div>

          <div  id="item3">
            <h6 className="item-text"> Number:</h6>
            <input ref={numberRef}  type="tel" placeholder="enter your phone number" />
            
          </div>

          <div  className="item4">
            <h6 className="item-text">Email:</h6>
            <input ref={emailRef}  type="email" placeholder="enter your email" />
            
          </div>

          <div   id="item5">
            <h6 className="item-text">Password:</h6>
            <input ref={passWordRef}  type="password" placeholder="enter your password" />
           
          </div>
           
           <div  id="item6">  
            <button onSubmit={notify}  onClick={onClickLogic} type="submit" className="sign-btn">Create Account</button>
            <h6 >
            Already have an account?{' '}
            <a href="http://localhost:5173/Login">Login</a>
          </h6>
         </div>
      
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;

     
