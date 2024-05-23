import React from 'react';
import './choice.css';
import img1 from '../Assets/seller.png';
import img2 from '../Assets/customer.png';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import R_login from '../R_componets/RSign';
;

const Choice = () => {
  const navigate = useNavigate();

  const handle = () => {
    navigate("/choice/S_regis");
  };  
  

  const HANDLE = () => {
    navigate("/choice/R_regis");
  };
  const login = () => {
    navigate("/choice/R_regis/R_login");
  };
  const Slogin = () => {
    navigate("/choice/S_regis/S_login");
  };
 return (
   <div className="dual-background">
     <div className="left-background">
       <div className='seller'>I'M HERE TO SELLER</div>
       <img src={img1} alt="Seller" className="seller-image" />
       <button className="signs" onClick={handle}>SIGNUP AS SELLER</button>
       <div className='AS'>Already have an account as Seller?</div>
       <Link to='/choice/S_login' className='login' onClick={Slogin}>Login here</Link>
     </div>
     <div className="right-background">
     <div className='seller'>I'M HERE TO CUSTOMER</div>
       <img src={img2} alt="Seller" className="seller-image" />
       <button className="signc"  onClick={HANDLE}>SIGNUP AS CUSTOMER</button>
       <div className='AS'>Already have an account as Customer?</div>
       <Link to='/choice/R_login' className='login' onClick={login}>Login here</Link>
      
      </div> 
   </div>
 );
};

export default Choice;