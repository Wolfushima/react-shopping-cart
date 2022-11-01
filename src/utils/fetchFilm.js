import fetchFilms from './fetchFilms';

const fetchFilm = async (filmTitle) => {
  try {
    const films = await fetchFilms();
    const film = films.find((f) => (
      f.title.toLowerCase().replace(/\s/g, '') === filmTitle.toLowerCase().replace(/\s/g, '')
    ));
    return film ?? null;
  } catch (err) {
    return null;
  }
};

export default fetchFilm;
