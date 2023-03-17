import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart";
import cartSlice from "./cart-slice";

const store = configureStore({
  reducer: { ui: cartReducer, cart: cartSlice.reducer },
});

export default store;
