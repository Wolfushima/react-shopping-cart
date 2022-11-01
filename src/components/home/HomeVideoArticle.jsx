import React from 'react';
import HomeScrollDownBtn from './HomeScrollDownBtn';

const HomeVideoArticle = ({
  id, videoSrc, scrollToId,
}) => (
  <article
    id={id}
    className="home-article"
  >
    <video
      autoPlay
      loop
      muted
      playsInline
    >
      <source
        src={videoSrc}
        type="video/mp4"
      />
    </video>
    <HomeScrollDownBtn scrollToId={scrollToId} />
  </article>
);

export default HomeVideoArticle;
