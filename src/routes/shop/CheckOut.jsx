import React, { useState, useEffect } from 'react';
import { useCart } from '../../utils/CartContext';
import CheckOutShipping from '../../components/checkout/CheckOutShipping';
import CheckOutBilling from '../../components/checkout/CheckOutBilling';
import CheckOutSummary from '../../components/checkout/CheckOutSummary';

const CheckOut = () => {
  const { currentCart } = useCart();
  const [guestConfirmationInfo, setGuestConfirmationInfo] = useState();
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [isSameAsShipping, setisSameAsShipping] = useState(true);
  const [shippingMethod, setShippingMethod] = useState('shipping-standard');
  const [subtotal, setSubtotal] = useState();
  const [total, setTotal] = useState();
  const [shipping, setShipping] = useState();
  const [shippingAddress, setShippingAddress] = useState({
    shipping_email_address: null,
    shipping_first_name: null,
    shipping_last_name: null,
    shipping_phone_number: null,
    shipping_address: null,
    shipping_address_2: null,
    shipping_city: null,
    shipping_state: '',
    shipping_zip_code: null,
    shipping_country: 'US',
  });
  const [billingAddress, setBillingAddress] = useState({
    billing_email_address: null,
    billing_first_name: null,
    billing_last_name: null,
    billing_phone_number: null,
    billing_address: null,
    billing_address_2: null,
    billing_city: null,
    billing_state: '',
    billing_zip_code: null,
    billing_country: 'US',
  });
  const [cardInfo, setCardInfo] = useState({
    card_number: null,
    card_expiration_date: null,
    card_cvv: null,
    card_postal_code: null,
  });

  const handleCheckBoxChange = () => {
    setisSameAsShipping(!isSameAsShipping);
  };

  const handleChangeShippingMethod = (e) => {
    setShippingMethod(() => e.target.id);
  };

  const handleChangeShippingAddress = (e) => {
    setShippingAddress({
      ...shippingAddress,
      [e.target.id]: e.target.value,
    });
  };

  const handleChangeBillingAddress = (e) => {
    setBillingAddress({
      ...billingAddress,
      [e.target.id]: e.target.value,
    });
  };

  const handleChangeCardInfo = (e) => {
    setCardInfo({
      ...cardInfo,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    if (isSameAsShipping) {
      const copyShippingAddress = { ...shippingAddress };
      const nextBillingAddress = Object.fromEntries(
        Object.entries(
          copyShippingAddress,
        ).map(([k, v]) => {
          if (k === 'shipping_email_address') return ['billing_email_address', v];
          if (k === 'shipping_first_name') return ['billing_first_name', v];
          if (k === 'shipping_last_name') return ['billing_last_name', v];
          if (k === 'shipping_phone_number') return ['billing_phone_number', v];
          if (k === 'shipping_address') return ['billing_address', v];
          if (k === 'shipping_address_2') return ['billing_address_2', v];
          if (k === 'shipping_city') return ['billing_city', v];
          if (k === 'shipping_state') return ['billing_state', v];
          if (k === 'shipping_zip_code') return ['billing_zip_code', v];
          return ['billing_country', v];
        }),
      );
      setBillingAddress(nextBillingAddress);
    }
    setIsOrderPlaced((prev) => !prev);
    e.preventDefault();
  };

  useEffect(() => {
    const newCart = [...currentCart];
    // eslint-disable-next-line arrow-body-style
    const priceTotal = newCart.reduce((prev, curr) => {
      return prev + curr.priceTotal;
    }, 0);
    setSubtotal(priceTotal);
    setTotal(priceTotal);
  }, []);

  useEffect(() => {
    if (shippingMethod === 'shipping-standard') {
      setShipping(0);
      return;
    }
    if (shippingMethod === 'shipping-twoday') {
      setShipping(12.99);
    }
  }, [shippingMethod]);

  useEffect(() => {
    if (shipping === 0) setTotal(subtotal);
    if (shipping === 12.99) setTotal((prev) => prev + 12.99);
  }, [shipping]);

  useEffect(() => {
    if (!isSameAsShipping) {
      setBillingAddress({
        billing_email_address: null,
        billing_first_name: null,
        billing_last_name: null,
        billing_phone_number: null,
        billing_address: null,
        billing_address_2: null,
        billing_city: null,
        billing_state: '',
        billing_zip_code: null,
        billing_country: 'US',
      });
    }
  }, [isSameAsShipping]);

  useEffect(() => {
    if (isOrderPlaced) {
      setGuestConfirmationInfo({
        SHIPPING_ADDRESS: { ...shippingAddress },
        BILLING_ADDRESS: { ...billingAddress },
        CARD_INFO: { ...cardInfo },
        CURRENT_CART: { ...currentCart },
      });
    }
  }, [isOrderPlaced]);

  return (
    <div id="checkout" className="checkout">
      <header className="checkout__topheader">CHECKOUT</header>
      <div className="checkout__wrapper">
        <div className="checkout__container">
          <form className="checkout__form" onSubmit={handleSubmit}>
            <CheckOutShipping
              valueShippingState={shippingAddress.shipping_state}
              valueShippingCountry={shippingAddress.shipping_country}
              shippingMethod={shippingMethod}
              handleChange={handleChangeShippingMethod}
              handleChangeShippingAddress={handleChangeShippingAddress}
            />
            <CheckOutBilling
              valueBillingState={billingAddress.billing_state}
              valueBillingCountry={billingAddress.billing_country}
              isSameAsShipping={isSameAsShipping}
              handleCheckBoxChange={handleCheckBoxChange}
              handleChangeBillingAddress={handleChangeBillingAddress}
              handleChangeCardInfo={handleChangeCardInfo}
            />
            <CheckOutSummary
              currentCart={currentCart}
              subtotal={subtotal}
              shipping={shipping}
              total={total}
            />
            <div className="checkout__footer" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
