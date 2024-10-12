import React from 'react';
import "../Pages/Home.css";
import { useLocation } from 'react-router-dom';

export default function Homecontent() {
  const location = useLocation();

  // Safely access location.state and fallback to 'Guest' if id is missing
  const id = location.state?.id || 'Guest';

  return (
    <div>
      <div className="home">
        <div className="image"></div>
        <div className="container">
          <div className="row">
            <h1>Hello {id}, and welcome to the home</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
