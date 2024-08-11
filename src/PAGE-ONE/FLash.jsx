import React, { useEffect, useState } from 'react';
import './flash.css';
import PLAYSTATION from '../assets/PLAY-STATION.svg';
import KEYBOARD from '../assets/KEYPOARD.svg';
import SCREEN from '../assets/SCREEN.svg';
import CHAIR from '../assets/CHAIR.svg';
import { FaRegHeart, FaEye } from "react-icons/fa";
import Discountpercent from '../assets/Discountpercent.svg';
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { IoIosHeart } from "react-icons/io";

const Flash = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <div className="slick-next"><i className="fa fa-arrow-right"></i></div>,
    prevArrow: <div className="slick-prev"><i className="fa fa-arrow-left"></i></div>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  };

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    let savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  const handleFavoriteClick = (product) => {
    let updatedFavorites;
    if (favorites.some(item => item.id === product.id)) {
      updatedFavorites = favorites.filter(item => item.id !== product.id);
    } else {
      updatedFavorites = [...favorites, product];
    }
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const handleAddToCart = (product) => {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems.push(product);
    localStorage.setItem('cart', JSON.stringify(cartItems));
  };

  return (
    <div className='container'>
      <Slider {...settings}>

        <div className="product-card">
          <div className="ELSORA-PEHWARTHA">
            <img src={Discountpercent} alt="" className='DISCOUNT' id='DISCOUNT' />
            <img src={PLAYSTATION} alt='HAVIT HV-G92 Gamepad' className='ELSORA-PEHWARTHA' />
            <button className="add-to-cart" onClick={() => handleAddToCart({ id: 1, name: "HAVIT HV-G92 Gamepad", price: 120, image: PLAYSTATION })}>
              Add To Cart
            </button>
            <IoIosHeart 
              onClick={() => handleFavoriteClick({ id: 1, name: "HAVIT HV-G92 Gamepad", price: 120, image: PLAYSTATION })}
              className='HEART'
              style={{color: favorites.some(item => item.id === 1) ? 'red' : 'black'}}
            />
            <FaEye className='EYE' />
          </div>
          <div className="TAHT-ELSORA">
            <h5>HAVIT HV-G92 Gamepad</h5>
            <h6>$120 <span>$160</span></h6>
            <FaStar className='star' />
            <FaStar className='star' />
            <FaStar className='star' />
            <FaStar className='star' />
            <FaRegStarHalfStroke className='star' />
            <small>(80)</small>
          </div>
        </div>

        <div className="product-card">
          <div className="ELSORA-PEHWARTHA">
            <img src={Discountpercent} alt="" className='DISCOUNT' />
            <img src={KEYBOARD} alt='AK-900 Wired Keyboard' className='ELSORA-PEHWARTHA KEYPORRD' />
            <button className="add-to-cart" onClick={() => handleAddToCart({ id: 2, name: "AK-900 Wired Keyboard", price: 120, image: KEYBOARD })}>
              Add To Cart
            </button>
            <IoIosHeart 
              onClick={() => handleFavoriteClick({ id: 2, name: "AK-900 Wired Keyboard", price: 120, image: KEYBOARD })}
              className='HEART'
              style={{color: favorites.some(item => item.id === 2) ? 'red' : 'black'}}
            />
            <FaEye className='EYE' />
          </div>
          <div className="TAHT-ELSORA">
            <h5>AK-900 Wired Keyboard</h5>
            <h6>$120 <span>$160</span></h6>
            <FaStar className='star' />
            <FaStar className='star' />
            <FaStar className='star' />
            <FaStar className='star' />
            <FaStar className='star' />
            <small>(70)</small>
          </div>
        </div>

        <div className="product-card">
          <div className="ELSORA-PEHWARTHA">
            <img src={Discountpercent} alt="" className='DISCOUNT' />
            <img src={SCREEN} alt='IPS LCD Gaming Monitor' className='ELSORA-PEHWARTHA' />
            <button className="add-to-cart" onClick={() => handleAddToCart({ id: 3, name: "IPS LCD Gaming Monitor", price: 120, image: SCREEN })}>
              Add To Cart
            </button>
            <IoIosHeart 
              onClick={() => handleFavoriteClick({ id: 3, name: "IPS LCD Gaming Monitor", price: 120, image: SCREEN })}
              className='HEART'
              style={{color: favorites.some(item => item.id === 3) ? 'red' : 'black'}}
            />
            <FaEye className='EYE' />
          </div>
          <div className="TAHT-ELSORA">
            <h5>IPS LCD Gaming Monitor</h5>
            <h6>$120 <span>$160</span></h6>
            <FaStar className='star' />
            <FaStar className='star' />
            <FaStar className='star' />
            <FaStar className='star' />
            <FaRegStarHalfStroke className='star' />
            <small>(87)</small>
          </div>
        </div>

        <div className="product-card">
          <div className="ELSORA-PEHWARTHA">
            <img src={Discountpercent} alt="" className='DISCOUNT' />
            <img src={CHAIR} alt='S-Series Comfort Chair' className='ELSORA-PEHWARTHA' />
            <button className="add-to-cart" onClick={() => handleAddToCart({ id: 4, name: "S-Series Comfort Chair", price: 120, image: CHAIR })}>
              Add To Cart
            </button>
            <IoIosHeart 
              onClick={() => handleFavoriteClick({ id: 4, name: "S-Series Comfort Chair", price: 120, image: CHAIR })}
              className='HEART'
              style={{color: favorites.some(item => item.id === 4) ? 'red' : 'black'}}
            />
            <FaEye className='EYE' />
          </div>
          <div className="TAHT-ELSORA">
            <h5>S-Series Comfort Chair</h5>
            <h6>$120 <span>$160</span></h6>
            <FaStar className='star' />
            <FaStar className='star' />
            <FaStar className='star' />
            <FaStar className='star' />
            <FaStar className='star' />
            <small>(60)</small>
          </div>
        </div>

      </Slider>
      <button className='View d-block m-auto mt-5'>View All Products</button>
      <hr className='mt-5' />
    </div>
  );
}

export default Flash;
