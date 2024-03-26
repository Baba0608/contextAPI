import React, { useState } from "react";

export const cartContext = React.createContext();

export const CartContextProvider = ({ children }) => {
  const [quantity, setQuantity] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  return (
    <cartContext.Provider
      value={{
        quantity,
        setQuantity,
        cartItems,
        setCartItems,
        totalAmount,
        setTotalAmount,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};
