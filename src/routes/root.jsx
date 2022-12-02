import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/rootheader/Header';
import { CartProvider } from '../utils/CartContext';
import Footer from '../components/rootfooter/Footer';

export default function Root() {
  return (
    <CartProvider>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </CartProvider>
  );
}
