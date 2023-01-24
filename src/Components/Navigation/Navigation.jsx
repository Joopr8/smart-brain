import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={classes.navbar}>
      <p className={classes.signOut}> Sign Out</p>
    </nav>
  );
};

export default Navigation;
