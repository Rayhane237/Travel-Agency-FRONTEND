import React, { useState } from 'react';
import "../Flights.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Payloads = () => {
  const navigate = useNavigate();

  
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    date: "",
    passenger: "" 
  });

  const [errData, setErrData] = useState({
    errFrom: "",
    errTo: "",
    errDate: "",
    errPassenger: ""
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    let errors = {
      errFrom: "",
      errTo: "",
      errDate: "",
      errPassenger: ""
    };

    let isValid = true;

    if (!formData.from) {
      errors.errFrom = "This input is required";
      isValid = false;
    }

    if (!formData.to) {
      errors.errTo = "This input is required";
      isValid = false;
    }

    if (!formData.date) {
      errors.errDate = "This input is required";
      isValid = false;
    }

    if (!formData.passenger) {
      errors.errPassenger = "This input is required";
      isValid = false;
    }

    setErrData(errors);

    if (!isValid) {
      toast.error("Please fill all required fields");
      return;
    }

    const payload = {
      from: formData.from,
      to: formData.to,
      date: formData.date,
      passenger: formData.passenger
    };

    try {
      const res = await axios.post(`${import.meta.env.VITE_SERVER_HOST}/book`, payload);

      if (res.status === 201 || res.status === 304) {
        toast.success("Flight booked successfully!", {
          position: "top-right",
          autoClose: 3000,
          theme: "colored"
        });

        setTimeout(() => {
          navigate("/Flights");
        }, 1000);
      }
    } catch (error) {
      const msg = error.response?.data?.message || "Something went wrong";
      toast.error(msg);
    }
  };

  return (
    <div className='book-flight'>
      <form className='flight-form' onSubmit={handleSubmit}>
        <header className='flight-header'>
          <h2>Plan your journey with ease and confidence!</h2>
        </header>

        <label>From:</label>
        <input
          type="text"
          placeholder='Departure city'
          value={formData.from ?? ""} 
          onChange={(e) => {
            const value = e.target.value;
            setFormData({ ...formData, from: value });
            if (value !== "") setErrData({ ...errData, errFrom: "" });
          }}
        />
        {errData.errFrom && <h5 style={{ color: "red" }}>{errData.errFrom}</h5>}

        <label>To:</label>
        <input
          type="text"
          placeholder='Destination city'
          value={formData.to ?? ""}
          onChange={(e) => {
            const value = e.target.value;
            setFormData({ ...formData, to: value });
            if (value !== "") setErrData({ ...errData, errTo: "" });
          }}
        />
        {errData.errTo && <h5 style={{ color: "red" }}>{errData.errTo}</h5>}

        <label>Date:</label>
        <input
          type="date"
          value={formData.date ?? ""}
          onChange={(e) => {
            const value = e.target.value;
            setFormData({ ...formData, date: value });
            if (value !== "") setErrData({ ...errData, errDate: "" });
          }}
        />
        {errData.errDate && <h5 style={{ color: "red" }}>{errData.errDate}</h5>}

        <label>Passenger:</label>
        <input
          type="text"
          placeholder='Passenger name'
          value={formData.passenger ?? ""}
          onChange={(e) => {
            const value = e.target.value;
            setFormData({ ...formData, passenger: value });
            if (value !== "") setErrData({ ...errData, errPassenger: "" });
          }}
        />
        {errData.errPassenger && <h5 style={{ color: "red" }}>{errData.errPassenger}</h5>}

        <button type='submit' id='confirm-btn'>
          Confirm Booking
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Payloads;
