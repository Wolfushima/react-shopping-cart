/* eslint-disable quotes */
import React, { useState } from 'react';
import HeaderLogo from './HeaderLogo';
import HeaderLinks from './HeaderLinks';
import HeaderControls from './HeaderControls';

import NavBar from './NavBar';

const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const toggleNav = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  return (
    <header className="root-header">
      <div className="header-container">

        <HeaderLogo
          className={isNavExpanded ? "header-logo expanded" : "header-logo"}
        />
        <HeaderLinks
          className={isNavExpanded ? "header-links expanded" : "header-links"}
        />
        <HeaderControls
          toggleNav={toggleNav}
          className={isNavExpanded ? "header-controls expanded" : "header-controls"}
        />
        <NavBar
          className={isNavExpanded ? "expanded" : null}
        />

      </div>
    </header>
  );
};

export default Header;
