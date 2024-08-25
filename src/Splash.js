import React, { useEffect, useRef } from 'react';
import '../src/Splash.css';
import MyLogo from '../src/Images/MyLogo.png';
import Typed from 'typed.js';

const Splash = ({ onHide }) => {
  const typedRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      onHide();
    }, 7500);

    const options = {
      strings: ['Welcome to TutorMingle!', 'Explore and Enjoy!'],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1000,
      startDelay: 500,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      clearTimeout(timer);
      typed.destroy(); 
    };
  }, [onHide]);

  return (
    <div className="splash-screen">
         <div className="welcome-text">
        <span ref={typedRef} />
      </div>
      <img src={MyLogo} alt="Splash Screen" />
    </div>
  );
};

export default Splash;
