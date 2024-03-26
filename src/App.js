import ReactDOM from "react-dom/client";
import { Home } from "./components/Home";
import { CartContextProvider } from "./context/CartContextProvider";
import { useState } from "react";

const App = () => {
  const [openCart, setOpenCart] = useState(false);

  function cartHandler() {
    setOpenCart(!openCart);
  }
  return (
    <CartContextProvider>
      <Home cartHandler={cartHandler} openCart={openCart} />
    </CartContextProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
