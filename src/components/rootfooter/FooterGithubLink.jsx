import React from 'react';
import logo from '../../assets/images/github-logo.png';

const FooterGithubLink = () => (
  <div className="footer__githublink">
    <a href="https://github.com/Wolfushima">
      <img src={logo} alt="github logo" className="footer__githublogo" />
      <span>Wolfushima</span>
    </a>
  </div>
);

export default FooterGithubLink;
