import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import debounce from 'lodash/debounce';
import './Navbar.css';

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [activeLink, setActiveLink] = useState('');

  const smoothScrollTo = debounce((elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, 300);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleLinkClick = (link, elementId) => {
    return (e) => {
      e.preventDefault();
      smoothScrollTo(elementId);
      setActiveLink(link);
    };
  };

  return (
    <nav className="navbar-container">
      <div className="navbar-logo">
        <Link to="/" className="navbar-link">
          <p className="navbar-logo-text">John Doe</p>
        </Link>
      </div>

      <div className={`navbar-links ${windowWidth < 768 ? 'responsive' : ''}`}>
        {[
          { label: 'Home', id: 'home' },
          { label: 'About me', id: 'about' },
          { label: 'Portfolio', id: 'portfolio' },
          { label: 'Service', id: 'service' },
          { label: 'Reviews', id: 'reviews' },
          { label: 'Contact', id: 'contact' }
        ].map((item, index) => (
          <div key={index}>
            <Link
              to="/"
              className={`navbar-link ${activeLink === item.label.toLowerCase() ? 'active' : ''}`}
              onClick={handleLinkClick(item.label.toLowerCase(), item.id)}
            >
              {item.label}
            </Link>
          </div>
        ))}
      </div>
      <div>
        <button className="btn" type="button">
          <Link to="/" className="navbar-link">
            Let's Talk
          </Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
