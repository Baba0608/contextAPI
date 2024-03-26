import { useContext, useState } from "react";
import { cartContext } from "../../context/CartContextProvider";

export const CartCard = ({ item }) => {
  const { productName, price, small, medium, large } = item;

  return (
    <div className="flex justify-between items-center border-b border-red-400">
      <div className="mb-2">
        <div>{productName}</div>

        <div className="flex w-28 justify-between">
          <p className="text-orange-400">{price} /-</p>
          <p className="border border-gray-400 rounded-md px-1">
            small X {small}
          </p>
          <p className="border border-gray-400 rounded-md px-1">
            medium X {medium}
          </p>
          <p className="border border-gray-400 rounded-md px-1">
            large X {large}
          </p>
        </div>
      </div>
    </div>
  );
};
