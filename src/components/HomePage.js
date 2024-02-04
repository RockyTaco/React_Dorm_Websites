// src/components/HomePage.js

import React from 'react';
import Header from './Header';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div>
      <Header />

      <div className="container mt-5">
        {/* Your homepage content goes here */}
        <h1>Dorm Name</h1>
        <p>Blah blah blah</p>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
