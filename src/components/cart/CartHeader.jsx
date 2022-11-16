import React from 'react';

const CartHeader = ({ currentCart, isCartEmpty }) => (
  <div className="cart__header">
    <p className="cart__count">
      {currentCart.length}
      {' '}
      items
    </p>
    {!isCartEmpty && (
      <p className="cart__shippingmsg">
        Your order qualifies for free shipping**
      </p>
    )}
  </div>
);

export default CartHeader;
