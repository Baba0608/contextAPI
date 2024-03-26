import { useContext, useState } from "react";
import { productContext } from "../../context/ProductContextProvider";

export const ProductInput = () => {
  const { products, setProducts } = useContext(productContext);
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [small, setSmall] = useState(0);
  const [medium, setMedium] = useState(0);
  const [large, setLarge] = useState(0);
  return (
    <div className="flex bg-gray-400 px-10 py-4 rounded-xl">
      <div className="mx-1">
        <label htmlFor="prod-name">Name</label> <br />
        <input
          onChange={(e) => {
            setProductName(e.target.value);
          }}
          type="text"
          id="prod-name"
          placeholder="Product name..."
          value={productName}
        />
      </div>
      <div className="mx-1">
        <label htmlFor="description">Description</label> <br />
        <input
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          type="text"
          id="description"
          placeholder="Enter Description..."
          value={description}
        />
      </div>
      <div className="mx-1">
        <label htmlFor="price">Price</label> <br />
        <input
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          type="number"
          id="price"
          placeholder="Enter Price..."
          value={price}
        />
      </div>

      <div className="mx-1">
        <label htmlFor="small">Small</label> <br />
        <input
          onChange={(e) => {
            setSmall(e.target.value);
          }}
          type="number"
          id="small"
          placeholder="quantity..."
          className="w-20"
          value={small}
        />
      </div>

      <div className="mx-1">
        <label htmlFor="medium">Medium</label> <br />
        <input
          onChange={(e) => {
            setMedium(e.target.value);
          }}
          type="number"
          id="medium"
          placeholder="quantity..."
          className="w-20"
          value={medium}
        />
      </div>

      <div className="mx-1">
        <label htmlFor="large">Large</label> <br />
        <input
          onChange={(e) => {
            setLarge(e.target.value);
          }}
          type="number"
          id="large"
          placeholder="quantity..."
          className="w-20"
          value={large}
        />
      </div>

      <div className="flex items-end ml-5">
        <button
          className="bg-blue-300 px-4 py-1 rounded-lg hover:bg-blue-400 hover:shadow-md"
          onClick={() => {
            setProducts([
              ...products,
              {
                productName: productName,
                description: description,
                price: price,
                small: small,
                medium: medium,
                large: large,
              },
            ]);

            setProductName("");
            setDescription("");
            setPrice("");
            setSmall(0);
            setMedium(0);
            setLarge(0);
          }}
        >
          Add Product
        </button>
      </div>
    </div>
  );
};
