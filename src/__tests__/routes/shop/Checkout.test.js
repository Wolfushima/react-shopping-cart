import React from 'react';
import {
  render, screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import Checkout from '../../../routes/shop/CheckOut';
import { CartContext } from '../../../utils/CartContext';

const item = {
  edition: 'collectorsEdition',
  filmImage: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg',
  filmTitle: 'Spirited Away',
  id: 'SpiritedAwaycollectorsEdition',
  priceTotal: 29.95,
  quantity: 1,
};

describe('Checkout', () => {
  test('Should render Place Secure Order input if currentCart contains items', () => {
    render(
      <CartContext.Provider value={{ currentCart: [item] }}>
        <Checkout />
      </CartContext.Provider>,
      { wrapper: MemoryRouter },
    );
    screen.debug();
    expect(screen.getByDisplayValue('Place Secure Order')).toBeInTheDocument();
  });
});
