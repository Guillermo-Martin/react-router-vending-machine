import React from 'react';
import Navbar from './components/Navbar';
import VendingMachine from './components/VendingMachine';
import Chips from './components/Chips';
import Cookies from './components/Cookies';
import Candy from './components/Candy';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Navbar />
        <Route exact path="/" component={VendingMachine} />
        <Route exact path="/chips" component={Chips} />
        <Route exact path="/cookies" component={Cookies} />
        <Route exact path="/candy" component={Candy} />
        
      </Router>
      
    </div>
  );
}

export default App;
