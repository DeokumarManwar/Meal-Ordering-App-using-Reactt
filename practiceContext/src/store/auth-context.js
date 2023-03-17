import React from "react";

const AuthContext = React.createContext({
  MyCart: [],
  totalQuantity: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default AuthContext;
