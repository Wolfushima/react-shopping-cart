import React from 'react';
import howlsMovingCastleMP4 from '../assets/videos/howls-moving-castle.mp4';
import spiritedAwayMP4 from '../assets/videos/spirited-away.mp4';
import HomeArticle from '../components/home/HomeArticle';
import HomeVideoArticle from '../components/home/HomeVideoArticle';

const Home = () => (
  <>
    <HomeArticle
      id="first-home-article"
      scrollToId="second-home-article"
    />
    <HomeVideoArticle
      id="second-home-article"
      scrollToId="third-home-article"
      videoSrc={howlsMovingCastleMP4}
    />
    <HomeArticle
      id="third-home-article"
      scrollToId="fourth-home-article"
    />
    <HomeVideoArticle
      id="fourth-home-article"
      scrollToId="fifth-home-article"
      videoSrc={spiritedAwayMP4}
    />
    <HomeArticle
      id="fifth-home-article"
      scrollToId="fifth-home-article"
    />
  </>
);

export default Home;
