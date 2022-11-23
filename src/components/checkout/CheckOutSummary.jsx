import React from 'react';

const CheckOutSummary = ({
  currentCart, subtotal, total, shipping,
}) => {
  const handleEdition = (itemEdition) => {
    if (itemEdition === 'dvdEdition') return <span>[DVD]</span>;
    if (itemEdition === 'collectorsEdition') return <span>{'[COLLECTOR\'S EDITION]'}</span>;
    if (itemEdition === 'blurayEdition') return <span>[BLU-RAY]</span>;
    return 'ITEM EDITION MISSING';
  };

  return (
    <div className="checkout__summary">
      <h3>ORDER SUMMARY</h3>
      <table className="checkout__table">
        <thead>
          <tr>
            <th>QT</th>
            <th>ITEM</th>
            <th>COST</th>
          </tr>
        </thead>
        <tbody>
          {currentCart.map((item) => (
            <tr className="checkout__item">
              <td>{item.quantity}</td>
              <td>
                {handleEdition(item.edition)}
                {' '}
                {item.filmTitle}
              </td>
              <td>
                $
                {item.priceTotal.toFixed(2)}
              </td>
            </tr>
          ))}
          <tr className="checkout__table-totals first-totals">
            <td colSpan={2}>Sub-Total:</td>
            <td>
              $
              {subtotal && subtotal.toFixed(2)}
            </td>
          </tr>
          <tr className="checkout__table-totals">
            <td colSpan={2}>Tax:</td>
            <td>$0.00</td>
          </tr>
          <tr className="checkout__table-totals">
            <td colSpan={2}>Shipping:</td>
            <td>
              $
              {shipping && shipping.toFixed(2)}
            </td>
          </tr>
          <tr className="checkout__table-totals last-totals">
            <td colSpan={2}>Total:</td>
            <td>
              $
              {total && total.toFixed(2)}
            </td>
          </tr>
        </tbody>
      </table>
      <input type="submit" value="Place Secure Order" />
    </div>
  );
};

export default CheckOutSummary;
