import React from 'react';
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa';
import './nav.css'; // تأكد من وجود ملف الأنماط في نفس المجلد
import { useNavigate } from 'react-router-dom';

const NAV = () => {
  const navigate=useNavigate()
  const ELTAWGEH = () =>{
       navigate('/CART');

  }
  const ELQUALP= () =>{
    navigate('/HEART');

}
  return (
   <div className="container">
 <Navbar expand="lg" className="bg-white border-bottom container-fluid">
      <Container fluid>
        <Navbar.Brand href="#" className="fw-bold" id='Exclusive'>Exclusive</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0">
            <Nav.Link href="#home" className='text-dark' id='LL'>Home</Nav.Link>
            <Nav.Link href="#contact" className='text-dark' id='LL'>Contact</Nav.Link>
            <Nav.Link href="#about" className='text-dark' id='LL'>About</Nav.Link>
            <Nav.Link href="#signup" className='text-dark' id='LL'>Sign Up</Nav.Link>
          </Nav>
          <Form className="d-flex align-items-center">
            <FormControl
              type="search"
              placeholder="What are you looking for?"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-secondary" className="d-flex align-items-center">
              <FaSearch className='text-dark' />
            </Button>
          </Form>
          <Nav className="d-flex align-items-center ms-3">
            <Nav.Link href="#wishlist">
              <FaHeart className='text-dark' onClick={ELQUALP} id='HEART' />
            </Nav.Link>
            <Nav.Link href="#cart">
              <FaShoppingCart onClick={ELTAWGEH} className='text-dark' id='CARTT' />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

   </div>
  );
};

export default NAV;
