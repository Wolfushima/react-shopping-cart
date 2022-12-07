/* eslint-disable quotes */
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeaderLogo from './HeaderLogo';
import HeaderLinks from './HeaderLinks';
import HeaderControls from './HeaderControls';
import NavBar from './NavBar';

const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const { pathname } = useLocation();
  const { hash } = useLocation();

  const handleClick = (e, aHash, aPath) => {
    if (hash === `#${aHash}` || pathname === aPath) {
      document.getElementById(aHash).scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
    if (!isNavExpanded && (e.target.className === 'icon icon-cart' || e.target.className === 'link')) { return; }
    setIsNavExpanded(!isNavExpanded);
  };

  useEffect(() => {
    if (hash) {
      const elementID = hash.replace('#', '');
      document.getElementById(elementID).scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <header className="root-header">
      <div className="header-container">

        <HeaderLogo
          className={isNavExpanded ? "header-logo expanded" : "header-logo"}
        />
        <HeaderLinks
          className={isNavExpanded ? "header-links expanded" : "header-links"}
          handleClick={handleClick}
        />
        <HeaderControls
          handleClick={handleClick}
          className={isNavExpanded ? "header-controls expanded" : "header-controls"}
        />
        <NavBar
          className={isNavExpanded ? "expanded" : null}
          handleClick={handleClick}
          isNavExpanded={isNavExpanded}
        />

      </div>
    </header>
  );
};

export default Header;
