import React from 'react';
import { Link } from 'react-router-dom';

const HeaderLinks = ({ className, handleClick }) => (
  <div className={className}>
    <div className="link-container">
      <Link
        to="shop"
        className="link"
        onClick={(e) => handleClick(e, 'root', '/shop')}
      >
        Shop the Collection
      </Link>
    </div>
    <div className="link-container">
      <Link
        to="browse"
        className="link"
        onClick={(e) => handleClick(e, 'root', '/browse')}
      >
        All Films
      </Link>
    </div>
  </div>
);

export default HeaderLinks;
