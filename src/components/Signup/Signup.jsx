import { useState } from "react";
import "./SignUp.css"

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer,toast } from "react-toastify";

const SignUp =()=>{ 
 
  const navigate = useNavigate()

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
  

  const onClickLogic = async(event) => {
    event.preventDefault();
       
     let userError = {
       errName:"",
       errNumber:"",
       errEmail:"",
       errPassWord:"",
     };

     let isValid = true ;

     if(!data.name){
       userError.errName = "you must fill this input";
       isValid = false;
     }
     
     if(!data.number){
       userError.errNumber = "you must fill this input";
       isValid = false;
     }
     
     if(!data.email){
       userError.errEmail = "you must fill this input";
       isValid = false;
     }
     
     if(!data.passWord){
       userError.errPassWord = "you must fill this input";
       isValid = false;
     }

     setErrData(userError)

     if(!isValid){
       const notify = (msg) => toast.error(msg || "Please fill all required fields");
       notify("Please fill all required fields") //show toast for validation error
       return;//stop if there are errors
     }
     //if all fields are  filled it will send the data
     const clientData ={
       name:data.name,
       number:data.number,
       email:data.email,
       password:data.passWord,
     }
      try{ 
      const res = await axios.post(`${import.meta.env.VITE_SERVER_HOST}/register`,clientData)
      
        if(res.status ===201 || res.status===304){
        toast.success("Account created successfully!");
        toast.success("Welcome!", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored"
         });
          
        setTimeout(() => {
          navigate("/Login");
        }, 1000); // 1 second delay
        }
         
      }catch(error){
        const msg = error.response?.data?.message || "something went wrong"
        toast.error(msg )
      }
    }  

     console.log("your name:", data?.name);
     console.log("your number:", data?.number);
     console.log("your email:", data?.email);
     console.log("your passWord:", data?.passWord);
    

  return (
    <div className="homepage">
      <img src="/home.jpg" alt="Vacation" className="background" />
      
      <div className="over">
          <form className="form-container-signup" onSubmit={onClickLogic} >
          <header id="item1" >
            <h1 style={{color:"black" }}>Signup</h1>
            <h4 >Create your account to unlock personalized travel experiences, exclusive offers, and seamless booking.</h4>
          </header>
           
            
          <div  className="item2">
            <h5 className="item-text">Name:</h5>
            <input type="text" placeholder="enter your name" 
               value={data.name}
             onChange={(event)=> { 
             const value = event.target.value ;
             setData({...data,name:value})

             if(value !==""){
              setErrData({...errData,errName:""})
             }
               }}
             />
               {errData.errName && <h5 style={{color:"red"}} className="error">{errData.errName}  </h5>  }
          </div>
          
            
          <div  className="item2">
            <h5 className="item-text">Email:</h5>
            <input type="email" placeholder="enter your email" 
               value={data.email}
             onChange={(event)=> {
               const value = event.target.value ;
               setData({...data,email:value})
               
               if(value !==""){
                setErrData({...errData,errEmail:""})
               }
             } 

                }
             />
               {errData.errEmail && <h5 style={{color:"red"}} className="error">{errData.errEmail}  </h5>  }
          </div>
         
              
            
          <div  className="item2">
            <h5 className="item-text">Number:</h5>
            <input type="number" placeholder="enter your phone number" 
               value={data.number}
             onChange={(event)=>{
              const value = event.target.value;
              setData({...data,number:value})

              if(value !==""){
                setErrData({...errData,errNumber:""})
              }
             }  }
             />
               {errData.errNumber && <h5 style={{color:"red"}} className="error">{errData.errNumber}  </h5>  }
          </div>
         
              
            
          <div  className="item2">
            <h5 className="item-text">Password:</h5>
            <input type="password" placeholder="enter your password" 
               value={data.passWord}
             onChange={(event)=> {
              const value = event.target.value ;
              setData({...data,passWord:value})

              if(value !=="")
                setErrData({...errData,errPassWord:""})
             }  }
             />
               {errData.errPassWord && <h5 style={{color:"red"}} className="error">{errData.errPassWord}  </h5>  }
          </div>
            

           <div  className="item3">  
            <button  type="submit" className="sign-btn" onClick={onClickLogic} >Create Account</button>
            <h5 >
            Already have an account?{' '}
            <a href="localhost:5173/Login">Login</a>
          </h5>
         </div>
      
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default SignUp;

     
