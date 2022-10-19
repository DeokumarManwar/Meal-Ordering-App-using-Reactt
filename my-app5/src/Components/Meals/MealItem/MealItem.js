import { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemfrom from "./MealItemfrom";
import CartContext from "../../../store/cart-context";
const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const addItemToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.discription}>{props.discription}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemfrom onAddToCart={addItemToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
