import { useState } from "react";
import "./SignUp.css";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const SignUp = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    number: "",
    email: "",
    passWord: ""
  });

  const [errData, setErrData] = useState({
    errName: "",
    errNumber: "",
    errEmail: "",
    errPassWord: ""
  });

  const onClickLogic = async (event) => {
    event.preventDefault();

    let userError = {
      errName: "",
      errNumber: "",
      errEmail: "",
      errPassWord: ""
    };

    let isValid = true;

    if (!data.name) {
      userError.errName = "You must fill this input";
      isValid = false;
    }

    if (!data.number) {
      userError.errNumber = "You must fill this input";
      isValid = false;
    }

    if (!data.email) {
      userError.errEmail = "You must fill this input";
      isValid = false;
    }

    if (!data.passWord) {
      userError.errPassWord = "You must fill this input";
      isValid = false;
    }

    setErrData(userError);

    if (!isValid) {
      toast.error("Please fill all required fields");
      return;
    }

    const clientData = {
      name: data.name,
      number: data.number,
      email: data.email,
      password: data.passWord
    };

    try {
      const res = await axios.post(`${import.meta.env.VITE_SERVER_HOST}/register`, clientData);

      if (res.status === 201 || res.status === 304) {
        toast.success("Account created successfully!");
        toast.success("Welcome!", {
          position: "top-right",
          autoClose: 3000,
          theme: "colored"
        });

        setTimeout(() => {
          navigate("/Login");
        }, 1000);
      }
    } catch (error) {
      const msg = error.response?.data?.message || "Something went wrong";
      toast.error(msg);
    }
  };

  return (
    <div className="homepage">
      <img src="/home.jpg" alt="Vacation" className="background" />

      <div className="over">
        <form className="form-container-signup" onSubmit={onClickLogic}>
          <header id="item1">
            <h1 style={{ color: "black" }}>Signup</h1>
            <h4>
              Create your account to unlock personalized travel experiences.
            </h4>
          </header>

          <div className="item2">
            <h5 className="item-text">Name:</h5>
            <input
              type="text"
              placeholder="Enter your name"
              value={data.name ?? ""}
              onChange={(e) => {
                const value = e.target.value;
                setData({ ...data, name: value });
                if (value !== "") {
                  setErrData({ ...errData, errName: "" });
                }
              }}
            />
            {errData.errName && <h5 className="error" style={{ color: "red" }}>{errData.errName}</h5>}
          </div>

          <div className="item2">
            <h5 className="item-text">Email:</h5>
            <input
              type="email"
              placeholder="Enter your email"
              value={data.email ?? ""}
              onChange={(e) => {
                const value = e.target.value;
                setData({ ...data, email: value });
                if (value !== "") {
                  setErrData({ ...errData, errEmail: "" });
                }
              }}
            />
            {errData.errEmail && <h5 className="error" style={{ color: "red" }}>{errData.errEmail}</h5>}
          </div>

          <div className="item2">
            <h5 className="item-text">Number:</h5>
            <input
              type="number"
              placeholder="Enter your phone number"
              value={data.number ?? ""}
              onChange={(e) => {
                const value = e.target.value;
                setData({ ...data, number: value });
                if (value !== "") {
                  setErrData({ ...errData, errNumber: "" });
                }
              }}
            />
            {errData.errNumber && <h5 className="error" style={{ color: "red" }}>{errData.errNumber}</h5>}
          </div>

          <div className="item2">
            <h5 className="item-text">Password:</h5>
            <input
              type="password"
              placeholder="Enter your password"
              value={data.passWord ?? ""}
              onChange={(e) => {
                const value = e.target.value;
                setData({ ...data, passWord: value });
                if (value !== "") {
                  setErrData({ ...errData, errPassWord: "" });
                }
              }}
            />
            {errData.errPassWord && <h5 className="error" style={{ color: "red" }}>{errData.errPassWord}</h5>}
          </div>

          <div className="item3">
            <button type="submit" className="sign-btn">Create Account</button>
          </div>

          <br />
          <h5 id="account"> 
            Already have an account? <Link to="/Login">Login</Link>
          </h5>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
