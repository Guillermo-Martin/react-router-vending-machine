import React from 'react';

import { Link } from 'react-router-dom';

function VendingMachine() {
  return (
    <div>
      <h1>Hi!  I'm a vending machine.  What would you like to eat?</h1>
      
        <Link to="/chips">Chips</Link>
        <Link to="/cookies">Cookies</Link>
        <Link to="/candy">Candy</Link>
  
    </div>
    
  );
}

export default VendingMachine;