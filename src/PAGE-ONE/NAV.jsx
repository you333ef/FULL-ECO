import React from 'react';
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa';
import './nav.css';
import { useNavigate } from 'react-router-dom';

const NAV = ({ favorites }) => {
  const navigate = useNavigate();

  const ELTAWGEH = () => {
    navigate('/CART');
  };

  const ELQUALP = () => {
    navigate('/HEART');
  };

  const APOUT = () => {
    navigate('/About');
  };

  const HWED = () => {
    navigate('/HEAD');
  };

  const SIGN = () => {
    navigate('/SIGNUP');
  };

  const Contact = () => {
    navigate('/Contact');
  };

  return (
    <div className="container">
      <Navbar expand="lg" className="bg-white border-bottom container-fluid">
        <Container fluid>
          <Navbar.Brand href="#" className="fw-bold" id="Exclusive">Exclusive</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0 justify-content-center w-100">
              <Nav.Link href="#home" onClick={HWED} className="text-dark" id="LL">Home</Nav.Link>
              <Nav.Link href="#contact" className="text-dark" onClick={Contact} id="LL">Contact</Nav.Link>
              <Nav.Link href="#about" onClick={APOUT} className="text-dark" id="LLAbout">About</Nav.Link>
              <Nav.Link href="#signup" className="text-dark" onClick={SIGN} id="LL">Sign Up</Nav.Link>
              <Nav.Link href="#wishlist" className="text-dark d-lg-none" onClick={ELQUALP} id="LL">Heart</Nav.Link>
              <Nav.Link href="#cart" className="text-dark d-lg-none" onClick={ELTAWGEH} id="LL">Cart</Nav.Link>
            </Nav>
            <Form className="d-flex SARESH align-items-center">
              <FormControl
                type="search"
                placeholder="What are you looking for?"
                className="me-2 SARESH"
                aria-label="Search"
              />
              <Button variant="outline-secondary" className="d-flex align-items-center SARESH">
                <FaSearch className="text-dark SARESH" />
              </Button>
            </Form>
            <Nav className="d-flex align-items-center ms-3 d-none d-lg-flex">
              <Nav.Link href="#wishlist" onClick={ELQUALP}>
               <div className="BO"> <FaHeart className="text-dark" id="HEART" />
               <small>{favorites.length}</small></div>
              </Nav.Link>
              <Nav.Link href="#cart" onClick={ELTAWGEH}>
                <FaShoppingCart className="text-dark" id="CARTT" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NAV;
