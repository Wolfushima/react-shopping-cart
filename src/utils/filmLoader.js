import fetchFilm from './fetchFilm';

const filmLoader = async ({ params }) => {
  const film = await fetchFilm(params.filmId);
  return { film };
};

export default filmLoader;
