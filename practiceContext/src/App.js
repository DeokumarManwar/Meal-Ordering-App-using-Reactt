import { useState, useContext } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import AuthContext from "./store/auth-context";
import classes from "./App.module.css";

function App() {
  const Atx = useContext(AuthContext);
  const [showCart, setShowCart] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState(false);

  const cartStatusHandler = () => {
    if (Atx.totalQuantity !== 0) {
      setErrorMessage(false);
      setShowCart(!showCart);
    } else setErrorMessage(true);
  };
  return (
    <section className={classes.App}>
      <Layout onClick={cartStatusHandler}>
        {showCart && <Cart />}
        {ErrorMessage && <h6>Cart is Empty</h6>}
        <Products />
      </Layout>
    </section>
  );
}

export default App;
