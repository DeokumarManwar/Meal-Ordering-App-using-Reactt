import { btnActions } from "./cart";
import { cartAction } from "./cart-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://practice-http-de3f6-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch cart data!!");
      }

      const data = await response.json();

      return data;
    };
    try {
      const cartData = await fetchData();
      dispatch(
        cartAction.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (error) {
      dispatch(
        btnActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed!!",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      btnActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://practice-http-de3f6-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };

    try {
      await sendRequest();
      dispatch(
        btnActions.showNotification({
          status: "success",
          title: "success!",
          message: "Sending cart data successfully!!",
        })
      );
    } catch (error) {
      dispatch(
        btnActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!!",
        })
      );
    }
  };
};
