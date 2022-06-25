import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Bookstore CMS</h1>
    <nav>
      <Link to="/" className="nav-link">BOOKS</Link>
      <Link to="/categories" className="nav-link">CATEGORIES</Link>
    </nav>
    <div className="Oval">
      <i className="fas fa-user-alt" />
    </div>
  </header>
);

export default Header;
