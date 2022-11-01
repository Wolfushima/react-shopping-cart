import fetchFilms from '../../utils/fetchFilms';

describe('fetchFilms', () => {
  describe('When fetchFilms successfully fetch films', () => {
    let films;
    beforeEach(async () => {
      const data = await fetchFilms();
      films = data;
    });

    test('Films are inside an array', () => {
      const isArray = Array.isArray(films);
      expect(isArray).toBe(true);
    });

    test('Films length is not 0', () => {
      expect(films).not.toHaveLength(0);
    });

    test('All Films have property: id, title, original_title, image, movie_banner, description, director, producer, release_date, running_time, rt_score, url', () => {
      films.forEach((film) => {
        expect(film).toHaveProperty('id');
        expect(film).toHaveProperty('title');
        expect(film).toHaveProperty('original_title');
        expect(film).toHaveProperty('image');
        expect(film).toHaveProperty('movie_banner');
        expect(film).toHaveProperty('description');
        expect(film).toHaveProperty('director');
        expect(film).toHaveProperty('producer');
        expect(film).toHaveProperty('release_date');
        expect(film).toHaveProperty('running_time');
        expect(film).toHaveProperty('rt_score');
        expect(film).toHaveProperty('url');
      });
    });
  });
});
