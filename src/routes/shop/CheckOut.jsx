import React from 'react';
import CheckOutShipping from '../../components/checkout/CheckOutShipping';
import CheckOutBilling from '../../components/checkout/CheckOutBilling';

const CheckOut = () => (
  <div id="checkout" className="checkout">
    <header className="checkout__topheader">CHECKOUT</header>
    <div className="checkout__wrapper">
      <div className="checkout__container">
        <form className="checkout__form">
          <CheckOutShipping />
          <CheckOutBilling />
          <div className="checkout__summary">
            <h3>ORDER SUMMARY</h3>
          </div>
          <div className="checkout__footer" />
        </form>
      </div>
    </div>
  </div>
);

export default CheckOut;
