import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ className }) => (
  <nav className={className}>
    <ul>
      <li>
        <Link to="shop">Shop the Collection</Link>
      </li>
      <li>
        <Link to="/">All Films</Link>
      </li>
      <li>
        <Link to="about">About</Link>
      </li>
      <li>
        <a href="/contact">Contact</a>
      </li>
    </ul>
  </nav>
);

export default NavBar;
