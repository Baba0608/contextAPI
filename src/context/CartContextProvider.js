import React, { useState } from "react";

export const cartContext = React.createContext();

export const CartContextProvider = ({ children }) => {
  const [quantity, setQuantity] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [toggle, setToggle] = useState(false);

  return (
    <cartContext.Provider
      value={{
        quantity,
        setQuantity,
        cartItems,
        setCartItems,
        toggle,
        setToggle,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};
