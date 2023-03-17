import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthenticated: false,
  emailIsValid: false,
  passwordIsValid: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
    emailIsValid(state) {
      state.emailIsValid = true;
    },
    makeEmailInvalid(state) {
      state.emailIsValid = false;
    },
    passwordIsValid(state) {
      state.passwordIsValid = true;
    },
    makePasswordInvalid(state) {
      state.passwordIsValid = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
