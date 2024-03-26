import { useContext } from "react";
import { ProductContextProvider } from "../context/ProductContextProvider";
import { ProductContainer } from "./product/ProductContainer";
import { ProductInput } from "./product/ProductInput";
import { cartContext } from "../context/CartContextProvider";
import { Cart } from "./cart/Cart";

export const Home = ({ cartHandler, openCart }) => {
  const { quantity, setToggle, toggle } = useContext(cartContext);
  return (
    <ProductContextProvider>
      <div className="h-20 bg-red-900 flex justify-between items-center px-20">
        <div className="text-2xl text-white">T-Shirts</div>
        <div className="flex bg-red-700 px-5 py-2 text-lg rounded-xl text-white">
          <div
            className="px-2 mr-2 hover:cursor-pointer hover:underline"
            onClick={() => {
              cartHandler();
            }}
          >
            Cart
          </div>
          <div className="px-2 bg-red-900 rounded-lg">{quantity}</div>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <ProductInput />
      </div>

      <div className="flex justify-center mt-4">
        <ProductContainer />
      </div>

      <Cart openCart={openCart} cartHandler={cartHandler} />
    </ProductContextProvider>
  );
};
