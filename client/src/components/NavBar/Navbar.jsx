import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import debounce from 'lodash/debounce';
import { Home, Person, Work, Build, Star, Email } from '@material-ui/icons';
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
    return () => {
      smoothScrollTo(elementId);
      setActiveLink(link);
    };
  };

  return (
    <nav className="navbar-container">
      <div className="navbar-logo">
        <Link to="/" className="navbar-link">
          <button className='logo-btn'>David</button>
        </Link>
      </div>

      <div className={`navbar-links ${windowWidth < 768 ? 'responsive' : ''}`}>
        {[
          { label: 'Home', id: 'home', icon: <Home style={{ color: 'black' }} /> },
          { label: 'About me', id: 'about', icon: <Person style={{ color: 'black' }} /> },
          { label: 'Portfolio', id: 'portfolio', icon: <Work style={{ color: 'black' }} /> },
          { label: 'Service', id: 'service', icon: <Build style={{ color: 'black' }} /> },
          { label: 'Reviews', id: 'reviews', icon: <Star style={{ color: 'black' }} /> },
          { label: 'Links', id: 'links', icon: <Email style={{ color: 'black' }} /> }
        ].map((item, index) => (
          <div key={index} className={`neomorphic-link ${activeLink === item.label.toLowerCase() ? 'active' : ''}`}>
            <Link
              to={`/${item.id}`}
              onClick={handleLinkClick(item.label.toLowerCase(), item.id)}
            >
              {item.icon}
            </Link>
          </div>
        ))}
      </div>
      <div>
          <Link to="/contact" className="btn navbar-link" id="contact">
            Let's Talk
          </Link>
      </div>
    </nav>
  );
};

export default Navbar;
