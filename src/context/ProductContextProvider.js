import React, { useState } from "react";

export const productContext = React.createContext();

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  return (
    <productContext.Provider value={{ products, setProducts }}>
      {children}
    </productContext.Provider>
  );
};
