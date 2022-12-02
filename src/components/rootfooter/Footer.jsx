import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import FooterNav from './FooterNav';
import FooterNewsletter from './FooterNewsletter';
import FooterFollow from './FooterFollow';

const Footer = () => {
  const { pathname } = useLocation();
  const { hash } = useLocation();

  const handleClick = (aHash, aPath) => {
    if (hash === `#${aHash}` || pathname === aPath) {
      document.getElementById(aHash).scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
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
    <footer className="root-footer footer" id="footer">
      <div className="footer__wrapper">
        <div className="footer__container">
          <header className="footer__header">
            <h3>STUDIO GHIBLI</h3>
          </header>
          <FooterNav handleClick={handleClick} />
          <div className="footer__extras">
            <FooterNewsletter />
            <FooterFollow />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
