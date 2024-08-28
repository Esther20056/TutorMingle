import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [barsOpen, setBarsOpen] = useState(false);

  return (
    <div className="Menu">
      <Link className="navbar-brand">Tutor<span>Mingle</span></Link>
      <div className={`hamburger ${barsOpen ? 'hidden' : ''}`} onClick={() => setBarsOpen(true)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {barsOpen && (
        <button className="cancel-button" onClick={() => setBarsOpen(false)}>
          <strong className='times'>&times;</strong>
        </button>
      )}
      <div className={`links-container ${barsOpen ? 'open' : ''}`}>
        <ul id="nav-menu" className={barsOpen ? 'open' : ''}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/educators">Educators</Link></li>
          <li><Link to="/homeducating">Home Educating</Link></li>
          <li><Link to="/becomeEducator">Become an Educator</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

