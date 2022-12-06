import React from 'react';
import { useLoaderData } from 'react-router-dom';
import howlsMovingCastleMP4 from '../assets/videos/howls-moving-castle.mp4';
import spiritedAwayMP4 from '../assets/videos/spirited-away.mp4';
import HomeArticle from '../components/home/HomeArticle';
import HomeVideoArticle from '../components/home/HomeVideoArticle';

const findFilm = (films, filmTitle) => films.find((film) => film.title === filmTitle);

const Home = () => {
  const { films } = useLoaderData();

  const firstArticleFilm = findFilm(films, 'My Neighbor Totoro');
  const secondArticleFilm = findFilm(films, 'Howl\'s Moving Castle');
  const thirdArticleFilm = findFilm(films, 'Grave of the Fireflies');
  const fourthArticleFilm = findFilm(films, 'Spirited Away');

  return (
    <>
      <HomeArticle
        id="first-home-article"
        scrollToId="second-home-article"
        film={firstArticleFilm}
      />
      <HomeVideoArticle
        id="second-home-article"
        scrollToId="third-home-article"
        videoSrc={howlsMovingCastleMP4}
        film={secondArticleFilm}
      />
      <HomeArticle
        id="third-home-article"
        scrollToId="fourth-home-article"
        film={thirdArticleFilm}
      />
      <HomeVideoArticle
        id="fourth-home-article"
        scrollToId="footer"
        videoSrc={spiritedAwayMP4}
        film={fourthArticleFilm}
      />
    </>
  );
};

export default Home;
