import React, { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import "./RSign.css";
import img1 from "../Assets/customer.png";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const R_login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [ress, setRess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !pass) {
      setError('Please fill in all fields.');
      return;
    } else {
      setError('');
    }

    try {
      const res = await axios.post('http://localhost:3000/choice/R_login', { email, pass });
      console.log('Response from server:', res);

      if (res.data === 'success') {
        console.log('Login successful, navigating to home page.');
        navigate('/home');
      } else {
        console.log('Login failed:', res.data);
        setRess(res.data);
      }
    } catch (err) {
      console.error('Error during login:', err);
      setRess('Login failed. Please try again.');
    }
  };


  return (
    <div className="login-main">
      <div className="left">
      
        <img src={img1} alt="Seller" className="seller-image" />
      </div>
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-logo">
            {/* <img src={Logo} alt="Logo" /> Displaying a logo */}
          </div>
          <div className="login-center">
            <h2>Welcome back!</h2>
            <p>Please enter your details</p>
            <form onSubmit={handleSubmit}>
          
              <input type="email" placeholder="Email"  onChange={(e) => setEmail(e.target.value)} />
              {/* Email input */}
              <div className="pass-input-div">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  onChange={(e) => setPass(e.target.value)}
                />
                {/* Password input with toggle visibility */}
                {showPassword ? (
                  <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
                ) : (
                  <FaEye onClick={() => setShowPassword(!showPassword)} />
                )}
              </div>
              <p>{ress}</p>
              {error && <p style={{ color: 'red' }}>{error}</p>}
              <div className="login-center-options">
                <div className="remember-div">
                  <input type="checkbox" id="remember-checkbox" />
                  <label htmlFor="remember-checkbox"> Remember </label>
                </div>
                <a href="#" className="forgot-pass-link">
                  Forgot password?
                </a>
              </div>
              <div className="login-center-buttons">
                <button type="submit">Login</button>
              </div>
            </form>
          </div>
          <p className="login-bottom-p">
            Don't have an account? <a href="/choice/R_regis">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default R_login;