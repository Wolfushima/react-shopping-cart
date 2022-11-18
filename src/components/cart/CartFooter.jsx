import React from 'react';
import { Link } from 'react-router-dom';

const CartFooter = ({ currentCart }) => {
  const handleTotal = () => {
    const newCart = [...currentCart];
    // eslint-disable-next-line arrow-body-style
    const priceTotal = newCart.reduce((prev, curr) => {
      return prev + curr.priceTotal;
    }, 0);
    return priceTotal.toFixed(2);
  };
  return (
    <div className="cart__footer">
      <div className="cart__total">
        <div className="cart__subtotal">
          <dl>
            <dt>SUBTOTAL</dt>
            <dd>
              $
              {handleTotal()}
            </dd>
          </dl>
        </div>
        <div className="cart__shipping">
          <dl>
            <dt>SHIPPING</dt>
            <dd>FREE</dd>
          </dl>
        </div>
        <div className="cart__tax">
          <dl>
            <dt>TAX</dt>
            <dd>TBD</dd>
          </dl>
        </div>
        <div className="cart__discounts">
          <dl>
            <dt>CREDITS</dt>
            <dd>$0.00</dd>
          </dl>
        </div>
        <div className="cart__totals">
          <dl>
            <dt>ESTIMATED TOTAL</dt>
            <dd>
              $
              {handleTotal()}
            </dd>
          </dl>
        </div>
        <div className="cart__submit">
          <Link to="/shop/checkout">PROCEED TO CHECKOUT</Link>
          <Link to="/shop">CONTINUE SHOPPING</Link>
        </div>
      </div>
      <div className="help">
        <h3>NEED HELP?</h3>
        <p>
          You can reach our customer service department by e-mailing orders@fakestudioghibli.com or clicking below. Please note that order support e-mails are answered Monday to Friday during business hours Eastern time. We only ship our products within the United States and to Canada.
        </p>
        <div className="help__button">
          <Link to="#">CONTACT US</Link>
        </div>
      </div>
    </div>
  );
};

export default CartFooter;
