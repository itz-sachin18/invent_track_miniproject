import { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import "./SLogin.css";
import img1 from "../Assets/seller.png";
import axios from 'axios'
import { useNavigate } from "react-router-dom";


const S_regis = () => {
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

    axios.post('http://localhost:3001/choice/S_regis', { name, email, pass })
      .then((res) => {
        console.log(res);
        navigate('/choice/S_login');
      })
      .catch((err) => {
        console.log(err);
        setRess('Registration failed. Please try again.');
        setRess("");
      });
  };

  return (
    <div className="login-main">
      <div className="login-left">
        <img src={img1} alt="Seller" className="seller-image" />
      </div>
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-logo">
            {/* Your logo here */}
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
              <input 
                type="email" 
                placeholder="Email" 
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="pass-input-div">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  onChange={(e) => setPass(e.target.value)}
                />
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
                <button type="submit" >Register</button>
              </div>
            </form>
          </div>
          <p className="login-bottom-p">
            Already have an account? <a href="/choice/S_login">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default S_regis;
