import React from 'react';
import HomeFilmDescription from './HomeFilmDescription';
import HomeScrollDownBtn from './HomeScrollDownBtn';

const HomeArticle = ({ id, scrollToId, film }) => (
  <article
    id={id}
    className="home-article"
  >
    <div
      className="home-article__container"
    >
      <HomeFilmDescription film={film} />
      <HomeScrollDownBtn scrollToId={scrollToId} />
    </div>
  </article>
);

export default HomeArticle;
