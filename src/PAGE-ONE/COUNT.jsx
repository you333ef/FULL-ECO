import React from 'react';
import Countdown from 'react-countdown';
import './count.css';

const COUNT = () => {
  
  const endTime = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000 + 23 * 60 * 60 * 1000 + 19 * 60 * 1000 + 56 * 1000);

 
  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <div className="container">
         <div className=" WOWOWOWWOWO">
        <div className="header ">
          <div className="flash-sales">
            <div className="OWOW">
              <div className="flash-sales-icon"></div>
              <h5 className='Today'>Today's</h5>
            </div>
            <h1 className='Flash'>Flash Sales</h1>
          </div>
          <div className="countdown ">
            <div className="countdown-item container">
              <span className="label">Days</span>
              <span className="value">{String(days).padStart(2, '0')}</span>
            </div>
            <span className="dot">:</span>
            <div className="countdown-item">
              <span className="label">Hours</span>
              <span className="value">{String(hours).padStart(2, '0')}</span>
            </div>
            <span className="dot">:</span>
            <div className="countdown-item">
              <span className="label">Minutes</span>
              <span className="value">{String(minutes).padStart(2, '0')}</span>
            </div>
            <span className="dot">:</span>
            <div className="countdown-item">
              <span className="label">Seconds</span>
              <span className="value">{String(seconds).padStart(2, '0')}</span>
            </div>
          </div>
        </div>
      </div>
      </div>

     
    );
  };

  return <Countdown date={endTime} renderer={renderer} />;
}

export default COUNT;
