import React from 'react';

const RadioBtn = ({
  id, value, labelName, checked, handleChange,
}) => (
  <div className="radioBtn">
    <input type="radio" id={id} name="version" value={value} checked={checked} onChange={handleChange} />
    <label htmlFor={id}>
      {labelName}
    </label>
  </div>
);

const FilmProductForm = ({
  priceTotal, quantity, edition, handleIncrease, handleDecrease, handleChange, handleSubmit,
}) => (
  <form onSubmit={handleSubmit}>
    <div className="priceTotal">{`$${priceTotal}`}</div>
    <div className="quantityInput">
      <button onClick={handleDecrease} type="button">-</button>
      <input type="number" name="quantityInput" value={quantity} readOnly />
      <button onClick={handleIncrease} type="button">+</button>
    </div>
    <RadioBtn
      id="collectorsEdition"
      labelName="COLLECTORS EDITION"
      value="100"
      handleChange={handleChange}
      checked={edition === 'collectorsEdition'}
    />
    <RadioBtn
      id="blurayEdition"
      labelName="BLURAY"
      value="200"
      handleChange={handleChange}
      checked={edition === 'blurayEdition'}
    />
    <RadioBtn
      id="dvdEdition"
      labelName="DVD"
      value="300"
      handleChange={handleChange}
      checked={edition === 'dvdEdition'}
    />
    <input type="submit" value="Add To Cart" />
  </form>
);

export default FilmProductForm;
