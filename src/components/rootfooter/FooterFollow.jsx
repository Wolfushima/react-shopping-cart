import React from 'react';
import facebookIcon from '../../assets/images/footer/facebook-icon.png';
import instagramIcon from '../../assets/images/footer/instagram-icon.png';
import twitterIcon from '../../assets/images/footer/twitter-icon.png';
import youtubeIcon from '../../assets/images/footer/youtube-icon.png';

const FooterFollow = () => (
  <div className="footer__follow">
    <p className="footer__follow-header">
      FOLLOW US
    </p>
    <div className="footer__follow-icons">
      <div className="footer__follow-icon">
        <img src={facebookIcon} alt="Facebook Logo" />
      </div>
      <div className="footer__follow-icon">
        <img src={instagramIcon} alt="Instagram Logo" />
      </div>
      <div className="footer__follow-icon">
        <img src={twitterIcon} alt="Twitter Logo" />
      </div>
      <div className="footer__follow-icon">
        <img src={youtubeIcon} alt="Youtube Logo" />
      </div>
    </div>
  </div>
);

export default FooterFollow;
