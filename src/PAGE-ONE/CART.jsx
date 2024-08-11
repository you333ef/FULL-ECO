import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

const CART = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(savedCartItems);
  }, []);

  const handleQuantityChange = (index, newQuantity) => {
    if (newQuantity > 0) {
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
    <Container className="cart-container  mt-4">
      <h1 className='text-start' id='Product_Cart'>Product Cart</h1>
      {cartItems.length > 0 ? (
        <Row>
          <Col lg={8} md={7}>
            <table className="table">
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
                  <tr key={index}>
                    <td>
                      <img src={item.image} className='d-block m-auto' alt={item.name} width="80" />
                     <p id='NAMEITEM' className='text-center'>{item.name}</p>
                    </td>
                    <td >${item.price}</td>
                    <td>
                      <Form.Control
                        type="number"
                        value={item.quantity}
                        min="1"
                        onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                        className="quantity-input"
                      />
                    </td>
                    <td>${calculateSubtotal(item.price, item.quantity)}</td>
                    <td>
                      <Button variant="danger" onClick={() => handleRemoveItem(index)}>
                        Remove
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="d-flex justify-content-between">
              
            </div>
          </Col>
          <Col lg={4} md={5}>
            <div className="cart-summary p-3 border">
              <h3 className='text-center'>Cart Total</h3>
              <p className='text-center'>Subtotal: ${calculateTotal()}</p>
              <p className='text-center'>Shipping: Free</p>
              <h2>Total: ${calculateTotal()}</h2>
              <Button variant="danger" className="w-100 text-center">Proceed to Checkout</Button>
            </div>
          </Col>
        </Row>
      ) : (
        <p>العربية فاضية حالياً.</p>
      )}
    </Container>
  );
}

export default CART;
