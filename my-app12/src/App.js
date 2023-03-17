import { useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { sendCartData, fetchCartData } from "./components/store/cart-actions";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.Notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);
  useEffect(() => {
    // const sendCartData = async () => {
    // dispatch(
    //   btnActions.showNotification({
    //     status: "pending",
    //     title: "Sending...",
    //     message: "Sending cart data!!",
    //   })
    // );
    // const response = await fetch(
    //   "https://practice-http-de3f6-default-rtdb.firebaseio.com/cart.json",
    //   {
    //     method: "PUT",
    //     body: JSON.stringify(cart),
    //   }
    // );
    // if (!response.ok) {
    //   throw new Error("Sending cart data failed.");
    // }
    // const responseData = await response.json();
    // // console.log(responseData);
    // dispatch(
    //   btnActions.showNotification({
    //     status: "success",
    //     title: "success!",
    //     message: "Sending cart data successfully!!",
    //   })
    // );
    // };
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }

    // sendCartData().catch((error) => {
    // dispatch(
    //   btnActions.showNotification({
    //     status: "error",
    //     title: "Error!",
    //     message: "Sending cart data failed!!",
    //   })
    // );
    // });
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        <Cart />
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
