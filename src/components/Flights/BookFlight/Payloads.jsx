import React, { useState } from 'react'

const Payloads = () => {
    const [formData ,setFormData]= useState({
         from:"",
         to:"",
         date:"",
         passengers:"",
    })
    const handleSubmit = (event)=>{
        event.preventDefault();
        console.log("booking details:",formData);
    }
  return (
      <div className='book-flight'>

         <form className='flight-form ' onSubmit={handleSubmit}>
              
         <header className='flight-header'>
          
          <h4>Plan your journey with ease and confidence</h4>
         </header>

            <label >Form:</label>  
            <input type="text" placeholder='Departure city' value={formData.from}
            onChange={(event)=>setFormData({...formData,from:event.target.value})} />  

              <label >To:</label>  
            <input type="text" placeholder='Departure city' value={formData.to}
            onChange={(event)=>setFormData({...formData,to:event.target.value})} />  

            <label >Date:</label>  
            <input type="text" placeholder='Departure city' value={formData.date}
            onChange={(event)=>setFormData({...formData,form:event.target.value})} />

            <label >Passengers:</label>  
            <input type="text" placeholder='Departure city' value={formData.passengers}
            onChange={(event)=>setFormData({...formData,passengers:event.target.value})} />  

            <button type='submit' className='login-btn'>Confirm Booking</button>    
         </form>

    </div>
  )
}

export default Payloads