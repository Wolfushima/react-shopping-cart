import React from 'react';
import {
  render, screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import Cart from '../../../routes/shop/Cart';
import { CartContext } from '../../../utils/CartContext';

const item = {
  edition: 'collectorsEdition',
  filmImage: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg',
  filmTitle: 'Spirited Away',
  id: 'SpiritedAwaycollectorsEdition',
  priceTotal: 29.95,
  quantity: 1,
};

describe('Cart', () => {
  test('Should render Your Cart Is Empty if currentCart is empty', () => {
    render(
      <CartContext.Provider value={{ currentCart: [] }}>
        <Cart />
      </CartContext.Provider>,
      { wrapper: MemoryRouter },
    );

    expect(screen.getByText('Your Cart Is Empty')).toBeInTheDocument();
  });

  test('Should render PROCEED TO CHECKOUT link and ESTIMATED TOTAL if currentCart contains items', () => {
    render(
      <CartContext.Provider value={{ currentCart: [item] }}>
        <Cart />
      </CartContext.Provider>,
      { wrapper: MemoryRouter },
    );

    expect(screen.getByRole('link', { name: /PROCEED TO CHECKOUT/i })).toBeInTheDocument();
    expect(screen.getByText('ESTIMATED TOTAL')).toBeInTheDocument();
  });
});
