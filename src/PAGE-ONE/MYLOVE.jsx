import React from 'react';
import { FaStar, FaEye } from 'react-icons/fa';
import { SlBasketLoaded } from "react-icons/sl";
import { MdDeleteSweep } from "react-icons/md";
import './love.css';
import BEST from './BEST';

const MYLOVE = ({ favorites, removeFavorite, clearFavorites }) => {
  const handleAddToCart = (product) => {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems.push(product);
    localStorage.setItem('cart', JSON.stringify(cartItems));
  };
  return (
    <div className='container'>
      <div className="BBBBBH">
        <h2 className='my-5 Wishlist'>Wishlist ({favorites.length})</h2>
        <button className='All'onClick={clearFavorites}>Move All To Bag</button>
      </div>
      <div className='wishlist-grid'>
        {favorites.map((product) => (
          <div key={product.id} className='product-card d-block m-auto'>
            <div className="image-section">
              <img src={product.image} alt={product.name} className='product-image d-block m-auto' />
              <button className="add-to-cart" onClick={() => handleAddToCart(product)}>Add To Cart</button>
              <MdDeleteSweep className='Ruppish' onClick={() => removeFavorite(product.id)} />
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
      <BEST/>
    </div>
  );
}

export default MYLOVE;
