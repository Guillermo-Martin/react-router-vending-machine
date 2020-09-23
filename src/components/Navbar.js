import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <ul>
        <li><NavLink activeClassName="active-link" to="/">Home</NavLink></li>
        <li><NavLink activeClassName="active-link" to="/chips">Chips</NavLink></li>
        <li><NavLink activeClassName="active-link" to="/cookies">Cookies</NavLink></li>
        <li><NavLink activeClassName="active-link" to="/candy">Candy</NavLink></li>
      </ul>
    </div>
  );
}

export default Navbar;