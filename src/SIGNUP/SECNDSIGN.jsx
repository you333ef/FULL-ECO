import React from 'react';
import './secondsign.css';
import PHONEIMAGE from '../assets/SIGN/Side Image.svg';
import GOOGLE_LOGO from '../assets/SIGN/Google.svg';
import { useNavigate } from 'react-router-dom';

const SECNDSIGN = () => {
  const navigate = useNavigate();
  
  const handleNavigate = () => {
    navigate('/SECNDSIGN');
  };
  
  return (
    <div className="signup-container ">
      <div className="signup-row m-3">
        <div className="signup-image-col">
          <img src={PHONEIMAGE} alt="Side Illustration" className="side-image" />
        </div>
        <div className="signup-form-col">
          <h2>Log in to Exclusive</h2>
          <p>Enter your details below</p>
          <form>
           
            <input type="email" placeholder="Email or Phone Number" />
            <input type="password" placeholder="Password" />
          <div className="BBBO">
          <button type="submit" className="create-account-btn">Create Account</button>
          <p className="login-link " ><a href="/login" onClick={handleNavigate}>Forget Password?</a></p>

          </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SECNDSIGN;
