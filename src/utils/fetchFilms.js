const fetchFilms = async () => {
  try {
    const url = 'https://ghibliapi.herokuapp.com/films';
    const response = await fetch(url, { mode: 'cors' });
    if (!response.ok) { throw (response.status); }
    const films = await response.json();
    return films ?? null;
  } catch (err) {
    return null;
  }
};

export default fetchFilms;
