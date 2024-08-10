import React, { useEffect, useState } from 'react';
import './best.css';
import jacket from '../assets/BEST/Frame 605.svg';
import Shanta from '../assets/BEST/Frame 606.svg';
import Music from '../assets/BEST/Frame 610.svg';
import FRAME from '../assets/BEST/Frame 620.svg';

import CANAPA from '../assets/BEST/Frame 612.svg';
import { FaHeartCircleCheck } from "react-icons/fa6";
import { MdOutlineStarBorder, MdFavoriteBorder, MdRemoveRedEye } from "react-icons/md";

const BEST = () => {
  // الحالة الأولى
  const [red1, setRed1] = useState(false);
  let toggleHeart1 = () => {
    localStorage.setItem('heart1', !red1);
    setRed1(!red1);
  }
  useEffect(() => {
    const savedHeart1 = JSON.parse(localStorage.getItem('heart1'));
    if (savedHeart1 !== null) setRed1(savedHeart1);
  }, []);

  // الحالة الثانية
  const [red2, setRed2] = useState(false);
  let toggleHeart2 = () => {
    localStorage.setItem('heart2', !red2);
    setRed2(!red2);
  }
  useEffect(() => {
    const savedHeart2 = JSON.parse(localStorage.getItem('heart2'));
    if (savedHeart2 !== null) setRed2(savedHeart2);
  }, []);

  // الحالة الثالثة
  const [red3, setRed3] = useState(false);
  let toggleHeart3 = () => {
    localStorage.setItem('heart3', !red3);
    setRed3(!red3);
  }
  useEffect(() => {
    const savedHeart3 = JSON.parse(localStorage.getItem('heart3'));
    if (savedHeart3 !== null) setRed3(savedHeart3);
  }, []);

  // الحالة الرابعة
  const [red4, setRed4] = useState(false);
  let toggleHeart4 = () => {
    localStorage.setItem('heart4', !red4);
    setRed4(!red4);
  }
  useEffect(() => {
    const savedHeart4 = JSON.parse(localStorage.getItem('heart4'));
    if (savedHeart4 !== null) setRed4(savedHeart4);
  }, []);

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
        <div className="col-lg-3">
          <div className="image text-center jacket position-relative">
            <img src={jacket} alt="" />
            <div className="icons position-absolute">
              {red1 ? (
                <FaHeartCircleCheck className='icon' id='SECONGD' onClick={toggleHeart1} />
              ) : (
                <MdFavoriteBorder className='icon' onClick={toggleHeart1} />
              )}
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

        <div className="col-lg-3">
          <div className="image text-center jacket position-relative">
            <img src={Shanta} alt="" />
            <div className="icons position-absolute">
              {red2 ? (
                <FaHeartCircleCheck className='icon' id='SECONGD' onClick={toggleHeart2} />
              ) : (
                <MdFavoriteBorder className='icon' onClick={toggleHeart2} />
              )}
              <MdRemoveRedEye className='icon' />
            </div>
            <div className="under">
              <h6>Shanta</h6>
              <p>$200 <span>$300</span></p>
              <div className="stars">
                <MdOutlineStarBorder />
                <MdOutlineStarBorder />
                <MdOutlineStarBorder />
                <MdOutlineStarBorder />
                <MdOutlineStarBorder />
              </div>
              <p>(50)</p>
            </div>
          </div>
        </div>

        <div className="col-lg-3">
          <div className="image text-center jacket position-relative">
            <img src={Music} alt="" />
            <div className="icons position-absolute">
              {red3 ? (
                <FaHeartCircleCheck className='icon' id='SECONGD' onClick={toggleHeart3} />
              ) : (
                <MdFavoriteBorder className='icon' onClick={toggleHeart3} />
              )}
              <MdRemoveRedEye className='icon' />
            </div>
            <div className="under">
              <h6>Music</h6>
              <p>$150 <span>$250</span></p>
              <div className="stars">
                <MdOutlineStarBorder />
                <MdOutlineStarBorder />
                <MdOutlineStarBorder />
                <MdOutlineStarBorder />
                <MdOutlineStarBorder />
              </div>
              <p>(40)</p>
            </div>
          </div>
        </div>

        <div className="col-lg-3">
          <div className="image text-center jacket position-relative">
            <img src={CANAPA} alt="" />
            <div className="icons position-absolute">
              {red4 ? (
                <FaHeartCircleCheck className='icon' id='SECONGD' onClick={toggleHeart4} />
              ) : (
                <MdFavoriteBorder className='icon' onClick={toggleHeart4} />
              )}
              <MdRemoveRedEye className='icon' />
            </div>
            <div className="under">
              <h6>CANAPA</h6>
              <p>$300 <span>$400</span></p>
              <div className="stars">
                <MdOutlineStarBorder />
                <MdOutlineStarBorder />
                <MdOutlineStarBorder />
                <MdOutlineStarBorder />
                <MdOutlineStarBorder />
              </div>
              <p>(70)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BEST;
