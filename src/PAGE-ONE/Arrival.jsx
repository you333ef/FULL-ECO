import React from 'react';
import './arrival.css';
import TITYE from '../assets/Arrival/TITTLE.svg';
import LEFTEND from '../assets/Arrival/LWEFT.svg';
import btnright from '../assets/Arrival/Frame 686.svg';
import RightTOP from '../assets/Arrival/RightTOP.svg';
import btnrightright from '../assets/Arrival/Frame 687.svg';

const Arrival = () => {
  return (
    <div className='container my-5'>
      <div className='part-top align-items-start mb-4'>
        <img src={TITYE} alt='TITYE' className='me-2' />
        <h5 className='mb-0'>New Arrival</h5>
      </div>
      <div className='row FFFFFFFFFFF gx-4'>
        <div className='col-lg-6 mb-4 d-none d-lg-block'>
          <img src={LEFTEND} alt='PlayStation 5' className='img-fluid' />
        </div>
        <div className='col-lg-6 col-12'>
          <div className='mb-4'>
            <img src={RightTOP} alt='Women Collections' className='img-fluid' />
          </div>
          <div className='row gx-4'>
            <div className='col-lg-6 col-6 mb-5'>
              <img src={btnright} alt='Speakers' className='img-fluid' />
            </div>
            <div className='col-lg-6 col-6 mb-5'>
              <img src={btnrightright} alt='Perfume' className='img-fluid' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Arrival;
