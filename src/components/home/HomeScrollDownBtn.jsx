import React from 'react';
import DownChevronImg from '../../assets/images/down-chevron.png';

const HomeScrollDownBtn = ({ scrollToId }) => (
  <div className="home-scroll-down-btn">
    <button
      className="scroll-down-btn"
      aria-label="Scroll Down"
      type="button"
      onClick={() => {
        document.getElementById(scrollToId).scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
      }}
    >
      <img src={DownChevronImg} alt="Down Chevron" />
    </button>
  </div>
);

export default HomeScrollDownBtn;
