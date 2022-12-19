import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const CartMsg = ({ currentCart, showCartMsg, hideCartMsg }) => {
  const duration = 500; // ms
  const delay = 100; // ms
  const animStr = (i) => `fadeIn ${duration}ms ease-out ${delay * i}ms forwards`;

  const handleEdition = (edition) => {
    if (edition === 'collectorsEdition') return 'Collectors Edition';
    if (edition === 'blurayEdition') return 'Blu-ray';
    return 'DVD';
  };

  const handleTotal = () => {
    const newCart = [...currentCart];
    // eslint-disable-next-line arrow-body-style
    const priceTotal = newCart.reduce((prev, curr) => {
      return prev + curr.priceTotal;
    }, 0);
    return priceTotal.toFixed(2);
  };

  const handleQuantity = () => {
    const newCart = [...currentCart];
    const quantityTotal = newCart.reduce((prev, curr) => prev + curr.quantity, 0);
    return quantityTotal;
  };

  useEffect(() => {
    if (showCartMsg) {
      document.querySelector('#root').addEventListener('click', hideCartMsg);
    }
    return () => {
      document.querySelector('#root').removeEventListener('click', hideCartMsg);
    };
  }, [showCartMsg]);

  return (
    <div id="cartmsg" className="cartmsg" style={{ animation: animStr(1) }}>
      <div className="cartmsg__container">
        <ul className="cartmsg__itemslist">
          {currentCart.map((item, index) => (
            <li key={index}>
              <div className="cartmsg__itemimg">
                <img src={item.filmImage} alt={item.filmTitle} />
              </div>
              <div className="cartmsg__itemdescription">
                <p>
                  {
                    item.quantity > 1
                      ? `(x${item.quantity}) ${item.filmTitle}`
                      : item.filmTitle
                  }
                </p>
                <p>{handleEdition(item.edition)}</p>
                <p>{item.priceTotal.toFixed(2)}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="cartmsg__total">
          <p className="cartmsg__totalitems">
            TOTAL
            {' '}
            <span>{`(${handleQuantity()} ITEMS)`}</span>
          </p>
          <p className="cartmsg__totalprice">{handleTotal()}</p>
        </div>
        <div className="cartmsg__actions">
          <Link to="/shop/cart">
            <p>VIEW CART</p>
          </Link>
          <Link to="/shop/checkout">
            <p>CHECKOUT</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartMsg;
