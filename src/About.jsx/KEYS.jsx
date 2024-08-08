import React from 'react';
import './keys.css';
import HOOM from '../assets/About/HOME (2).svg';
import COINS from '../assets/About/Services.svg';
import BAG from '../assets/About/Servicesss.svg';
import MONEY from '../assets/About/money.svg';

const KEYS = () => {
  return (
    <div className='container BAHEPACKK'>
      <div className="row justify-content-center">
        <div className="col-lg-3 col-6 text-center key-item">
          <img src={HOOM} alt="HOOM" />
          <h4>10.5k</h4>
          <p>Sellers active in our site</p>
        </div>
        <div className="col-lg-3 col-6 text-center key-item key-item-highlight">
          <img src={COINS} alt="COINS" />
          <h4>33k</h4>
          <p>Monthly Product Sales</p>
        </div>
        <div className="col-lg-3 col-6 text-center key-item">
          <img src={BAG} alt="BAG" />
          <h4>45.5k</h4>
          <p>Customers active in our site</p>
        </div>
        <div className="col-lg-3 col-6 text-center key-item">
          <img src={MONEY} alt="MONEY" />
          <h4>25k</h4>
          <p>Annual gross sale in our site</p>
        </div>
      </div>
    </div>
  );
}

export default KEYS;
