import React from 'react';
import HomeScrollDownBtn from './HomeScrollDownBtn';

const HomeArticle = ({ id, scrollToId }) => (
  <article
    id={id}
    className="home-article"
  >
    <div
      className="home-article__container"
    >
      <HomeScrollDownBtn scrollToId={scrollToId} />
    </div>
  </article>
);

export default HomeArticle;
