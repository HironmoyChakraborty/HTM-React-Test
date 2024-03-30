import React from 'react';
import './Footer.css';

function Footer() {
  const url = () => {
    return `${process.env.PUBLIC_URL}/assets/hotel logo.jpg`;
  };

  return (
    <footer className="footer">
      {/* Wrapper for all sections to control alignment and spacing */}
      <div className="footer-wrapper">
        {/* Mailing List Section */}
        <div className="footer-section mailing-list">
          <h4>Hotel Nisekoi Mailing List</h4>
          <p>Be the first to receive exclusive offers and the latest news from Hotel Nisekoi</p>
          <div className="footer-input-group">
            <input type="text" placeholder="Given Name" />
            <input type="text" placeholder="Family Name" />
            <input type="email" placeholder="Email Address" />
            <button>Subscribe</button>
          </div>
        </div>

        {/* Links Section */}
        <div className="footer-section links">
          <h4>Connect with Hotel Nisekoi</h4>
          <div className="link-columns">
          <div className="link-column">
            <a href="#Accommodations">Accommodations</a>
            <a href="#OurPremises">Our Premises</a>
            <a href="#DiningBars">Dining & Bars</a>
            <a href="#SpaWellness">Spa & Wellness</a>
            <a href="#GuestServices">Guest Services</a>
            <a href="#SkiServicesEquipment">Ski Services</a>
            <a href="#LocationDirections">Location</a>
            <a href="#OnlineWalkthrough">Vitual Tour</a>
            <a href="#CurrentViews">Current Views</a>
            </div>
            <div className="link-column">
            <a href="#QuickRegistration">Registration</a>
            <a href="#FAQ">FAQ</a>
            <a href="#LatestUpdates">Latest Updates</a>
            <a href="#EventsActivities">Events</a>
            <a href="#Careers">Careers</a>
            <a href="#PropertyManagementt">Owners</a>
            <a href="#InvestmentOpportunities">Investment</a>
            <a href="#Contact">Contact</a>
            </div>
          </div>
        </div>
        {/* New Skye Niseko Info Section */}
        <div className="footer-section skye-niseko-info">
          {/* Skye Niseko logo placeholder - Implement according to your project's asset management */}
          <img src={url()} alt="Copyright-free taken from Freepik" className="skye-niseko-logo" />
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


