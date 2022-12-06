import React from 'react';
import HomeFilmDescription from './HomeFilmDescription';
import HomeScrollDownBtn from './HomeScrollDownBtn';

const HomeVideoArticle = ({
  id, videoSrc, scrollToId, film,
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
    <HomeFilmDescription film={film} />
    <HomeScrollDownBtn scrollToId={scrollToId} />
  </article>
);

export default HomeVideoArticle;
