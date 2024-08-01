import React from 'react';
import './topnav.css';

const TopNavbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-content">
        <span className="left-section">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! 
          <a href="#shopnow">ShopNow</a>
        </span>
        <span className="right-section">
          English <i className="arrow-down"></i>
        </span>
      </div>
    </div>
  );
}

export default TopNavbar;
