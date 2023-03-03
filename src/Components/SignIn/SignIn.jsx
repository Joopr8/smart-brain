import classes from "./SignIn.module.css";

const SignIn = ({onRouteChange}) => {
  return (
    <div className={classes.container}>
      <form className={classes.formContainer}>
        <div className={classes.inputContainer}>
          <label htmlFor="email-address">Email</label>
          <input
            className={classes.inputForm}
            type="email"
            name="email-address"
            id="email-address"
          />
        </div>
        <div className={classes.inputContainer}>
          <label htmlFor="password">Password</label>
          <input
            className={classes.inputForm}
            type="password"
            name="password"
            id="password"
          />
        </div>
          <input className={classes.btn} onClick={() => onRouteChange("SIGN-IN")} type="button" value="Sign in" />
          <input className={classes.link} onClick={() => onRouteChange("REGISTER")} type="button" value="Register" />
      </form>
    </div>
  );
};

export default SignIn;
