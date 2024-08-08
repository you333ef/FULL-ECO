import React from 'react';
import './signup.css';
import GIIGLE from '../assets/SIGN/Google.svg';
import PHONEIMAGE from '../assets/SIGN/Side Image.svg';
import { useNavigate } from 'react-router-dom';
const SIGNUP = () => {
    const NAVIGATEEE=useNavigate();
    const ELTAWGEH = () => {
        NAVIGATEEE('/SECNDSIGN');
      };
  return (
    <div className="signup-container">
      <div className="signup-row">
        <div className="signup-image-col">
          <img src={PHONEIMAGE} alt="Side Illustration" className="side-image" />
        </div>
        <div className="signup-form-col">
          <h2>Create an account</h2>
          <p>Enter your details below</p>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email or Phone Number" />
            <input type="password" placeholder="Password" />
            <button type="submit" className="create-account-btn" onClick={GIIGLE}>Create Account</button>
            <button type="button" onClick={ELTAWGEH} className="google-signup-btn">
              <img src={GIIGLE} alt="Google Signup" />
              Sign up with Google
            </button>
          </form>
          <p className="login-link">Already have an account? <a href="/login" onClick={ELTAWGEH}>Log in</a></p>
        </div>
      </div>
    </div>
  );
}

export default SIGNUP;
