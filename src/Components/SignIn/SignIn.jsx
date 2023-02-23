import classes from "./SignIn.module.css";

const SignIn = () => {
  return (
    <div>
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
        <div className={classes.btnContainer}>
          <input className={classes.btn} type="submit" value="Sign in" />
        </div>
      </form>
    </div>
  );
};

export default SignIn;
