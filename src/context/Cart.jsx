import React, { createContext, useState } from 'react';

const CartContext = createContext();

function CartProvider(props = {}) {
    const [count, setCount] = useState(0);
    const [isOpen, setOpen] = useState(false);


    function toggleCart() {
      setOpen(p => !p);
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
        value={{ count, incrementCounter, deductCounter, setCount, isOpen, toggleCart }}
    >
      { props.children }
    </CartContext.Provider>
  )
}

export { CartProvider };
export default CartContext;

