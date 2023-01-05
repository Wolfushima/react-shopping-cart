import React from 'react';
import { Link } from 'react-router-dom';
import confirmationImg from '../../assets/images/confirmation/confirmation.jpg';

const Confirmation = () => (
  <div id="confirmation" className="confirmation">
    <div className="confirmation__wrapper">
      <div className="confirmation__container">
        <header className="confirmation__topheader">
          <h1>THANK YOU.</h1>
          <p>Your order was completed succesfully.</p>
          <img src={confirmationImg} alt="Castle in the Sky" />
        </header>
        <div className="confirmation__content">
          <div className="confirmation__line" />
          <p>
            Having Trouble?
            {' '}
            <Link to="/contact" className="confirmation__contactus">
              Contact Us
            </Link>
          </p>
          <Link to="/shop" className="confirmation__continue-shopping">
            CONTINUE SHOPPING
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Confirmation;
