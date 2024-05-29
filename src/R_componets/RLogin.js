import React, { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import "./RLogin.css";
import img1 from "../Assets/customer.png";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const R_regis = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [ress, setRess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !pass) {
      setError('Please fill in all fields.');
      return;
    }

    axios.post('http://localhost:3000/choice/R_regis', { name, email, pass })
      .then((res) => {
        console.log(res);
        navigate('/choice/R_login');
      })
      .catch((err) => {
        console.log(err);
        setRess('Registration failed. Please try again.');
        setRess("");
      });
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
            <h2>Welcome!</h2>
            <p>Please create your details</p>
            <form onSubmit={handleSubmit}>
            <input
                  type="text"
                  placeholder="Username"
                  onChange={(e) => setName(e.target.value)}
                />
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
                <button type="submit">Register</button>
              </div>
            </form>
          </div>
          <p className="login-bottom-p">
            Already have an account <a href="/choice/R_login">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default R_regis;