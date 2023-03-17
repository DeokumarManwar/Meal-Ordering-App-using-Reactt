import classes from "./UserProfile.module.css";
import { useSelector } from "react-redux";
import { Fragment } from "react";

const UserProfile = () => {
  const show = useSelector((state) => state.Auth.isAuthenticated);
  return (
    <Fragment>
      {show && (
        <main className={classes.profile}>
          {" "}
          <h2>My User Profile</h2>
        </main>
      )}
    </Fragment>
  );
};

export default UserProfile;
