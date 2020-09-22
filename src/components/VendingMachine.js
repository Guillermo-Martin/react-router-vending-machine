import React from 'react';
import Chips from './Candy';
import Cookies from './Cookies';
import Candy from './Candy';

function VendingMachine() {
  return (
    <div>
      <h1>Hi!  I'm a vending machine.  What would you like to eat?</h1>
      <Chips />
      <Cookies />
      <Candy />
    </div>
    
  );
}

export default VendingMachine;