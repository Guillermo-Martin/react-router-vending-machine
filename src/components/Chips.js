import React from 'react';
import { Link } from 'react-router-dom';

function Chips() {
  return (
    <div className="snack">
      <img 
        src="https://images.unsplash.com/photo-1599493356626-9fdbdabfd9bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1275&q=80" 
        alt="chips" 
        className="snack"
      />
      <div>
        <Link to="/">Go back</Link>
      </div>
    </div>
  );
}

export default Chips;