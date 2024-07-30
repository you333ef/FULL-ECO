import React, { useState } from 'react';
import './flash.css';
import PLAYSTATION from '../assets/PLAY-STATION.svg';
import KEYBOARD from '../assets/KEYPOARD.svg';
import SCREEN from '../assets/SCREEN.svg';
import CHAIR from '../assets/CHAIR.svg';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import Discountpercent from '../assets/Discountpercent.svg';
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";

const FLash = () => {
  const [likedItems, setLikedItems] = useState([false, false, false, false]);

  const handleLikeClick = (index) => {
    const newLikedItems = [...likedItems];
    newLikedItems[index] = !newLikedItems[index];
    setLikedItems(newLikedItems);
  };

  const products = [
    {
      id: 0,
      img: PLAYSTATION,
      name: 'HAVIT HV-G92 Gamepad',
      price: '$120',
      oldPrice: '$160',
      rating: 4.5,
      reviews: '80$',
    },
    {
      id: 1,
      img: KEYBOARD,
      name: 'AK-900 Wired Keyboard',
      price: '$120',
      oldPrice: '$160',
      rating: 5,
      reviews: '70$',
    },
    {
      id: 2,
      img: SCREEN,
      name: 'IPS LCD Gaming Monitor',
      price: '$120',
      oldPrice: '$160',
      rating: 4.5,
      reviews: '87$',
    },
    {
      id: 3,
      img: CHAIR,
      name: 'S-Series Comfort Chair',
      price: '$120',
      oldPrice: '$160',
      rating: 5,
      reviews: '60$',
    }
  ];

  return (
    <div className='container'>
      <div className="row">
        {products.map((product, index) => (
          <div key={product.id} className="col-lg-3 col-sm-10 col-md-6">
            <div className="ELSORA-PEHWARTHA">
              <img src={Discountpercent} alt="" className='DISCOUNT' />
              <img src={product.img} alt={product.name} className='d-block m-auto' id={product.name} />
              {likedItems[index] ? (
                <FaHeart
                  onClick={() => handleLikeClick(index)}
                  className='HEART LIKED'
                />
              ) : (
                <FaRegHeart
                  onClick={() => handleLikeClick(index)}
                  className='HEART'
                />
              )}
              <FaEye className='EYE' />
            </div>
            <div className="TAHT-ELSORA">
              <h5>{product.name}</h5>
              <h6>{product.price}
                <span> {product.oldPrice}</span>
              </h6>
              {[...Array(Math.floor(product.rating))].map((_, i) => <FaStar key={i} className='star' />)}
              {product.rating % 1 !== 0 && <FaRegStarHalfStroke className='star' />}
              <small>({product.reviews})</small>
            </div>
          </div>
        ))}
      </div>
      <button className='d-block m-auto mt-5 View'>View All Products</button>
    </div>
  );
}

export default FLash;
