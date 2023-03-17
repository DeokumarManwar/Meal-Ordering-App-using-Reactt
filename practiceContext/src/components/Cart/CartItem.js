import { useContext } from "react";
import classes from "./CartItem.module.css";
import AuthContext from "../../store/auth-context";

const CartItem = (props) => {
  const ctx = useContext(AuthContext);
  const { id, title, quantity, total, price, description } = props;
  // console.log(id, title, quantity, total, price);
  const addCartHandler = () => {
    // console.log(id, title, price, description);
    ctx.addItem({ id, title, price, description, quantity });
  };

  const removeCartHandler = () => {
    ctx.removeItem(id);
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeCartHandler}>-</button>
          <button onClick={addCartHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
