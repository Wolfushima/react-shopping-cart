import React from 'react';

const HomeScrollDownBtn = ({ scrollToId }) => (
  <div className="home-scroll-down-btn">
    <button
      className="scroll-down-btn"
      aria-label="Scroll Down"
      type="button"
      onClick={() => {
        document.getElementById(scrollToId).scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
      }}
    />
  </div>
);

export default HomeScrollDownBtn;
