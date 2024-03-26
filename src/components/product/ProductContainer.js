import { useContext } from "react";
import { Product } from "./Product";
import { productContext } from "../../context/ProductContextProvider";

const arr = [
  { id: 1, name: "Levi", description: "100 % Cotton", price: 1200 },
  {
    id: 2,
    name: "Levi",
    description: "100 % Cotton Thiusmhkl  kancjam XHNLGL Lkjhcnytloqi",
    price: 1200,
  },
  { id: 3, name: "Levi", description: "100 % Cotton", price: 1200 },
  { id: 4, name: "Levi", description: "100 % Cotton", price: 1200 },
];
export const ProductContainer = () => {
  const { products } = useContext(productContext);
  return (
    <>
      <table>
        <tr className="text-lg">
          <th className="min-w-16 px-3 text-center">Name</th>
          <th className="min-w-16 px-3 text-center">Description</th>
          <th className="min-w-16 px-3 text-center">Price</th>
          <th className="min-w-16 px-3 text-center">Small</th>
          <th className="min-w-16 px-3 text-center">Medium</th>
          <th className="min-w-16 px-3 text-center">Large</th>
        </tr>

        {products.map((prod) => (
          <Product key={prod.productName} prod={prod} />
        ))}
      </table>
    </>
  );
};
