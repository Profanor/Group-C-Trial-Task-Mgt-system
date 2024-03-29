import React from 'react'
import './Footer.css';
import { GitHub, LinkedIn, Twitter, Email } from '@material-ui/icons';

const Footer = () => {
  return (
    <footer className='footer-container'>
        <div className='flex'>
            <div className='controls'>
            <div className='one'>
                <div className='rounded'>
                    <GitHub style={{ color: 'black', fontSize: 40 }} />
                </div>
                <div><h3 className='label'>GitHub</h3></div>
            </div>
            <div className='two'>
                <div className='rounded'>
                    <LinkedIn style={{ color: 'black', fontSize: 40 }} />
                </div>
                <div><h3 className='label'>LinkedIn</h3></div>
            </div>
            <div className='three'>
                <div className='rounded'>
                    <Twitter style={{ color: 'black', fontSize: 40 }} />
                </div>
                <div><h3 className='label'>Twitter</h3></div>
            </div>
            <div className='four'>
                <div className='rounded'>
                    <Email style={{ color: 'black', fontSize: 40 }} />
                </div>
                <div><h3 className='label'>Email</h3></div>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer
