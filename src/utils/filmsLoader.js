import fetchFilms from './fetchFilms';

const filmsLoader = async () => {
  const films = await fetchFilms();
  return { films };
};

export default filmsLoader;
