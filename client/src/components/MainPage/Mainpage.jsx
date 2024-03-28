import React, { useEffect } from 'react';
import './Mainpage.css';

const Mainpage = () => {
    useEffect(() => {
        const startTyping = () => {
            const h1Element = document.getElementById('typewriter');
            h1Element.classList.add('typewriter');

            // Remove blinking cursor class after animation completes
            const onAnimationEnd = () => {
                h1Element.classList.remove('typewriter');
                h1Element.removeEventListener('animationend', onAnimationEnd);
            };
            h1Element.addEventListener('animationend', onAnimationEnd);
        };

        // Trigger the typing animation after a delay
        const delay = setTimeout(startTyping, 1000);

        return () => clearTimeout(delay);
    }, []);

    return (
        <div className="parent-cont">
            <h1 id="typewriter"><span className='hi'>Hi</span>, I am David Arinze</h1>
        </div>
    );
};

export default Mainpage;
