import React from 'react';
import { Link } from 'react-router-dom';

const HeaderLinks = ({ className }) => (
  <div className={className}>
    <div className="link-container">
      <Link to="shop" className="link">Shop the Collection</Link>
    </div>
    <div className="link-container">
      <Link to="browse" className="link">All Films</Link>
    </div>
  </div>
);

export default HeaderLinks;
