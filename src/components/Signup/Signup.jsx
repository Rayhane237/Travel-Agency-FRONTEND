import React from 'react'
import './SignUp.css';

const SignUp = () => {
  return (
    <div className="homepage">
      <img src="/perfect-vacation.jpg" alt="Vacation" className="bg-img" />

      <div className="overlay">
        <div className="form-container">
          <div className="header">
            <h1>Sign up</h1>
            <h6>Create your account to unlock personalized travel experiences, exclusive offers, and seamless booking.</h6>
          </div>

          <div className="group">
            <h6>Name:</h6>
            <input type="text" id="name" name="name" required placeholder='enter your name' />
          </div>

          <div className="group">
            <h6>Phone Number:</h6>
            <input type="tel" id="number" name="number"placeholder='enter your name' /> 
          </div>

          <div className="group">
            <h6>Email:</h6>
            <input type="email" id="email" name="email" placeholder='enter your name' /> 
          </div>

          <div className="group">
            <h6>Password:</h6>
            <input type="password" id="password" name="password" placeholder='enter your name'  />
          </div>

          <button type="submit" className="create">Create Account</button>

          <h6>
            Already have an account?{' '}
            <a href="http://localhost:5173/Login">Login</a>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

