import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import AuthContextProvider from "./store/CartProvider";

ReactDOM.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>,
  document.getElementById("root")
);
