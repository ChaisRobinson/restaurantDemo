import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>Chais' Bar and Grille</h3>
            <p>123 Main Street<br />Anytown, USA 12345</p>
            <p>(555) 555-5555</p>
          </div>
          <div className="col-md-4">
            <h3>Hours</h3>
            <p>Monday - Thursday: 11am - 10pm</p>
            <p>Friday - Saturday: 11am - 11pm</p>
            <p>Sunday: 11am - 9pm</p>
          </div>
          <div className="col-md-4">
            <h3>Follow Us</h3>
            <ul className="social-links">
              <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#"><i className="fab fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p className="copyright">&copy; {new Date().getFullYear()} Chais' Bar and Grille. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;