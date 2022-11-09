import React, {
  useState, useContext, createContext, useEffect,
} from 'react';

export const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [currentCart, setCurrentCart] = useState([]);

  useEffect(() => {
    console.log(currentCart);
  }, [currentCart]);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <CartContext.Provider value={{ currentCart, setCurrentCart }}>
      {children}
    </CartContext.Provider>
  );
}
