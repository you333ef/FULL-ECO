import React from 'react';
import './cate.css';
import PHONE from '../assets/CATEGORY/Category-CellPhone.svg';
import COMPUTER from '../assets/CATEGORY/Category-Computer.svg';
import WATCH from '../assets/CATEGORY/Category-SmartWatch.svg';
import CAMERA from '../assets/CATEGORY/Category-Camera.svg';
import HEADPHONE from '../assets/CATEGORY/Category-Headphone.svg';
import GAMING from '../assets/CATEGORY/Category-Gamepad.svg';
import FRAME from '../assets/CATEGORY/Frame 623.svg';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const CATEGORY = () => {
  return (
    <div className="container">
      <div className="row RwwwRwww">
        <div className="col">
          <div className="RIGHT">
            <div className="">
              <img src={FRAME} alt="" className='Framme' />
              <h4 className='Best'>Browse By Category</h4>
            </div>
          </div>
        </div>
        <div className="col d-block text-end  " id='DIRECTIONS'>
          <FaArrowLeft className="arrow-icon" />
          <FaArrowRight className="arrow-icon" />
        </div>
      </div>
      <div className="CONTACT mt-5">
      <div className="row mt-5">
  <div className="col-6 col-md-4 col-lg-2">
    <div className="PHONE">
      <img src={PHONE} alt="Phone" />
      <h6>Phones</h6>
    </div>
  </div>
  <div className="col-6 col-md-4 col-lg-2">
    <div className="COMPUTER">
      <img src={COMPUTER} alt="Computer" />
      <h6>Computers</h6>
    </div>
  </div>
  <div className="col-6 col-md-4 col-lg-2">
    <div className="WATCH">
      <img src={WATCH} alt="SmartWatch" />
      <h6>SmartWatch</h6>
    </div>
  </div>
  <div className="col-6 col-md-4 col-lg-2">
    <div className="CAMERA">
      <img src={CAMERA} alt="Camera" />
      <h6>Camera</h6>
    </div>
  </div>
  <div className="col-6 col-md-4 col-lg-2">
    <div className="HEADPHONE">
      <img src={HEADPHONE} alt="Headphone" />
      <h6>HeadPhones</h6>
    </div>
  </div>
  <div className="col-6 col-md-4 col-lg-2">
    <div className="GAMING">
      <img src={GAMING} alt="Gaming" />
      <h6>Gaming</h6>
    </div>
  </div>
</div>

      </div>
      <hr className='mt-5' />
    </div>
  );
}

export default CATEGORY;
