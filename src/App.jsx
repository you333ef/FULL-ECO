import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopNavbar from './PAGE-ONE/TopNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import NAV from './PAGE-ONE/NAV';
import HEAD from './PAGE-ONE/HEAD';
import CART from './PAGE-ONE/CART';
import MYLOVE from './PAGE-ONE/MYLOVE';
import About from './About.jsx/About';
import FOOTER from './PAGE-ONE/FOOTER';
import SIGNUP from './SIGNUP/SIGNUP';
import SECNDSIGN from './SIGNUP/SECNDSIGN';
import Contact from './Contact';

const App = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  const addToFavorites = (product) => {
    const updatedFavorites = [...favorites, product];
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const removeFavorite = (productId) => {
    const updatedFavorites = favorites.filter((item) => item.id !== productId);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <BrowserRouter>
      <TopNavbar />
      <NAV favorites={favorites} />
      <Routes>
        <Route path='/HEAD' element={<HEAD addToFavorites={addToFavorites} />} />
        <Route path="/CART" element={<CART />} />
        <Route path="/HEART" element={<MYLOVE favorites={favorites} removeFavorite={removeFavorite} />} />
        <Route path="/About" element={<About />} />
        <Route path="/SIGNUP" element={<SIGNUP />} />
        <Route path="/SECNDSIGN" element={<SECNDSIGN />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <FOOTER />
    </BrowserRouter>
  );
}

export default App;
