import React, { useEffect, useState } from 'react';

const CART = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(savedCartItems);
  }, []);

  const handleQuantityChange = (index, newQuantity) => {
    if (newQuantity > 0) {  // تأكد إن الكمية مش أقل من 1
      const updatedCartItems = [...cartItems];
      updatedCartItems[index].quantity = newQuantity;
      setCartItems(updatedCartItems);
      localStorage.setItem('cart', JSON.stringify(updatedCartItems));
    }
  };

  const handleRemoveItem = (index) => {
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems);
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
  };

  const calculateSubtotal = (price, quantity) => {
    return price * quantity;
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const subtotal = calculateSubtotal(item.price, item.quantity);
      return total + (isNaN(subtotal) ? 0 : subtotal);
    }, 0);
  };

  return (
    <div className="cart-container">
      <h1>Product Cart</h1>
      {cartItems.length > 0 ? (
        <div>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index} >
                  <td >
                    <img src={item.image} alt={item.name} width="50" />
                    {item.name}
                  </td>
                  <td  id='input'>${item.price}</td>
                  <td>
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                    />
                  </td>
                  <td>${calculateSubtotal(item.price, item.quantity)}</td>
                  <td>
                    <button onClick={() => handleRemoveItem(index)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="cart-summary">
            <h3>ملخص العربية</h3>
            <p>الإجمالي الفرعي: ${calculateTotal()}</p>
            <p>الشحن: مجاني</p>
            <h2>الإجمالي الكلي: ${calculateTotal()}</h2>
            <button className="checkout-button">استكمال الشراء</button>
          </div>
        </div>
      ) : (
        <p>العربية فاضية حالياً.</p>
      )}
    </div>
  );
}

export default CART;
