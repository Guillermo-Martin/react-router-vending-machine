import React from 'react';
import { Link } from 'react-router-dom';

function VendingMachine() {
  return (
    <div>
      <h1>Hi!  I'm a vending machine.  What would you like to eat?</h1>
      <img 
        src="https://images.unsplash.com/photo-1585341840941-98553e474d84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1276&q=80" 
        alt="vending machine" 
        className="snack"
      />
      <div>
        <div>
          <ul>
            <li><Link to="/chips">Chips</Link></li>
            <li><Link to="/cookies">Cookies</Link></li>
            <li><Link to="/candy">Candy</Link></li>
          </ul>
        </div>
      </div>





    </div>

  );
}

export default VendingMachine;