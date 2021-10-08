import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const LocalCartContext = createContext();
const LocalCartContextProvider = LocalCartContext.Provider;

export function CartStateProvider({ children }) {
  const [cartOpen, setCartOpen] = useState(false);

  function toggleCart() {
    setCartOpen(!cartOpen);
  }

  function openCart() {
    setCartOpen(true);
  }

  function closeCart() {
    setCartOpen(false);
  }

  return (
    <LocalCartContextProvider
      value={{ cartOpen, toggleCart, openCart, closeCart }}
    >
      {children}
    </LocalCartContextProvider>
  );
}

// Custom cart hook
export function useCart() {
  const cartContext = useContext(LocalCartContext);
  return cartContext;
}

CartStateProvider.propTypes = {
  children: PropTypes.any,
};
