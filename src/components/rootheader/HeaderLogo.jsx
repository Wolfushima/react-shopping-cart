import React from 'react';
import { Link } from 'react-router-dom';
import logoGif from '../../assets/gifs/logo.gif';
import logoWordMarkSvg from '../../assets/images/Studio_Ghibli_wordmark.svg';

const HeaderLogo = ({ className }) => (
  <div className={className}>
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
);

export default HeaderLogo;
