import { useEffect, useRef } from 'react'
import "./Login.css"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
//import Plan from '../Plan/Plan'
import { ToastContainer, toast } from 'react-toastify';


const Login = () => {
  //const notify = () => toast("");
  
  const navigate = useNavigate()
  const passWordRef = useRef(null)
  const emailRef = useRef(null)
  // const [data,setData] = useState({
  //    email:"",
  //   passWord:"" 
  // })
   
  //  const [errData,setErrData]=useState({
  //   errEmail:"",
  //   errPassWord:""
  //  })

  const onSubmitLogic = async(event)=>{
    event.preventDefault()

    const clientData ={
      email:emailRef?.current?.value,
      password:passWordRef?.current?.value 
    }

    try{ 
      const res = await axios.post("http://localhost:5000/login",clientData)
      if(res.status ===200){
        localStorage.setItem("token",res.data.token)
        navigate("/Plan")
      }
      }catch (error) {
      const msg = error.response?.data?.message || "something went wrong"
           toast.error(msg, {
               position: "top-center",
                autoClose: 3000,
                theme: "colored"
                });
      }

  }
  const token = localStorage.getItem("token")
  useEffect(()=>{  
     if(token){
          navigate("/Plan")
     }
  },[])

  return (
    <div className='homepage'>
      <img src="/perfect-vacation.jpg"  className='bg-img' />    
      <div className='overlay'>     
        <form onSubmit={onSubmitLogic}   className="login-container">
          <header className='group'>
            <h2>Login</h2>
            <h5 style={{color:"rgba(160, 84, 37, 1)"}}>Login to access your Phnes.Travels account</h5>
          </header>

          <div id='email' className='item1'>
            <p>Email</p>
            <input ref={emailRef} type="email" placeholder='enter your email' />
            <h4 className="err"> </h4> 
          </div>

          <div className='item2'>
            <p>Password</p>
            <input ref={passWordRef} type="password" placeholder='enter your password' />
            <h4 className="err"> </h4>
          </div>

          <div className='item3'>
            <button type='submit'  className='login-btn'>Login</button>
            <h6>Don’t have an account?<a href="http://localhost:5173/Signup">Sign up</a></h6>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Login