import { createSlice } from "@reduxjs/toolkit";

const initualCartState = { view: false, quantity: 0, Notification: null };
const cartSlice = createSlice({
  name: "cart",
  initialState: initualCartState,
  reducers: {
    viewCart(state) {
      state.view = !state.view;
    },
    addQuantity(state) {
      state.quantity++;
    },
    revomeQuantity(state) {
      state.quantity = 0;
    },
    showNotification(state, action) {
      state.Notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});
export const btnActions = cartSlice.actions;
export default cartSlice.reducer;
