import { Fragment, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/auth";
import classes from "./Auth.module.css";

const Auth = () => {
  const [errorEmailMessage, seterrorEmailMessage] = useState(false);
  const [errorPasswordMessage, seterrorPasswordMessage] = useState(false);
  const email = useRef();
  const password = useRef();
  const dispatch = useDispatch();
  const show = useSelector((state) => state.Auth.isAuthenticated);
  const emailvalid = useSelector((state) => state.Auth.emailIsValid);
  const passwordvalid = useSelector((state) => state.Auth.passwordIsValid);
  // console.log(show, 1);

  const emailHandler = () => {
    if (email.current.value.toLowerCase().includes("@")) {
      seterrorEmailMessage(false);
      dispatch(authActions.emailIsValid());
    } else {
      seterrorEmailMessage(true);
    }
  };

  const passwordHandler = () => {
    if (password.current.value.toLowerCase().includes("1")) {
      seterrorPasswordMessage(false);
      dispatch(authActions.passwordIsValid());
    } else {
      seterrorPasswordMessage(true);
    }
  };

  console.log(emailvalid, passwordvalid);
  const submitHandler = (event) => {
    event.preventDefault();
    if (emailvalid && passwordvalid) {
      dispatch(authActions.login());
      dispatch(authActions.makeEmailInvalid());
      dispatch(authActions.makePasswordInvalid());
    }
  };

  return (
    <Fragment>
      {!show && (
        <main className={classes.auth}>
          <section>
            <form onSubmit={submitHandler}>
              <div className={classes.control}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  ref={email}
                  onBlur={emailHandler}
                />
                {errorEmailMessage && <p>Please Enter the valid E-Mail</p>}
              </div>
              <div className={classes.control}>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  ref={password}
                  onBlur={passwordHandler}
                />
                {errorPasswordMessage && <p>Please Enter the valid Password</p>}
              </div>
              <button>Login</button>
            </form>
          </section>
        </main>
      )}
    </Fragment>
  );
};

export default Auth;
