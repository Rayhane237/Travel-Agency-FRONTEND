
import React, { useEffect } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import "./Plan.css";
import "./PlanCompos/PlanPicsText";
import HomePlan from './PlanCompos/HomePlan';
import PlanPicsText from './PlanCompos/PlanPicsText';
import Destinations from './PlanCompos/Destinations';
import ShowPlan from './PlanCompos/ShowPlan';
import Footer from './PlanCompos/Footer';
import Comments from './PlanCompos/Comments';


function Plan() {
  const navigate = useNavigate();


  const fetchTestServer = async () => {
    const token = localStorage.getItem("token");

    try {
      const res = await axios.get(`${import.meta.env.VITE_SEVER_HOST}/test`,
      {
        headers: {
         "Authorization": `Bearer ${token}`
        }
      });
    } catch (err) {
      if (err.status === 401 || err.status === 403) {
        localStorage.removeItem("token")
        navigate("/Login");
      }
    }

  };
  useEffect(() => {
    fetchTestServer();
  }, []);


  return (
   <div>
        <div className='1compo'>
            <HomePlan />
        </div>

        <div className='2compo'> 
           <PlanPicsText />
        </div>

        <div className='3compo'>
           <Destinations />
        </div>

        <div className='4compo'>
            <ShowPlan />
        </div>
         
        
        <div className='5compo'>
           <Comments />
         </div>


        <div className='6compo'>
            <Footer />
        </div>
   </div>   
   
  
     
  );
}

export default Plan