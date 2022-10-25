import React from 'react';
import { Link } from 'react-router-dom';
import logoWordMarkSvg from '../assets/images/Studio_Ghibli_wordmark.svg';
import logoGif from '../assets/gifs/logo.gif';
import addToCardIcon from '../assets/images/add-to-cart.png';
import searchIcon from '../assets/images/search.png';

const Header = () => (
  <header>
    <div className="header-container">
      <div className="header-logo">
        <Link to="/" className="home-link">
          <div className="logo-container">
            <div className="logo-gif-container">
              <img className="logo logo-gif" src={logoGif} alt="logo" />
            </div>
            <div className="logo-wordmark-container">
              <img className="logo logo-wordmark" src={logoWordMarkSvg} alt="Studio Ghibli" />
            </div>
          </div>
        </Link>
      </div>

      <div className="header-links">
        <div className="link-container">
          <Link to="shop" className="link">Shop the Collection</Link>
        </div>
        <div className="link-container">
          <Link to="browse" className="link">All Films</Link>
        </div>

      </div>

      <div className="header-controls">
        <Link to="/" className="header-controls__search">
          <div className="icon-container">
            <img className="icon icon-search" src={searchIcon} alt="Search Icon" />
          </div>
        </Link>
        <Link to="cart" className="header-controls__cart">
          <div className="icon-container">
            <img className="icon icon-cart" src={addToCardIcon} alt="Cart Icon" />
          </div>
        </Link>
        <Link to="/" className="header-controls__nav">
          <div className="hamburger-icon" id="icon">
            <div className="icon-1" id="a" />
            <div className="icon-2" id="b" />
            <div className="icon-3" id="c" />
          </div>
        </Link>
      </div>
    </div>
  </header>
);

export default Header;
