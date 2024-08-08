import React from 'react';
import './char.css';
import CHAR1 from '../assets/About/Frame 874.svg';
import CHAR2 from '../assets/About/Frame 875.svg';
import CHAR3 from '../assets/About/Frame 876.svg';

const CHARCTERS = () => {
  return (
    <div className='container KOCO'>
      <div className="row text-center">
        <div className="col-lg-4 col-sm-6 mb-4">
          <img src={CHAR1} alt="Tom Cruise" className="char-img" />
          <h4>Tom Cruise</h4>
          <p>Founder & Chairman</p>
          <div className="social-icons">
            <i className="fa fa-twitter"></i>
            <i className="fa fa-instagram"></i>
            <i className="fa fa-linkedin"></i>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 mb-4">
          <img src={CHAR2} alt="Emma Watson" className="char-img" />
          <h4>Emma Watson</h4>
          <p>Managing Director</p>
          <div className="social-icons">
            <i className="fa fa-twitter"></i>
            <i className="fa fa-instagram"></i>
            <i className="fa fa-linkedin"></i>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 mb-4">
          <img src={CHAR3} alt="Will Smith" className="char-img" />
          <h4>Will Smith</h4>
          <p>Product Designer</p>
          <div className="social-icons">
            <i className="fa fa-twitter"></i>
            <i className="fa fa-instagram"></i>
            <i className="fa fa-linkedin"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CHARCTERS;
