import React from 'react';
import './best.css';
import jacket from '../assets/BEST/Frame 605.svg';
import Shanta from '../assets/BEST/Frame 606.svg';
import Music from '../assets/BEST/Frame 610.svg';
import CANAPA from '../assets/BEST/Frame 612.svg';
import FRAME from '../assets/BEST/Frame 620.svg';
import { MdOutlineStarBorder, MdFavoriteBorder, MdRemoveRedEye } from "react-icons/md";

const BEST = () => {
  return (
    <div className='container'>
      <div className="row RwwwRwww">
        <div className="col">
          <div className="RIGHT">
            <div className="">
              <img src={FRAME} alt="" className='Framme' />
              <h4 className='Best'>Best Selling Products</h4>
            </div>
          </div>
        </div>
        <div className="col d-block text-end" id='DIRECTIONS'>
          <button className='All'>View All</button>
        </div>
      </div>

      <div className="row mt-5">
        {[jacket, Shanta, Music, CANAPA].map((item, index) => (
          <div className="col-lg-3" key={index}>
            <div className="image text-center jacket position-relative">
              <img src={item} alt="" />
              <div className="icons position-absolute">
                <MdFavoriteBorder className='icon' />
                <MdRemoveRedEye className='icon' />
              </div>
              <div className="under">
                <h6>The north coat</h6>
                <p>$260 <span>$360</span></p>
                <div className="stars">
                  <MdOutlineStarBorder />
                  <MdOutlineStarBorder />
                  <MdOutlineStarBorder />
                  <MdOutlineStarBorder />
                  <MdOutlineStarBorder />
                </div>
                <p>(60)</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BEST;
