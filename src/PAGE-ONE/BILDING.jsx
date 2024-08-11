import React, { useState, useEffect } from 'react';
import './building.css';
import Kash from '../assets/SIGN/image 32.svg';
import VISA from '../assets/SIGN/image 30.svg';
import Card from '../assets/SIGN/image 31.svg';
import Fire from '../assets/SIGN/image 33.svg';


const BILDING = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(savedCartItems);
  }, []);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const subtotal = item.price * item.quantity;
      return total + (isNaN(subtotal) ? 0 : subtotal);
    }, 0);
  };

  return (
 <div className="container">
   <div className="billing-container">
      <div className="billing-details">
        <h2 id='Details'>Billing Details</h2>
        <form>
          <input type="text" placeholder="First Name*" required />
          <input type="text" placeholder="Company Name" />
          <input type="text" placeholder="Street Address*" required />
          <input type="text" placeholder="Apartment, floor, etc. (optional)" />
          <input type="text" placeholder="Town/City*" required />
          <input type="text" placeholder="Phone Number*" required />
          <input type="email" placeholder="Email Address*" required />
          <label className='text-center' >
            <input type="checkbox"  />
            Save this information for faster check-out next time
          </label>
        </form>
      </div>
      
      <div className="order-summary">
       
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} className="order-item  mt-5">
            <div className="JOE ">
            <img src={item.image} alt={item.name} width="50" />
            <small id='itemname'>{item.name}</small>
            </div>
              <span className='nabawi'>${item.price * item.quantity}</span>
            </li>
          ))}
        </ul>
        <div className="totals">
            <div className="btween">

            <p>Subtotal: </p>
            <p>${calculateTotal()}</p>
            </div>
          <div className="btween"><p>Shipping</p>
          <p>: Free</p></div>
          <div className="btween"><p>Total: </p>
          <p>${calculateTotal()}</p></div>
          
        </div>
        <div className="payment-method">
            <div className="LABELS">
            <div className="FRIDAR">
                                <label>
                                <input type="radio" name="payment" value="bank" />
                                Bank
                                </label>
                                <label>
                                <input type="radio" name="payment" value="cash" defaultChecked />
                                Cash on delivery
          </label>
            </div>
          <div className="CARTSSS">
                    <img src={Kash} alt="" />
                    <img src={VISA} alt="" />
                    <img src={Card} alt="" />
                    <img src={Fire} alt="" />
          </div>
            </div>
        </div>
        <div className="coupon "id='HIHIHIH'>
          <input  id='Apply' type="text" placeholder="Coupon Code" />
          <button id='COOOPPO ' className='COOOPPO'>Apply Coupon</button>
        </div>
        <button className="place-order">Place Order</button>
      </div>
      
    </div>
    
    <div className="coupon shhhhhh">
          <input  id='Apply' type="text" placeholder="Coupon Code" />
          <button id='COOOPPO ' className='COOOPPO'>Apply Coupon</button>
        </div>


 </div>
  );
};

export default BILDING;
