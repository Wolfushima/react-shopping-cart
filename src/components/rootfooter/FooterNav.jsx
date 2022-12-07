import React from 'react';
import { Link } from 'react-router-dom';

const FooterNav = ({ handleClick }) => (
  <div className="footer__nav">
    <div className="footer__nav-group">
      <h4>
        <Link
          to="/shop"
          onClick={() => handleClick('root', '/shop')}
        >
          Shop the Collection
        </Link>
      </h4>
      <ul>
        <Link
          to="/browse"
          onClick={() => handleClick('root', '/browse')}
        >
          ALL FILMS
        </Link>
        <Link
          to="/shop#top-rated-films"
          onClick={() => handleClick('top-rated-films', '/shop')}
        >
          TOP RATED FILMS
        </Link>
        <Link
          to="/shop"
          onClick={() => handleClick('root', '/shop')}
        >
          FEATURED
        </Link>
      </ul>
    </div>
    <div className="footer__nav-group">
      <h4>
        <Link
          to="/"
          onClick={() => handleClick('root', '/')}
        >
          Home
        </Link>
      </h4>
      <h4>
        <Link to="/">About</Link>
      </h4>
      <h4>
        <Link to="/">Contact</Link>
      </h4>
    </div>
  </div>
);

export default FooterNav;
