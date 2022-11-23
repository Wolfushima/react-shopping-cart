import React from 'react';
import { Link } from 'react-router-dom';
import addToCardIcon from '../../assets/images/add-to-cart.png';
import searchIcon from '../../assets/images/search.png';

const HeaderControls = ({ toggleNav, className }) => (
  <div className={className}>
    <Link to="/" className="header-controls__search">
      <div className="icon-container">
        <img className="icon icon-search" src={searchIcon} alt="Search Icon" />
      </div>
    </Link>
    <Link to="/shop/cart" className="header-controls__cart">
      <div className="icon-container">
        <img className="icon icon-cart" src={addToCardIcon} alt="Cart Icon" />
      </div>
    </Link>
    <button className="header-controls__nav" type="button" onClick={toggleNav}>
      <div className="hamburger-icon" id="icon">
        <div className="icon-1" id="a" />
        <div className="icon-2" id="b" />
        <div className="icon-3" id="c" />
      </div>
    </button>
  </div>
);

export default HeaderControls;
