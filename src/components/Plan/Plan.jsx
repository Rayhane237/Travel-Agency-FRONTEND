
import React, { useEffect } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import "./Plan.css"
import PlanPicsText from './PlanPicsText';
import "./PlanPicsText.css"

function Plan() {
  const navigate = useNavigate();


  const fetchTestServer = async () => {
    const token = localStorage.getItem("token");

    try {
      const res = await axios.get("http://localhost:5000/test", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
    } catch (err) {
      if (err.status === 401 || err.status === 403) {
        navigate("/Login");
      }
    }

  };
  useEffect(() => {
    fetchTestServer();
  }, []);

  return (
   <div>    
    <div className='homepage'>
      <img src="/perfect-vacation.jpg" className='bg-img' />
      <div className='overlay'>
        <form className='navbar-container'>

          <div className='navbar-item'>
            <button>Home</button>
          </div>
          <div className='navbar-item'>
            <button>Flights</button>
          </div>
          <div className='navbar-item'>
            <button>Hotels</button>
          </div>
          <div className='navbar-item'>
            <button>Discover</button>
          </div>
          <div className='navbar-item'>
            <button>About us</button>
          </div>
          <div className='navbar-item'>
            <button>Contact</button>
          </div>
        </form>
        <div className='text'>
          <h1>Don’t call it a dream. Call it a plan</h1>
          <h5 id='travel-h'>Travel the way you wish to go with Phnes Travels helping you discover, live and travel at your own pace.</h5>
        </div>
        
      </div>
    </div>     
    


    </div>
  );
}

export default Plan