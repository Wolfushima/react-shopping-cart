import React from 'react';
import logoWordMarkSvg from '../assets/images/Studio_Ghibli_wordmark.svg';
import logoGif from '../assets/gifs/logo.gif';
import addToCardIcon from '../assets/images/add-to-cart.png';
import searchIcon from '../assets/images/search.png';

const Header = () => (
  <header>
    <div className="header-container">
      <div className="header-logo">
        <a href="/" className="home-link">
          <div className="logo-container">
            <div className="logo-gif-container">
              <img className="logo logo-gif" src={logoGif} alt="logo" />
            </div>
            <div className="logo-wordmark-container">
              <img className="logo logo-wordmark" src={logoWordMarkSvg} alt="Studio Ghibli" />
            </div>
          </div>
        </a>
      </div>

      <div className="header-links">
        <div className="link-container">
          <a href="/shop" className="link">Shop the Collection</a>
        </div>
        <div className="link-container">
          <a href="/browse" className="link">All Films</a>
        </div>

      </div>

      <div className="header-controls">
        <a href="/" className="header-controls__search">
          <div className="icon-container">
            <img className="icon icon-search" src={searchIcon} alt="Search Icon" />
          </div>
        </a>
        <a href="/cart" className="header-controls__cart">
          <div className="icon-container">
            <img className="icon icon-cart" src={addToCardIcon} alt="Cart Icon" />
          </div>
        </a>
        <a href="/" className="header-controls__nav">
          <div className="hamburger-icon" id="icon">
            <div className="icon-1" id="a" />
            <div className="icon-2" id="b" />
            <div className="icon-3" id="c" />
          </div>
        </a>
      </div>
    </div>
  </header>
);

export default Header;
