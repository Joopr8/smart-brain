import classes from "../SignIn/SignIn.module.css"


const Register = ({onRouteChange}) => {
  
  return (
    <div>
      <form className={classes.formContainer}>
      <div className={classes.inputContainer}>
          <label htmlFor="email-address">Name</label>
          <input
            className={classes.inputForm}
            type="Name"
            name="name"
            id="name"
          />
        </div>
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
          <input className={classes.btn}  onClick={() => onRouteChange("SIGN-IN")} type="button" value="Register" />
          <input className={classes.link} onClick={() => onRouteChange("SIGN-OUT")} type="button" value="Sign In" />
      </form>
    </div>
  );
};

export default Register;
