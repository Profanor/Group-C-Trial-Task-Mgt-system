import React from 'react';
import './Footer.css';
import { GitHub, LinkedIn, Twitter, Email } from '@material-ui/icons';

const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className='flex'>
        <div className='controls'>
          <div className='one'>
            <a href='http://github.com/profanor' target="_blank" rel="noopener noreferrer">
              <div className='rounded'>
                <GitHub style={{ color: 'black', fontSize: 40 }} />
              </div>
            </a>
            <div><h3 className='label'>GitHub</h3></div>
          </div>
          <div className='two'>
            <a href='https://www.linkedin.com/in/david-arinze-5766161a1/' target="_blank" rel="noopener noreferrer">
              <div className='rounded'>
                <LinkedIn style={{ color: 'black', fontSize: 40 }} />
              </div>
            </a>
            <div><h3 className='label'>LinkedIn</h3></div>
          </div>
          <div className='three'>
            <a href='/' target="_blank" rel="noopener noreferrer">
              <div className='rounded'>
                <Twitter style={{ color: 'black', fontSize: 40 }} />
              </div>
            </a>
            <div><h3 className='label'>Twitter</h3></div>
          </div>
          <div className='four' id= 'contact'>
            <a href='mailto:fivelanes72@gmail.com' target="_blank" rel="noopener noreferrer">
              <div className='rounded'>
                <Email style={{ color: 'black', fontSize: 40 }} />
              </div>
            </a>
            <div><h3 className='label'>Email</h3></div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
