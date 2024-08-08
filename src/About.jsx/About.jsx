import React from 'react';
import './about.css';
import one from '../assets/About/Side Image.svg';
import KEYS from './KEYS';
import CHARCTERS from './CHARCTERS';
import SERVICES from '../PAGE-ONE/SERVICES';

const About = () => {
  return (
    <div className='container'>
      <div className="row mt-5">
        <div className="col-lg-6 order-lg-1 toxt order-2">
          <h3>Our Story</h3>
          <p>
            Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region.
          </p>
          <p>
            Exclusive has more than 1 Million products to offer, growing very fast. Exclusive offers a diverse assortment in categories ranging from consumer.
          </p>
        </div>
        <div className="col-lg-6 order-lg-2 order-1 sideOne">
          <img src={one} alt="" />
        </div>
      </div>
      <div className="">
    </div>
       <KEYS/>
       <CHARCTERS/>
       <SERVICES />
      


    </div>
   
  );
}

export default About;
