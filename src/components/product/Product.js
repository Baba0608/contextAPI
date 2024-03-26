import { useContext } from "react";
import { cartContext } from "../../context/CartContextProvider";
import { productContext } from "../../context/ProductContextProvider";

export const Product = ({ prod }) => {
  const {
    quantity,
    setQuantity,
    cartItems,
    setCartItems,
    totalAmount,
    setTotalAmount,
  } = useContext(cartContext);
  const { products, setProducts } = useContext(productContext);
  const { productName, description, price, small, medium, large } = prod;

  function addProductToCart(type) {
    if (inCart()) {
      const updatedCartItems = cartItems.map((item) => {
        if (item.productName === productName) {
          item.small = type === "small" ? item.small + 1 : item.small;
          item.medium = type === "medium" ? item.medium + 1 : item.medium;
          item.large = type === "large" ? item.large + 1 : item.large;
          return item;
        }
        return item;
      });
      setCartItems(updatedCartItems);
    } else {
      setCartItems([
        ...cartItems,
        {
          productName: productName,
          price: price,
          small: type === "small" ? 1 : 0,
          medium: type === "medium" ? 1 : 0,
          large: type === "large" ? 1 : 0,
        },
      ]);
    }
    setTotalAmount(+totalAmount + +price);
  }

  function inCart() {
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].productName === productName) return true;
    }
    return false;
  }

  return (
    <tr className="text-lg">
      <td className="min-w-16 px-3 text-center py-3">{productName}</td>
      <td className="min-w-16 px-3 text-center max-w-[300px]">{description}</td>
      <td className="min-w-16 px-3 text-center">{price}</td>
      <td className="min-w-16 px-3 text-center">
        <button
          className="bg-blue-300 hover:bg-blue-400 px-4 py-1 rounded-lg"
          onClick={() => {
            if (small > 0) {
              setQuantity(quantity + 1);
              const updatedProducts = products.map((product) => {
                if (product.productName === productName) {
                  product.small = product.small - 1;
                  return product;
                }
                return product;
              });
              setProducts(updatedProducts);
              addProductToCart("small");
            }
          }}
        >
          Buy small ({small})
        </button>
      </td>
      <td className="min-w-16 px-3 text-center">
        <button
          className="bg-green-300 hover:bg-green-400 px-4 py-1 rounded-lg"
          onClick={() => {
            if (medium > 0) {
              setQuantity(quantity + 1);
              const updatedProducts = products.map((product) => {
                if (product.productName === productName) {
                  product.medium = product.medium - 1;
                  return product;
                }
                return product;
              });
              setProducts(updatedProducts);
              addProductToCart("medium");
            }
          }}
        >
          Buy medium ({medium})
        </button>
      </td>
      <td className="min-w-16 px-3 text-center">
        <button
          className="bg-orange-300 hover:bg-orange-400 px-4 py-1 rounded-lg"
          onClick={() => {
            if (large > 0) {
              setQuantity(quantity + 1);
              const updatedProducts = products.map((product) => {
                if (product.productName === productName) {
                  product.large = product.large - 1;
                  return product;
                }
                return product;
              });
              setProducts(updatedProducts);
              addProductToCart("large");
            }
          }}
        >
          Buy large ({large})
        </button>
      </td>
    </tr>
  );
};
