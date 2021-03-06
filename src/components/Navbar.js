import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className="Navbar">
      <ul className="Navbar-ul">
        <div className="Navbar-lis">
          <li><NavLink activeClassName="active-link" exact to="/">Home</NavLink></li>
          <li><NavLink activeClassName="active-link" exact to="/chips">Chips</NavLink></li>
          <li><NavLink activeClassName="active-link" exact to="/cookies">Cookies</NavLink></li>
          <li><NavLink activeClassName="active-link" exact to="/candy">Candy</NavLink></li>
        </div>
        
      </ul>
    </div>
  );
}

export default Navbar;