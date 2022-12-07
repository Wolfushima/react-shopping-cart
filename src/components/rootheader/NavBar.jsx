import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ className, handleClick, isNavExpanded }) => {
  useEffect(() => {
    if (isNavExpanded) {
      document.querySelector('main').addEventListener('click', handleClick);
      document.querySelector('.root-footer').addEventListener('click', handleClick);
    }
    return () => {
      document.querySelector('main').removeEventListener('click', handleClick);
      document.querySelector('.root-footer').removeEventListener('click', handleClick);
    };
  }, [isNavExpanded]);
  return (
    <nav className={className}>
      <ul>
        <li>
          <Link
            to="/"
            onClick={(e) => handleClick(e, 'root', '/')}
            className="nav-link-header"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/shop"
            onClick={(e) => handleClick(e, 'root', '/shop')}
            className="nav-link-header"
          >
            Shop the Collection
          </Link>
        </li>
        <li>
          <Link
            to="/browse"
            onClick={(e) => handleClick(e, 'root', '/browse')}
          >
            ALL FILMS
          </Link>
        </li>
        <li>
          <Link
            to="/shop#top-rated-films"
            onClick={(e) => handleClick(e, 'top-rated-films', '/shop')}
          >
            TOP RATED FILMS
          </Link>
        </li>
        <li>
          <Link
            to="/shop"
            onClick={(e) => handleClick(e, 'root', '/shop')}
          >
            FEATURED
          </Link>
        </li>

        <li>
          <Link
            to="/about"
            onClick={(e) => handleClick(e, 'root', '/about')}
            className="nav-link-header"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            onClick={(e) => handleClick(e, 'root', '/contact')}
            className="nav-link-header"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
