import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <h1>EliteMatch</h1>
        <ul>
          <li><Link to="/elite-match-draft">Home</Link></li>
          <li><Link to="/elite-match-draft/create-join-team">Create/Join Team</Link></li>
          <li><Link to="/elite-match-draft/analytics">Analytics</Link></li>
          <li><Link to="/elite-match-draft/search-matches">Search Matches</Link></li>
          <li><Link to="/elite-match-draft/create-tournament">Create Tournament</Link></li>
          <li><Link to="/elite-match-draft/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
