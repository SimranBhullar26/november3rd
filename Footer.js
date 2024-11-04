import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} PARGOL APP. All rights reserved.</p>
        <nav className="footer-nav">
    
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
