import React from 'react';
import CheckOutShippingInfo from './CheckOutShippingInfo';

const CheckOutShipping = ({
  shippingMethod, handleChange, handleChangeShippingAddress, valueShippingState,
  valueShippingCountry,
}) => (
  <div className="checkout__shipping">
    <h3>SHIPPING</h3>
    <CheckOutShippingInfo
      formSection="shipping"
      handleChange={handleChangeShippingAddress}
      valueState={valueShippingState}
      valueCountry={valueShippingCountry}
    />
    <div className="checkout__shipping-method">
      <fieldset>
        <legend>Shipping Method</legend>
        <label htmlFor="shipping-standard">
          <input
            type="radio"
            id="shipping-standard"
            name="shipping[standard]"
            checked={shippingMethod === 'shipping-standard'}
            onChange={handleChange}
          />
          Standard: FREE
        </label>
        <label htmlFor="shipping-twoday">
          <input
            type="radio"
            id="shipping-twoday"
            name="shipping[twoday]"
            checked={shippingMethod === 'shipping-twoday'}
            onChange={handleChange}
          />
          2-day: $12.99
        </label>
      </fieldset>

    </div>
  </div>
);

export default CheckOutShipping;
