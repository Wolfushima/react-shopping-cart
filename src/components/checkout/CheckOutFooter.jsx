import React from 'react';

const CheckOutFooter = () => (
  <div className="checkout__footer">
    <label htmlFor="checkout-signupnews">
      <input
        type="checkbox"
        id="checkoutsignupnews"
        name="checkout[signupnews]"
      />
      Sign me up for The Studio Ghibli Newsletter for updates & special offers.
    </label>
  </div>
);

export default CheckOutFooter;
