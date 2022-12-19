/* eslint-disable quotes */
import React, { useEffect, useState } from 'react';
import addToCardIcon from '../../assets/images/add-to-cart.png';
import searchIcon from '../../assets/images/search.png';
import { useCart } from '../../utils/CartContext';

const HeaderControls = ({
  className, handleClickSearch, handleClickHamburger, isSearchBarExpanded, handleClickCart,
}) => {
  const { currentCart } = useCart();
  const [hasItems, setHasItems] = useState(false);

  useEffect(() => {
    if (currentCart.length > 0) {
      setHasItems(() => true);
    } else setHasItems(() => false);
  }, [currentCart]);

  return (
    <div className={className}>
      <button
        className={isSearchBarExpanded ? "header-controls__search expanded" : "header-controls__search"}
        onClick={handleClickSearch}
        type="button"
      >
        <div className="icon-container">
          <img className="icon icon-search" src={searchIcon} alt="Search Icon" />
        </div>
      </button>
      <button
        type="button"
        className={hasItems ? "header-controls__cart hasitems" : "header-controls__cart"}
        onClick={handleClickCart}
      >
        <div className="icon-container">
          <img className="icon icon-cart" src={addToCardIcon} alt="Cart Icon" />
        </div>
      </button>
      <button
        className="header-controls__nav"
        type="button"
        onClick={handleClickHamburger}
      >
        <div className="hamburger-icon" id="icon">
          <div className="icon-1" id="a" />
          <div className="icon-2" id="b" />
          <div className="icon-3" id="c" />
        </div>
      </button>
    </div>
  );
};

export default HeaderControls;
