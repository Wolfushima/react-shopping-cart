import React from 'react';

const FooterNewsletter = () => (
  <div className="footer__newsletter">
    <p className="footer__newsletter-header">SIGN UP FOR OUR NEWSLETTER</p>
    <div className="footer__newsletter-intro">
      <p>
        Enter your email to receive the latest news about Studio Ghibli.
      </p>
    </div>
    <div className="footer__signup-form">
      <label htmlFor="email">
        <input type="email" name="email" placeholder="E-mail Address" />
      </label>
      <input type="submit" value="Sign Up" />
    </div>
  </div>
);

export default FooterNewsletter;
