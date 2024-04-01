import React from 'react';
import './Footer.css';
import footerLinksList from '../../data/footerLinks.json';

function Footer() {
  const url = () => `${process.env.PUBLIC_URL}/assets/hotel logo.jpg`;

  return (
    <footer className="footer">
      <div className="footer-wrapper">
      <div className="footer-section">
          <h4>Hotel Nisekoi Mailing List</h4>
          <p>Be the first to receive exclusive offers and the latest news from Hotel Nisekoi</p>
          <div className="footer-input-group">
            <input type="text" placeholder="Given Name" />
            <input type="text" placeholder="Family Name" />
            <input type="email" placeholder="Email Address" />
            <button>Subscribe</button>
          </div>
        </div>
        <div className="footer-section links">
          <h4>Connect with Hotel Nisekoi</h4>
          <div className="link-columns">
            {footerLinksList.footerLinks.map((column, columnIndex) => (
              <div key={columnIndex} className="link-column">
                {column.map((link, linkIndex) => (
                  <a key={linkIndex} href={link.href}>{link.text}</a>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="footer-section hotel-niseko-info">
          <img src={url()} alt="Copyright-free taken from Freepik" className="hotel-niseko-logo" />
          <p>
                    Nisekoi Hirafuji 2-jo 3-chome 15-4,<br />
                    Kutchan-choi, Abuta-guni<br />
                    Hokkaido 044-1000<br />
                    JAPAN
          </p>
          <p >Reservations: +81 (0) 136 55 5123<br />
             Front Desk: +81 (0) 136 55 6414<br />
             Email: <a style={{ fontSize: 'small', color: '#666' }} href="mailto:logo@hotelnisekoi.com">logo@hotelnisekoi.com</a></p>
          <p ><a href="#Terms">Terms & Conditions</a> | <a href="#Privacy">Privacy Policy</a></p>
          <p style={{ fontSize: 'x-small', color: '#666' }}> © 2024 Hotel Nisekoi.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
