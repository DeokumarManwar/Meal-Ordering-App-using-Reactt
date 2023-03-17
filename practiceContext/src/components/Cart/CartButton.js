import { useContext } from "react";
import AuthContext from "../../store/auth-context";
import classes from "./CartButton.module.css";
const CartButton = (props) => {
  const ctx = useContext(AuthContext);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span>My Cart</span>
      <span className={classes.badge}>{ctx.totalQuantity}</span>
    </button>
  );
};

export default CartButton;
