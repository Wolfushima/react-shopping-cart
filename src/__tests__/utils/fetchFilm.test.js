import fetchFilm from '../../utils/fetchFilm';

describe('Get Film', () => {
  describe('When fetchFilm succesfully gets a film', () => {
    test('Film title is in the database', async () => {
      const film1 = await fetchFilm('Castle in the Sky');
      const film1Title = film1.title;
      expect(film1Title).toBe('Castle in the Sky');
      const film2 = await fetchFilm('Grave of the Fireflies');
      const film2Title = film2.title;
      expect(film2Title).toBe('Grave of the Fireflies');
    });

    test('Film can be in Uppercase', async () => {
      const film1 = await fetchFilm('CASTLE IN THE SKY');
      const film1Title = film1.title;
      expect(film1Title).toBe('Castle in the Sky');
    });

    test('Film can be in Lowercase', async () => {
      const film1 = await fetchFilm('castle in the sky');
      const film1Title = film1.title;
      expect(film1Title).toBe('Castle in the Sky');
    });

    test('Film can have no spaces', async () => {
      const film1 = await fetchFilm('CastleintheSky');
      const film1Title = film1.title;
      expect(film1Title).toBe('Castle in the Sky');
    });
  });
  describe('When fetchFilm fails to get a film', () => {
    test('Film is null when not in the database', async () => {
      const film1 = await fetchFilm('Alice in Wonderland');
      expect(film1).toBe(null);
      const film2 = await fetchFilm('Castle in the Big Sky');
      expect(film2).toBe(null);
    });
  });
});
