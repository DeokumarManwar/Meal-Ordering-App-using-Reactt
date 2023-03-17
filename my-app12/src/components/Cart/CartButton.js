import { useSelector, useDispatch } from "react-redux";
import classes from "./CartButton.module.css";
import { btnActions } from "../store/cart";

const CartButton = (props) => {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const buttonHandler = () => {
    dispatch(btnActions.viewCart());
  };
  return (
    <button className={classes.button} onClick={buttonHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
