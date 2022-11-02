import React from 'react';

const ShopHeader = ({ children }) => (
  <header className="root-subheader">
    <div className="root-subheader__container">
      <h1 className="root-subheader__title">
        SHOP THE COLLECTION
      </h1>
      {children}
    </div>
  </header>
);

export default ShopHeader;
