import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import { CartProvider } from '../utils/CartContext';

export default function Root() {
  return (
    <CartProvider>
      <Header />
      <main>
        <Outlet />
      </main>
    </CartProvider>
  );
}
