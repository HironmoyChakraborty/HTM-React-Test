import React, { useState, useEffect } from 'react';
import './Header.css';
import navData from "../../data/header-navigationLinks.json";

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
        <img src={url()} alt="Hotel Niseko" className="header-logo" />
        <button onClick={toggleNav} className="nav-toggle">Menu</button>
      </div>
      <div className={`header-nav ${isNavVisible ? 'show' : ''}`}>
        <nav>
          {navData.navLinks.map(link => (
            <a key={link.href} href={link.href}>{link.text}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
