import React, { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import "./SLogin.css";
import img1 from "../Assets/seller.png";

const S_regis = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-main">
      <div className="login-left">
        <img src={img1} alt="Seller" className="seller-image" />
      </div>
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-logo">
            
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
            Already have an account <a href="/choice/S_login">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default S_regis;