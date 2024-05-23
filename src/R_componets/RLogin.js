import React, { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import "./RLogin.css";
import img1 from "../Assets/customer.png";

const R_regis = () => {
  const [showPassword, setShowPassword] = useState(false);

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
            <form>
            <input
                  type="text"
                  placeholder="Username"
                />
              <input type="email" placeholder="Email" />
              {/* Email input */}
              <div className="pass-input-div">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                />
                {/* Password input with toggle visibility */}
                {showPassword ? (
                  <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
                ) : (
                  <FaEye onClick={() => setShowPassword(!showPassword)} />
                )}
              </div>
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
                <button type="button">Register</button>
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