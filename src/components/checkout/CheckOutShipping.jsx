import React from 'react';

const CheckOutShipping = () => (
  <div className="checkout__shipping">
    <h3>SHIPPING</h3>
    <div className="checkout__h4">
      <h4>Email Address</h4>
    </div>
    <div className="checkout__email">
      <input type="email" placeholder="Email" name="shipping[email]" />
    </div>
    <div className="checkout__h4">
      <h4>Shipping Address</h4>
    </div>
    <div className="checkout__firstname">
      <input type="text" placeholder="First Name" name="shipping[firstname]" />
    </div>
    <div className="checkout__lastname">
      <input type="text" placeholder="Last Name" name="shipping[lastname]" />
    </div>
    <div className="checkout__phone">
      <input type="tel" placeholder="Phone Number" name="shipping[phone]" />
    </div>
    <div className="checkout__address">
      <input type="text" placeholder="Address" name="shipping[address]" />
    </div>
    <div className="checkout__address2">
      <input type="text" placeholder="Address 2" name="shipping[address2]" />
    </div>
    <div className="checkout__city">
      <input type="text" placeholder="City" name="shipping[city]" />
    </div>
    <div className="checkout__state">
      <select id="shipping-state" name="shipping[state]">
        <option value="Select State" selected>Select State</option>
        <option value="Alabama">Alabama</option>
        <option value="Alaska">Alaska</option>
        <option value="Arizona">Arizona</option>
        <option value="Arkansas">Arkansas</option>
        <option value="California">California</option>
        <option value="Colorado">Colorado</option>
        <option value="Connecticut">Connecticut</option>
        <option value="Delaware">Delaware</option>
        <option value="District of Columbia">District of Columbia</option>
        <option value="Florida">Florida</option>
        <option value="Georgia">Georgia</option>
        <option value="Guam">Guam</option>
        <option value="Hawaii">Hawaii</option>
        <option value="Idaho">Idaho</option>
        <option value="Illinois">Illinois</option>
        <option value="Indiana">Indiana</option>
        <option value="Iowa">Iowa</option>
        <option value="Kansas">Kansas</option>
        <option value="Kentucky">Kentucky</option>
        <option value="Louisiana">Louisiana</option>
        <option value="Maine">Maine</option>
        <option value="Maryland">Maryland</option>
        <option value="Massachusetts">Massachusetts</option>
        <option value="Michigan">Michigan</option>
        <option value="Minnesota">Minnesota</option>
        <option value="Mississippi">Mississippi</option>
        <option value="Missouri">Missouri</option>
        <option value="Montana">Montana</option>
        <option value="Nebraska">Nebraska</option>
        <option value="Nevada">Nevada</option>
        <option value="New Hampshire">New Hampshire</option>
        <option value="New Jersey">New Jersey</option>
        <option value="New Mexico">New Mexico</option>
        <option value="New York">New York</option>
        <option value="North Carolina">North Carolina</option>
        <option value="North Dakota">North Dakota</option>
        <option value="Northern Marianas Islands">Northern Marianas Islands</option>
        <option value="Ohio">Ohio</option>
        <option value="Oklahoma">Oklahoma</option>
        <option value="Oregon">Oregon</option>
        <option value="Pennsylvania">Pennsylvania</option>
        <option value="Puerto Rico">Puerto Rico</option>
        <option value="Rhode Island">Rhode Island</option>
        <option value="South Carolina">South Carolina</option>
        <option value="South Dakota">South Dakota</option>
        <option value="Tennessee">Tennessee</option>
        <option value="Texas">Texas</option>
        <option value="Utah">Utah</option>
        <option value="Vermont">Vermont</option>
        <option value="Virginia">Virginia</option>
        <option value="Virgin Islands">Virgin Islands</option>
        <option value="Washington">Washington</option>
        <option value="West Virginia">West Virginia</option>
        <option value="Wisconsin">Wisconsin</option>
        <option value="Wyoming">Wyoming</option>
      </select>
    </div>
    <div className="checkout__zipcode">
      <input type="text" placeholder="Zip Code" name="shipping[zipcode]" />
    </div>
    <div className="checkout__country">
      <select name="shipping[country]" id="shipping-country">
        <option value="US" selected>United States</option>
        <option value="CA">Canada</option>
      </select>
    </div>
    <div className="checkout__shipping-method">
      <fieldset>
        <legend>Shipping Method</legend>
        <label htmlFor="shipping-standard">
          <input type="radio" id="shipping-standard" name="shipping[standard]" />
          Standard: FREE
        </label>
        <label htmlFor="shipping-twoday">
          <input type="radio" id="shipping-twoday" name="shipping[twoday]" />
          2-day: $12.99
        </label>
      </fieldset>

    </div>
  </div>
);

export default CheckOutShipping;
