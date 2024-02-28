import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import debounce from 'lodash/debounce';
import './Navbar.css' 

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [activeLink, setActiveLink] = useState('');

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  }

  const smoothScrollTo = debounce((elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
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

  return (
    <nav className="navbar-container">
      <div className="navbar-logo">
        <Link to="/" className="navbar-link" onClick={closeMobileMenu}>
          <div className="navbar-logo-image">
          </div>
          <p className="navbar-logo-text">John Doe</p>
        </Link>
      </div>
      
      {windowWidth <= 768 ? (
        <div className="navbar-mobile-menu">
          <button className="mobile-menu-button" onClick={toggleMobileMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" className="mobile-menu-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      ) : (
        <div className="navbar-links">
          <div>
            <Link to="/" className={`navbar-link ${activeLink === 'about' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); smoothScrollTo("about"); setActiveLink('about'); }}>
              About
            </Link>
          </div>
          <div>
            <Link to="/" className={`navbar-link ${activeLink === 'featured' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); smoothScrollTo("featured"); setActiveLink('featured'); }}>
              Featured
            </Link>
          </div>
          <div>
            <Link to="/posts/new" className="navbar-link" onClick={closeMobileMenu}>Create a Post</Link>
          </div>
        </div>
      )}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <div>
            <Link to="/" className="navbar-link" onClick={(e) => { e.preventDefault(); smoothScrollTo("about"); setActiveLink('about'); }}>
              About
            </Link>
          </div>
          <div>
            <Link to="/" className="navbar-link" onClick={(e) => { e.preventDefault(); smoothScrollTo("featured"); setActiveLink('featured'); }}>
              Featured
            </Link>
          </div>
          <div>
            <Link to="/posts/new" className="navbar-link" onClick={closeMobileMenu}>Create a Post</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
