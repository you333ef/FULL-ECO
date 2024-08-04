import React, { useEffect, useState } from 'react';
import { FaHeart, FaEye, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import './love.css'

const MYLOVE = () => {
  const [favoriteItems, setFavoriteItems] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favoriteItems')) || [];
    setFavoriteItems(storedFavorites);
  }, []);

  const removeItem = (id) => {
    const updatedFavorites = favoriteItems.filter(item => item.id !== id);
    setFavoriteItems(updatedFavorites);
    localStorage.setItem('favoriteItems', JSON.stringify(updatedFavorites));
  };

  return (
    <div className='container'>
      <h2>My Loved Items</h2>
      <div className='wishlist-grid'>
        {favoriteItems.map((item) => (
          <div key={item.id} className='product-card'>
            <div className="image-section">
              <img src={item.img} alt={item.name} className='product-image' />
              <button className="add-to-cart">Add To Cart</button>
              <FaHeart 
                className='heart-icon liked' 
                onDoubleClick={() => removeItem(item.id)}
              />
              <FaEye className='eye-icon' />
            </div>
            <div className="details-section">
              <h5>{item.name}</h5>
              <h6>{item.price} 
                <span> {item.oldPrice}</span>
              </h6>
              {[...Array(Math.floor(item.rating))].map((_, i) => <FaStar key={i} className='star' />)}
              {item.rating % 1 !== 0 && <FaStarHalfAlt className='star' />}
              <small>({item.reviews})</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MYLOVE;
