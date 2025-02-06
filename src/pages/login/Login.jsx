// Login.jsx
import React, { useState, } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { API_BASE_URL } from "../../config/apiConfig";
import axios from "axios";
import { authActions } from "../../store/auth";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const change = (e) => {
    const { name, value } = e.target;
    setValue((prevState) => ({ ...prevState, [name]: value }));
  };
  
  const submit = async (e) => {
    e.preventDefault();
    if (!value.email || !value.password) {
      alert("All fields are required");
      return;
    }
    try {
      const response = await axios.post(`${API_BASE_URL}user/login`, value, {
        withCredentials: true
      });
      console.log(response.data);
      alert(response?.data?.message || "Login successful!");
      const { token, data } = response.data;
      dispatch(authActions.login());
      dispatch(authActions.changeRole(data.role));
      dispatch(authActions.setFullName(data.fullName));

      // Store data in localStorage
      localStorage.setItem("id", data._id);
      localStorage.setItem("fullName", data.fullName);
      localStorage.setItem("role", data.role);
      localStorage.setItem("token", token);

      navigate("/");
    } catch (error) {
      const message =
        error.response?.data?.message || "An error occurred. Please try again.";
      alert(message);
    }
  };

  return (
    <div className="login-wrapper flex items-center justify-center min-h-screen">
      <div className="login-container">
        <div className="login-heading">Login Now</div>
        <form onSubmit={submit} className="login-form">
          <input
            required
            className="login-input"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={value.email}
            onChange={change}
          />
          <input
            required
            className="login-input"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={value.password}
            onChange={change}
          />
          <span className="login-forgot-password">
            <a href="#">Forgot Password?</a>
          </span>
          <button className="login-submit-button" type="submit">
            Login
          </button>
        </form>
        <div className="login-social-container">
          <span className="login-social-title">Or Sign in with</span>
          <div className="login-social-buttons">
            <button className="login-social-button google">
              {/* SVG for Google Icon */}
              <svg
                className="login-social-icon"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 488 512"
              >
                <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
              </svg>
            </button>
            <button className="login-social-button apple">
              {/* SVG for Apple Icon */}
              <svg
                className="login-social-icon"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 384 512"
              >
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 49.6-.7 90.8-83.8 102.3-120.8-66-26-61.2-95.8-61.4-90.4z"></path>
              </svg>
            </button>
            <button className="login-social-button linkedin">
              {/* SVG for LinkedIn Icon */}
              <svg
                className="login-social-icon"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                <path d="M100.28 480H7.4V180.9h92.88zM53.79 132.36c-29.8 0-53.9-24.22-53.9-54.12S24 24 53.79 24s53.9 24.22 53.9 54.12-24.1 54.24-53.9 54.24zM447.7 480h-92.66V328.4c0-36.2-13-60.9-45.5-60.9-24.8 0-39.5 16.7-46 32.8-2.3 5.4-2.8 13-2.8 20.6V480H167.4V180.9h92.66v41.7h1.3c12.9-24.6 44.4-50.4 91.5-50.4 61.8 0 108.2 40.3 108.2 126.8V480z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="login-bottom-text mt-4 text-center">
          <span className="text-orange-400">I don't have an account </span>
          <a className="text-black" href="/signup">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
