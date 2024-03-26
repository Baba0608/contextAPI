import { useContext, useState } from "react";
import { cartContext } from "../../context/CartContextProvider";

export const CartCard = ({ item }) => {
  const { productName, price, small, medium, large } = item;

  return (
    <div className="border-b border-red-400 mb-2">
      <div className="flex">
        <div className="mx-2">{productName}</div>
        <div className="text-orange-400 text-xl font-bold mx-2">{price} /-</div>
      </div>

      <div className="flex flex-col">
        <div className="font-bold">
          Small <span className="font-normal">x </span>
          {small}
        </div>
        <div className="font-bold">
          Medium <span className="font-normal">x </span>
          {medium}
        </div>
        <div className="font-bold">
          Large <span className="font-normal">x </span>
          {large}
        </div>
      </div>
    </div>
  );
};

{
  /* <p className="border border-gray-400 rounded-md px-1">
            small X {small}
          </p>
          <p className="border border-gray-400 rounded-md px-1">
            medium X {medium}
          </p>
          <p className="border border-gray-400 rounded-md px-1">
            large X {large}
          </p> */
}
