import React from 'react';
import './head.css';
import PHOTO from '../assets/Frame 560.svg';
import COUNT from './COUNT';
import FLash from './FLash';
import CATEGORY from './CATEGORY';
import BEST from './BEST';
import SOWND from './SOWND';
import Explore from './Explore';
import Arrival from './Arrival';
import SERVICES from './SERVICES';
import FOOTER from './FOOTER';

const HEAD = () => {
  return (
    <div>
      <div className="STYLING">
        <div className="main-container">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3 d-none d-md-block">
                <div className="list-group">
                  <a href="#" className="list-group-item list-group-item-action">Woman's Fashion</a>
                  <a href="#" className="list-group-item list-group-item-action">Men's Fashion</a>
                  <a href="#" className="list-group-item list-group-item-action">Electronics</a>
                  <a href="#" className="list-group-item list-group-item-action">Home & Lifestyle</a>
                  <a href="#" className="list-group-item list-group-item-action">Medicine</a>
                  <a href="#" className="list-group-item list-group-item-action">Sports & Outdoor</a>
                  <a href="#" className="list-group-item list-group-item-action">Baby's & Toys</a>
                  <a href="#" className="list-group-item list-group-item-action">Groceries & Pets</a>
                  <a href="#" className="list-group-item list-group-item-action">Health & Beauty</a>
                </div>
              </div>
              <div className="col-md-8  mt-4" id='HOMME'>
                <div className="banner">
                  <img src={PHOTO} id='FADEL' alt="Banner" />
                </div>
              </div>
            </div>
            <COUNT />
            <FLash />
            <CATEGORY />
            <BEST />
            <SOWND />
            <Explore />
            <Arrival />
            <SERVICES />
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default HEAD;
