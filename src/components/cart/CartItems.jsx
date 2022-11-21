import React from 'react';

const CartItems = ({ currentCart, setCurrentCart }) => {
  const handleQuantity = (item, step) => {
    if (item.quantity === 1 && step === 'down') return;
    const pricePerItem = item.priceTotal.toFixed(2) / item.quantity.toFixed(2);
    const nextCurrentCart = currentCart.map((currentItem) => {
      if (currentItem === item && step === 'up') {
        const nextQuantity = currentItem.quantity + 1;
        const nextPriceTotal = nextQuantity * pricePerItem;
        return {
          ...currentItem,
          quantity: nextQuantity,
          priceTotal: nextPriceTotal,
        };
      }
      if (currentItem === item && step === 'down') {
        const nextQuantity = currentItem.quantity - 1;
        const nextPriceTotal = nextQuantity * pricePerItem;
        return {
          ...currentItem,
          quantity: nextQuantity,
          priceTotal: nextPriceTotal,
        };
      }
      return currentItem;
    });
    setCurrentCart(nextCurrentCart);
  };

  const handleEdition = (edition) => {
    if (edition === 'collectorsEdition') return 'Collectors Edition';
    if (edition === 'blurayEdition') return 'Blu-ray';
    return 'DVD';
  };

  return (
    <div className="cart__items">
      {currentCart.map((item) => (
        <div className="cart__item" key={item.id}>
          <div className="cart__item-description">
            <div className="cart__item-img">
              <img src={item.filmImage} alt={item.filmTitle} />
            </div>
            <div className="cart__item-info">
              <p>{item.filmTitle}</p>
              <p>{handleEdition(item.edition)}</p>
              <p>In Stock</p>
              <p>Ships withing 1-2 business days</p>
            </div>
          </div>
          <div className="cart__item-choices">
            <div className="cart__item-quantity">
              <p>Quantity:</p>
              <div className="quantityInput">
                <button
                  type="button"
                  onClick={() => handleQuantity(item, 'down')}
                >
                  -
                </button>
                <input type="number" name="quantityInput" value={item.quantity} readOnly />
                <button
                  type="button"
                  onClick={() => handleQuantity(item, 'up')}
                >
                  +
                </button>
              </div>
            </div>
            <div className="cart__item-remove">
              <button
                type="button"
                onClick={() => {
                  setCurrentCart(currentCart.filter((i) => i.id !== item.id));
                }}
              >
                Remove
              </button>
            </div>
            <div className="cart__item-price">
              <p>
                $
                {item.priceTotal.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItems;
