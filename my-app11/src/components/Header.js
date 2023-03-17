import classes from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/auth";
const Header = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.Auth.isAuthenticated);
  const logoutHandler = () => {
    dispatch(authActions.logout());
  };
  const Header = (
    <ul>
      <li>
        <a href="/">My Products</a>
      </li>
      <li>
        <a href="/">My Sales</a>
      </li>
      <li>
        <button onClick={logoutHandler}>Logout</button>
      </li>
    </ul>
  );
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>{show && Header}</nav>
    </header>
  );
};

export default Header;
