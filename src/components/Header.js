import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Book Store</h1>
    <nav>
      <Link to="/" className="navLink">Books</Link>
      <Link to="/Category" className="navLink">Category</Link>
    </nav>
  </header>
);

export default Header;
