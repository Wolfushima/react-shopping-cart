/* eslint-disable quotes */
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeaderLogo from './HeaderLogo';
import HeaderLinks from './HeaderLinks';
import HeaderControls from './HeaderControls';
import NavBar from './NavBar';
import SearchBar from './SearchBar';

const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [isSearchBarExpanded, setIsSearchBarExpanded] = useState(false);
  const [sideBarExpanded, setSideBarExpanded] = useState(null);
  const { pathname } = useLocation();
  const { hash } = useLocation();

  const handleClick = (e, aHash, aPath) => {
    if (hash === `#${aHash}` || pathname === aPath) {
      document.getElementById(aHash).scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
    if (isSearchBarExpanded) {
      setIsSearchBarExpanded(!isSearchBarExpanded);
      return;
    }
    if (!isNavExpanded && (e.target.className === 'icon icon-cart' || e.target.className === 'link')) { return; }
    setIsNavExpanded(!isNavExpanded);
  };

  const handleClickHamburger = () => {
    if (isSearchBarExpanded) {
      setIsSearchBarExpanded(!isSearchBarExpanded);
      return;
    }
    setIsNavExpanded(!isNavExpanded);
  };

  const handleClickSearch = () => {
    if (isNavExpanded) {
      setIsNavExpanded(!isNavExpanded);
    }
    setIsSearchBarExpanded(!isSearchBarExpanded);
  };

  useEffect(() => {
    if (hash) {
      const elementID = hash.replace('#', '');
      document.getElementById(elementID).scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  useEffect(() => {
    if (isNavExpanded) {
      setSideBarExpanded('nav');
      return;
    }
    if (isSearchBarExpanded) {
      setSideBarExpanded('search-bar');
      return;
    }
    setSideBarExpanded(null);
  }, [isNavExpanded, isSearchBarExpanded]);
  return (
    <header className="root-header">
      <div className="header-container">

        <HeaderLogo
          className={sideBarExpanded ? "header-logo expanded" : "header-logo"}
        />
        <HeaderLinks
          className={sideBarExpanded ? "header-links expanded" : "header-links"}
          handleClick={handleClick}
        />
        <HeaderControls
          handleClick={handleClick}
          handleClickSearch={handleClickSearch}
          handleClickHamburger={handleClickHamburger}
          isSearchBarExpanded={isSearchBarExpanded}
          className={sideBarExpanded ? "header-controls expanded" : "header-controls"}
        />
        <NavBar
          className={isNavExpanded ? "expanded" : null}
          handleClick={handleClick}
          isNavExpanded={isNavExpanded}
        />
        <SearchBar
          className={isSearchBarExpanded ? "search-bar expanded" : "search-bar"}
          isSearchBarExpanded={isSearchBarExpanded}
          handleClickSearch={handleClickSearch}
        />

      </div>
    </header>
  );
};

export default Header;
