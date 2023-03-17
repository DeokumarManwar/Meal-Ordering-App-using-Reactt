import React, { useContext } from "react";
import AuthContext from "../../store/auth-context";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const ctx = useContext(AuthContext);
  // console.log(ctx.MyCart);
  return (
    <React.Fragment>
      <Card className={classes.cart}>
        <h2>Your Shopping Cart</h2>
        <ul>
          {ctx.MyCart.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              title={item.title}
              quantity={item.quantity}
              total={item.total}
              price={item.price}
            />
          ))}
        </ul>
      </Card>
    </React.Fragment>
  );
  // return (
  // <AuthContext.Consumer>
  //   {(ctx) => {
  //     return (
  //       <React.Fragment>
  //         {ctx.showCart && (
  //           <Card className={classes.cart}>
  //             <h2>Your Shopping Cart</h2>
  //             <ul>
  //               <CartItem
  //                 item={{
  //                   title: "Test Item",
  //                   quantity: 3,
  //                   total: 18,
  //                   price: 6,
  //                 }}
  //               />
  //             </ul>
  //           </Card>
  //         )}
  //       </React.Fragment>
  //     );
  //   }}
  // </AuthContext.Consumer>
  // );
};

export default Cart;
