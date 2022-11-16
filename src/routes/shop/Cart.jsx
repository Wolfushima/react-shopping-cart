import React, { useEffect, useState } from 'react';
import { useCart } from '../../utils/CartContext';
import CartHeader from '../../components/cart/CartHeader';
import CartItems from '../../components/cart/CartItems';
import CartFooter from '../../components/cart/CartFooter';

const Cart = () => {
  const { currentCart, setCurrentCart } = useCart();
  const [isCartEmpty, setIsCartEmpty] = useState(true);

  useEffect(() => {
    if (currentCart.length > 0) setIsCartEmpty(false);
    if (currentCart.length === 0) setIsCartEmpty(true);
  }, [currentCart]);

  return (
    <div id="cart" className="cart">
      <header className="cart__topheader">YOUR CART</header>
      <div className="cart__wrapper">
        <div className="cart__container">
          <CartHeader
            currentCart={currentCart}
            isCartEmpty={isCartEmpty}
          />
          <CartItems
            currentCart={currentCart}
            setCurrentCart={setCurrentCart}
          />
          <CartFooter />
        </div>
        <div className="cart__legal" />
      </div>
    </div>
  );
};

export default Cart;
