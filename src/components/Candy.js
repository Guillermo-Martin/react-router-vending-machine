import React from 'react';
import { Link } from 'react-router-dom';

function Candy() {
  return (
    <div>
      <img src="https://images.unsplash.com/photo-1574183878891-e08ec44abc37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80" alt="Candy" />
      <Link to="/">Go back</Link>
    </div>
  );
}

export default Candy;