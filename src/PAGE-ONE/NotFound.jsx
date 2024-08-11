import React from 'react';
import { Link } from 'react-router-dom';
import './notfound.css'
const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 Not Found</h1>
      <p>Your visited page not found. You may go home page.</p>
      <Link to="/">
        <button style={{ padding: '10px 20px', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Back to home page
        </button>
      </Link>
    </div>
  );
}

export default NotFound;
