import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopNavbar from './PAGE-ONE/TopNavbar';
import 'bootstrap/dist/css/bootstrap.min.css'; // إضافة هذا السطر
import NAV from './PAGE-ONE/NAV';
import HEAD from './PAGE-ONE/HEAD';
import COUNT from './PAGE-ONE/COUNT';
import CART from './PAGE-ONE/CART';
import MYLOVE from './PAGE-ONE/MYLOVE';
import About from './About.jsx/About';
import FOOTER from './PAGE-ONE/FOOTER';

const App = () => {
  return (
    <BrowserRouter>
      <TopNavbar />
      <NAV />
      <Routes>
        <Route path='/HEAD' element={<HEAD />} />
        <Route path="/CART" element={<CART />} />
        <Route path="/HEART" element={<MYLOVE />} />
        <Route path="/About" element={<About/>} />

      </Routes>
      <FOOTER/>
    </BrowserRouter>
  );
}

export default App;
