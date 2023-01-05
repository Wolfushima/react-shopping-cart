import React from 'react';
import { Link } from 'react-router-dom';

const CartEmpty = () => (
  <div className="cart__emptymsg">
    <p>
      Your Cart Is Empty
    </p>
    <Link to="/shop">
      SHOP THE COLLECTION
    </Link>
  </div>
);

export default CartEmpty;
