import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopNavbar from './PAGE-ONE/TopNavbar';
import 'bootstrap/dist/css/bootstrap.min.css'; // إضافة هذا السطر
import NAV from './PAGE-ONE/NAV';
import HEAD from './PAGE-ONE/HEAD';
import COUNT from './PAGE-ONE/COUNT';

const App = () => {
  return (
    <BrowserRouter>
      <TopNavbar />
      <NAV />
      <Routes>
        <Route path='/' element={<HEAD />} />
      

      </Routes>
    </BrowserRouter>
  );
}

export default App;
