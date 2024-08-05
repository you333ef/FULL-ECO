import React from 'react';
import './service.css';
import SErvicesOne from '../assets/Arrival/Services.svg';
import SErvicesTwo from '../assets/Arrival/Services (1).svg';
import SErvicesThree from '../assets/Arrival/Services (2).svg';

const SERVICES = () => {
  return (
    <div className='container containeri text-center my-5'>
      <div className="row">
        <div className="col-lg-4 col-md-6 mb-4">
          <img src={SErvicesOne} alt="Free and Fast Delivery" className='service-icon' />
          <h5 className='service-title'>FREE AND FAST DELIVERY</h5>
          <p className='service-text'>Free delivery for all orders over $140</p>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <img src={SErvicesTwo} alt="24/7 Customer Service" className='service-icon' />
          <h5 className='service-title'>24/7 CUSTOMER SERVICE</h5>
          <p className='service-text'>Friendly 24/7 customer support</p>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <img src={SErvicesThree} alt="Money Back Guarantee" className='service-icon' />
          <h5 className='service-title'>MONEY BACK GUARANTEE</h5>
          <p className='service-text'>We return money within 30 days</p>
        </div>
      </div>
    </div>
  );
}

export default SERVICES;
