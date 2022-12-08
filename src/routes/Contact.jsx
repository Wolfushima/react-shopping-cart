/* eslint-disable max-len */
import React from 'react';
import contactImg from '../assets/images/contact/contactimg.png';

const Contact = () => (
  <div id="contact" className="contact">
    <div className="contact__wrapper">
      <div className="contact__container">
        <header className="contact__topheader">
          <p>The Studio Ghibli Collection</p>
          <h1>CONTACT US</h1>
          <img src={contactImg} alt="" />
        </header>
        <div className="contact__content">
          <p>
            <span className="first-letter">W</span>
            e love to hear from our customers. Please let us know of any questions, comments, or product issues you may have. Below are ways you can reach us.
          </p>
          <p>
            For questions about orders, please e-mail us at:
            {' '}
            <span>orders@fakeghibli.com</span>
          </p>
          <p>
            For questions about Studio Ghibli, please e-mail:
            {' '}
            <span>fakeghibli@fakeghibli.com</span>
          </p>
          <p>
            For press-related inquiries, please contact:
            {' '}
            <span>press@fakeghibli.com</span>
          </p>
          <p>Customer service is available from 9 a.m. to 5 p.m., Monday through Friday [Pacific Time]. </p>
          <p>Customer service is not available on weekends or major holidays.</p>
          <p>
            1234 Fake Ghibli Blv, Suite 123
            {' '}
            <br />
            Los Angeles, CA 12345
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
