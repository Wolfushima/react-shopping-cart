import React from 'react';
import americanExpress from '../../assets/images/checkout/american-express.png';
import masterCard from '../../assets/images/checkout/master-card.png';
import visa from '../../assets/images/checkout/visa.png';

const CheckOutBilling = () => (
  <div className="checkout__billing">
    <h3>BILLING</h3>
    <div className="checkout__addressmsg">
      <h4>Billing Address</h4>
      <label htmlFor="billing-addressmsg">
        <input type="checkbox" id="billing-addressmsg" name="billing[addressmsg]" />
        Same as shipping address
      </label>
    </div>
    <div className="checkout__card-info">
      <fieldset>
        <legend>Card Info</legend>
        <div className="checkout__payment-options">
          <p>Pay with card</p>
          <img src={americanExpress} alt="" />
          <img src={visa} alt="" />
          <img src={masterCard} alt="" />
        </div>
        <div className="checkout__cardnumber">
          <label htmlFor="billing-cardnumber">
            <span>Card Number</span>
            <input
              type="text"
              placeholder="&#9679;&#9679;&#9679;&#9679; &#9679;&#9679;&#9679;&#9679; &#9679;&#9679;&#9679;&#9679; &#9679;&#9679;&#9679;&#9679;"
              name="billing[cardnumber]"
              id="checkout-cardnumber"
            />
          </label>
        </div>
        <div className="checkout__expirationdate">
          <label htmlFor="billing-expirationdate">
            <span>Expiration Date</span>
            <input type="text" placeholder="MM/YY" name="billing[expirationdate]" id="checkout-expirationdate" />
          </label>
        </div>
        <div className="checkout__cvv">
          <label htmlFor="billing-cvv">
            <span>CVV (3 digits)</span>
            <input type="text" placeholder="&#9679;&#9679;&#9679;" name="billing[cvv]" id="checkout-cvv" />
          </label>
        </div>
        <div className="checkout__postalcode">
          <label htmlFor="checkout-postalcode">
            <span>Postal Code</span>
            <input type="text" placeholder="" name="billing[postalcode]" id="checkout-postalcode" />
          </label>
        </div>
      </fieldset>
    </div>
  </div>
);

export default CheckOutBilling;
