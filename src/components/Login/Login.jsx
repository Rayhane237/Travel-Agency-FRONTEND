import { useEffect, useState } from 'react';
import './Login.css';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  //  Controlled input initialization
  const [data, setData] = useState({
    email: '',
    passWord: ''
  });

  const [errData, setErrData] = useState({
    errEmail: '',
    errPassWord: ''
  });

  const onSubmitLogic = async (event) => {
    event.preventDefault();

    let userError = {
      errEmail: '',
      errPassWord: ''
    };

    let isValid = true;

    if (!data.email) {
      userError.errEmail = 'You must fill this input';
      isValid = false;
    }

    if (!data.passWord) {
      userError.errPassWord = 'You must fill this input';
      isValid = false;
    }

    setErrData(userError);

    if (!isValid) {
      toast.error('Please fill all required fields');
      return;
    }

    const clientData = {
      email: data.email,
      password: data.passWord
    };
  
    try {
      const res = await axios.post(`${import.meta.env.VITE_SERVER_HOST}/login`, clientData);
      if (res.status === 200) {
        localStorage.setItem('token', res.data.token);
        navigate('/Plan');
      }
    } catch (error) {
      const message = error.response?.data?.message || error.message || 'Login failed';
      toast.error(message);
    }
  };

  //  Prevents infinite re-renders
  useEffect(() => {
    if (token) {
      navigate('/Plan');
    }
  }, [token, navigate]);

  return (
    <div className='homepage'>
      <img src='/home.jpg' className='background' alt='Vacation' />
      <div className='over'>
        <form onSubmit={onSubmitLogic} className='form-container-signup'>
          <header className='item1'>
            <h1 className='login' style={{ color: 'black' }}>Login</h1>
            <h4 className='login2'>Login to access your Phnes.Travels account</h4>
          </header>

          <div className='item2'>
            <h5 className='item-text'>Email:</h5>
            <input
              type='email'
              placeholder='Enter your email'
              value={data.email ?? ''} //  fallback prevents uncontrolled input
              onChange={(event) => {
                const value = event.target.value;
                setData({ ...data, email: value });
                if (value !== '') {
                  setErrData({ ...errData, errEmail: '' });
                }
              }}
            />
            {errData.errEmail && <h5 className='error' style={{ color: 'red' }}>{errData.errEmail}</h5>}
          </div>

          <div className='item2'>
            <h5 className='item-text'>Password:</h5>
            <input
              type='password' //  secure input type
              placeholder='Enter your password'
              value={data.passWord ?? ''} 
              onChange={(event) => {
                const value = event.target.value;
                setData({ ...data, passWord: value });
                if (value !== '') {
                  setErrData({ ...errData, errPassWord: '' });
                }
              }}
            />
            {errData.errPassWord && <h5 className='error' style={{ color: 'red' }}>{errData.errPassWord}</h5>}
          </div>

          <div className='item3'>
            <button type='submit' id='login-btn'>Login</button>
            <br />
    
          </div>
             <h4 id='login'> 
            Do not  have an account? <Link to="/Signup">Signup</Link>
          </h4>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
