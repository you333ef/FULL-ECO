import React, { useEffect, useState } from 'react';
import { FaStar, FaEye } from 'react-icons/fa';
import { IoIosHeart } from 'react-icons/io';
import { SlBasketLoaded } from "react-icons/sl";

import './love.css'; // تأكد من استخدام ملف الـ CSS المخصص

const MYLOVE = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    let savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  return (
    <div className='container'>
      <h2 className='my-5'>My Favorite Products</h2>
      <div className='wishlist-grid'>
        {favorites.map((product) => (
          <div key={product.id} className='product-card  d-block m-auto'>
            <div className="image-section ">
              <img src={product.image} alt={product.name} className='product-image  d-block m-auto' />
              <button className="add-to-cart">Add To Cart</button>
           
              <SlBasketLoaded className='Ruppish' />

              <FaEye className='eye-icon' />
            </div>
            <div className="details-section">
              <h5 className='NAMEEE'>{product.name}</h5>
             
              <h6>${product.price} <span>$160</span></h6>
              <FaStar className='star' />
              <FaStar className='star' />
              <FaStar className='star' />
              <FaStar className='star' />
              <FaStar className='star' />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MYLOVE;
