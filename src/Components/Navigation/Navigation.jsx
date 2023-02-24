import classes from "./Navigation.module.css";

const Navigation = ({onRouteChange}) => {
  return (
    <nav className={classes.navbar}>
      <p className={classes.signOut} onClick={() => onRouteChange("SIGN-OUT")}> Sign Out</p>
    </nav>
  );
};

export default Navigation;
