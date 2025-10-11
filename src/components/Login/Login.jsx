import {  useEffect, useState } from 'react'
import "./Login.css"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';


const Login = () => {
  
  const navigate = useNavigate()

  const token = localStorage.getItem("token")
  
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
    
        
     let userError = {
       errEmail:"",
       errPassWord:"",
     };

     let isValid = true ;

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
       email:data.email,
       password:data.passWord,
     };
    
     try{ 
         const res = await axios.post(`${import.meta.env.VITE_SERVER_HOST}/login`,clientData);
          if(res.status ===200){
            localStorage.setItem("token",res.data.token)
            navigate("/Plan")
          }
     }catch(error){
          const message = error.response?.data?.message || error.message || "Login failed";
          toast.error(message);
       }
     
  }

  useEffect(()=>{
    if(token){
      navigate("/Plan")
    }
  })
  
  return (
    <div className='homepage'>
      <img src="/home.jpg"  className='background' />    
      <div className='over'>     
        <form onSubmit={onSubmitLogic}   className="form-container-signup">
          <header className='item1'>
            <h1 className='login' style={{color:"black"}}>Login</h1>
            <h4  className='login2'>Login to access your Phnes.Travels account</h4>
          </header>
            
               
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
            <br />
            
               
          <div  className="item2">
            <h5 className="item-text">Password:</h5>
            <input type="text" placeholder="enter your password" 
               value={data.passWord}
             onChange={(event)=> {
               const value = event.target.value ;
               setData({...data,passWord:value})
               
               if(value !==""){
                setErrData({...errData,errPassWord:""})
               }
             } 

                }
             />
               {errData.errPassWord && <h5 style={{color:"red"}} className="error">{errData.errPassWord}  </h5>  }
          </div>
            <br />
              

          <div className='item3'>
            <button type='submit'  id='login-btn'>Login</button>
            <h5>Don’t have an account?<a href="http://localhost:5173/SignUp" >Signup</a></h5>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Login