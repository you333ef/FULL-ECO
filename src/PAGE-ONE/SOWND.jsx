import React from 'react';
import Countdown from 'react-countdown';
import './sownd.css';
import SOWNND from '../assets/BEST/SOWND.svg';

const SOWND = () => {
  // تحديد نهاية الوقت
  const endTime = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000 + 23 * 60 * 60 * 1000 + 19 * 60 * 1000 + 56 * 1000);

  // دالة لتنسيق العداد
  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <div className="timer">
        <div className="time-unit">
          <span>{String(hours).padStart(2, '0')}</span>
          <p>Hours</p>
        </div>
        <div className="time-unit">
          <span>{String(days).padStart(2, '0')}</span>
          <p>Days</p>
        </div>
        <div className="time-unit">
          <span>{String(minutes).padStart(2, '0')}</span>
          <p>Minutes</p>
        </div>
        <div className="time-unit">
          <span>{String(seconds).padStart(2, '0')}</span>
          <p>Seconds</p>
        </div>
      </div>
    );
  };

  return (
    <div className='container containereeeee'>
      <div className="rowwwwww row">
        <div className="col-lg-6 LEFTTTT">
          <div className="content" >
            <h1 id='Enhance'>Enhance Your<br /> Music Experience</h1>
            <Countdown date={endTime} renderer={renderer} />
            <button className="buy-now">Buy Now!</button>
          </div>
        </div>
        <div className="col-lg-6 RIGHTTTT">
          <img src={SOWNND} alt="Speaker" />
        </div>
      </div>
    </div>
  );
}

export default SOWND;
