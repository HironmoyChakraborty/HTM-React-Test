import React, { useState, useEffect } from 'react';
import './Header.css';

function Header() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsNavVisible(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  const url = () => `${process.env.PUBLIC_URL}/assets/hotel logo.jpg`;

  return (
    <header className="header">
      <div className="header-top">
        <img src={url()} alt="Skye Niseko" className="header-logo" />
        <button onClick={toggleNav} className="nav-toggle">Menu</button>
      </div>
      <div className={`header-nav ${isNavVisible ? 'show' : ''}`}>
        <nav>
          <a href="#Accommodations">Accommodations</a>
          <a href="#OurPremises">Our Premises</a>
          <a href="#DiningBars">Dining & Bars</a>
          <a href="#about">About</a>
          <a href="#special-deals">Special Deals</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
