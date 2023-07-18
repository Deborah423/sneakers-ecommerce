import React, { createContext, useState } from "react";

const CartContext = createContext();

function CartProvider(props = {}) {
  const [count, setCount] = useState(0);
  const [inCart, setInCart] = useState(0);
  const [isOpen, setOpen] = useState(false);

  function handleClearCart() {
    setInCart(0);
  }

  function toggleCart() {
    setOpen((p) => !p);
  }

  function appendCart() {
    setInCart((p) => p + count);
    setCount(0);
  }

  function deductCounter() {
    if (count) {
      setCount(count - 1);
    }
  }

  function incrementCounter() {
    setCount(count + 1);
  }

  return (
    <CartContext.Provider
      value={{
        count,
        incrementCounter,
        deductCounter,
        setCount,
        isOpen,
        toggleCart,
        inCart,
        appendCart,
        handleClearCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export { CartProvider };
export default CartContext;