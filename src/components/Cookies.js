import React from 'react';
import { Link } from 'react-router-dom';

function Cookies() {
  return (
    <div>
      <img src="https://images.unsplash.com/photo-1557310717-d6bea9f36682?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80" alt="cookies" />
      <Link to="/">Go back</Link>
    </div>
  );
}

export default Cookies;