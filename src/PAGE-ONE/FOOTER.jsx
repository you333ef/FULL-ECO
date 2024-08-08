import React from 'react';
import './footer.css';
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import barCode from '../assets/FOOTER.jsx/Qrcode 1.svg';
import APPSTORE from '../assets/FOOTER.jsx/download-appstore.svg';
import GooglePlay from '../assets/FOOTER.jsx/google-play.svg';

const FOOTER = () => {
  return (
    <footer className="footer  text-light">
      <div className="container">
        <div className="row VDVDVDD">
          <div className="col-md-2 col-6 mb-4">
            <h5>Exclusive</h5>
            <p className='text-light'>Subscribe</p>
            <p>Get 10% off your first order</p>
            <form>
              <div className="subscribe-form d-flex ">
                <input type="email" className="form-control" placeholder="Enter your email" />
                <button type="button" className="btn BOOTN btn-dark">►</button>
              </div>
            </form>
          </div>
          <div className="col-md-2 col-6 mb-4">
            <h5>Support</h5>
            <address>
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.<br />
              <a href="mailto:exclusive@gmail.com">exclusive@gmail.com</a><br />
              +88015-88888-9999
            </address>
          </div>
          <div className="col-md-2 col-6 mb-4">
            <h5>Account</h5>
            <ul className="list-unstyled">
              <li><a href="#">My Account</a></li>
              <li><a href="#">Login / Register</a></li>
              <li><a href="#">Cart</a></li>
              <li><a href="#">Wishlist</a></li>
              <li><a href="#">Shop</a></li>
            </ul>
          </div>
          <div className="col-md-2 col-6 mb-4">
            <h5>Quick Link</h5>
            <ul className="list-unstyled">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms Of Use</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-4 col-12 mb-4">
            <h5>Download App</h5>
            <p>Save $3 with App New User Only</p>
            <div className="d-flex flex-column flex-md-row align-items-center">
              <img src={barCode} alt="QR Code" className="qr-code img-fluid mb-3 mb-md-0" />
              <div className="ml-md-3 KKK">
                <img src={GooglePlay} alt="Google Play" className="app-store img-fluid" />
                <img src={APPSTORE} alt="App Store" className="app-store img-fluid mt-2" />
              </div>
            </div>
            <div className="social-icons  mt-3">
            <FaTwitterSquare id='iconttt'/>
            <FaInstagram  id='iconttt'/>
            <FaLinkedin id='iconttt'/>
            </div>
          </div>
        </div>
        <div className="footer-bottom text-center mt-3">
          <p>© Copyright Rimel 2022. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default FOOTER;
