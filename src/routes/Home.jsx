import React from 'react';
import howlsMovingCastleMP4 from '../assets/videos/howls-moving-castle.mp4';
import spiritedAwayMP4 from '../assets/videos/spirited-away.mp4';

const Home = () => (
  <>
    <article className="home-article home-article-one">
      <div className="overlay" />
    </article>
    <article className="home-article home-article-two">
      <video autoPlay loop muted playsInline>
        <source src={howlsMovingCastleMP4} type="video/mp4" />
      </video>
    </article>
    <article className="home-article home-article-three" />
    <article className="home-article home-article-four">
      <video autoPlay loop muted playsInline>
        <source src={spiritedAwayMP4} type="video/mp4" />
      </video>
    </article>
    <article className="home-article home-article-five" />
  </>
);

export default Home;
