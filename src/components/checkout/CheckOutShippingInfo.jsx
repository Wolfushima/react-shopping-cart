import React from 'react';
import { CheckOutUSStateOptions, CheckOutCAStateOptions } from './CheckOutStateOptions';

const CheckOutShippingInfo = ({
  formSection, handleChange, valueState, valueCountry,
}) => (
  <>
    <div className="checkout__h4">
      <h4>Email Address</h4>
    </div>
    <div className="checkout__email">
      <input
        type="email"
        placeholder="Email"
        name={`${formSection}[email]`}
        onChange={handleChange}
        id={`${formSection}_email_address`}
        required
      />
    </div>
    <div className="checkout__h4">
      <h4>
        {formSection}
        {' '}
        Address
      </h4>
    </div>
    <div className="checkout__firstname">
      <input
        type="text"
        placeholder="First Name"
        name={`${formSection}[firstname]`}
        onChange={handleChange}
        id={`${formSection}_first_name`}
        required
      />
    </div>
    <div className="checkout__lastname">
      <input
        type="text"
        placeholder="Last Name"
        name={`${formSection}[lastname]`}
        onChange={handleChange}
        id={`${formSection}_last_name`}
        required
      />
    </div>
    <div className="checkout__phone">
      <input
        type="tel"
        placeholder="Phone Number"
        name={`${formSection}[phone]`}
        onChange={handleChange}
        id={`${formSection}_phone_number`}
        pattern="[0-9]+"
        required
      />
    </div>
    <div className="checkout__address">
      <input
        type="text"
        placeholder="Address"
        name={`${formSection}[address]`}
        onChange={handleChange}
        id={`${formSection}_address`}
        required
      />
    </div>
    <div className="checkout__address2">
      <input
        type="text"
        placeholder="Address 2"
        name={`${formSection}[address2]`}
        onChange={handleChange}
        id={`${formSection}_address_2`}
        required
      />
    </div>
    <div className="checkout__city">
      <input
        type="text"
        placeholder="City"
        name={`${formSection}[city]`}
        onChange={handleChange}
        id={`${formSection}_city`}
        required
      />
    </div>
    <div className="checkout__state">
      <select
        id={`${formSection}_state`}
        name={`${formSection}[state]`}
        onChange={handleChange}
        value={valueState}
        required
      >
        {valueCountry === 'US' ? <CheckOutUSStateOptions /> : <CheckOutCAStateOptions />}
      </select>
    </div>
    <div className="checkout__zipcode">
      <input
        type="text"
        placeholder="Zip Code"
        name={`${formSection}[zipcode]`}
        onChange={handleChange}
        id={`${formSection}_zip_code`}
        pattern="[0-9]+"
        required
      />
    </div>
    <div className="checkout__country">
      <select
        name={`${formSection}[country]`}
        id={`${formSection}_country`}
        onChange={handleChange}
        value={valueCountry}
        required
      >
        <option value="US">United States</option>
        <option value="CA">Canada</option>
      </select>
    </div>
  </>
);

export default CheckOutShippingInfo;
