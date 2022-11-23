import React from 'react';
import CheckOutShippingInfo from './CheckOutShippingInfo';
import CheckOutCard from './CheckOutCard';

const CheckOutBilling = ({
  isSameAsShipping, handleCheckBoxChange, valueBillingState, valueBillingCountry,
  handleChangeBillingAddress,
  handleChangeCardInfo,
}) => (
  <div className="checkout__billing">
    <h3>BILLING</h3>
    <div className="checkout__addressmsg">
      {isSameAsShipping ? <h4>Billing Address</h4> : null}
      <label htmlFor="billing-addressmsg">
        <input
          type="checkbox"
          id="billing-addressmsg"
          name="billing[addressmsg]"
          checked={isSameAsShipping}
          onChange={handleCheckBoxChange}
        />
        Same as shipping address
      </label>
    </div>
    {!isSameAsShipping
    && (
    <CheckOutShippingInfo
      formSection="billing"
      handleChange={handleChangeBillingAddress}
      valueState={valueBillingState}
      valueCountry={valueBillingCountry}
    />
    )}
    <CheckOutCard
      handleChange={handleChangeCardInfo}
    />
  </div>
);

export default CheckOutBilling;
