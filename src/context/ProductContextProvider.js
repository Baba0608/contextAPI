import React, { useState } from "react";

const arr = [
  {
    productName: "Levi",
    description: "100 % Cotton",
    price: 1200,
    small: 20,
    medium: 35,
    large: 30,
  },
  {
    productName: "Nike",
    description: "Sports T-Shirt",
    price: 800,
    small: 15,
    medium: 23,
    large: 20,
  },
];

export const productContext = React.createContext();

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState(arr);
  return (
    <productContext.Provider value={{ products, setProducts }}>
      {children}
    </productContext.Provider>
  );
};
