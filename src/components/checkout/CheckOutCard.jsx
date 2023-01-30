import React from 'react';
import americanExpress from '../../assets/images/checkout/american-express.png';
import masterCard from '../../assets/images/checkout/master-card.png';
import visa from '../../assets/images/checkout/visa.png';

const CheckOutCard = ({ handleChange }) => (
  <div className="checkout__card-info">
    <fieldset>
      <legend>Card Info</legend>
      <div className="checkout__payment-options">
        <p>Pay with card</p>
        <img src={americanExpress} alt="American Express Logo" />
        <img src={visa} alt="Visa Logo" />
        <img src={masterCard} alt="Master Card Logo" />
      </div>
      <div className="checkout__cardnumber">
        <label htmlFor="billing-cardnumber">
          <span>Card Number (16 digits)</span>
          <input
            type="text"
            placeholder="&#9679;&#9679;&#9679;&#9679; &#9679;&#9679;&#9679;&#9679; &#9679;&#9679;&#9679;&#9679; &#9679;&#9679;&#9679;&#9679;"
            name="billing[cardnumber]"
            id="card_number"
            onChange={handleChange}
            pattern="[0-9]{16}"
          />
        </label>
      </div>
      <div className="checkout__expirationdate">
        <label htmlFor="billing-expirationdate">
          <span>Expiration Date (MM/YY)</span>
          <input
            type="text"
            placeholder="MM/YY"
            name="billing[expirationdate]"
            id="card_expiration_date"
            onChange={handleChange}
            pattern="\d{2}/\d{2}"
          />
        </label>
      </div>
      <div className="checkout__cvv">
        <label htmlFor="billing-cvv">
          <span>CVV (3 digits)</span>
          <input
            type="text"
            placeholder="&#9679;&#9679;&#9679;"
            name="billing[cvv]"
            id="card_cvv"
            onChange={handleChange}
            pattern="[0-9]{3}"
          />
        </label>
      </div>
      <div className="checkout__postalcode">
        <label htmlFor="checkout-postalcode">
          <span>Postal Code</span>
          <input
            type="text"
            placeholder=""
            name="billing[postalcode]"
            id="card_postal_code"
            onChange={handleChange}
            pattern="[0-9]+"
          />
        </label>
      </div>
    </fieldset>
  </div>
);
export default CheckOutCard;
