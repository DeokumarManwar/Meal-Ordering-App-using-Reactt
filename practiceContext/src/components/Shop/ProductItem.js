import { useContext } from "react";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import AuthContext from "../../store/auth-context";

const ProductItem = (props) => {
  const ctx = useContext(AuthContext);
  const { id, title, price, description } = props;

  const addCartHandler = () => {
    // console.log(id, title, price, description);
    ctx.addItem({ id, title, price, description });
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
