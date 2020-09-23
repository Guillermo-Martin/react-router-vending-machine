import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/chips">Chips</Link></li>
        <li><Link to="/cookies">Cookies</Link></li>
        <li><Link to="/candy">Candy</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;