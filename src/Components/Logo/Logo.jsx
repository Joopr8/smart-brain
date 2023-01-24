import { Fragment } from "react";
import Tilt from "react-parallax-tilt";
import brain from "./brain.png";
import classes from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={classes.container}>
      <Tilt
        className={classes.tilt}
        glareMaxOpacity={0.8}
        glareColor="white"
        glarePosition="bottom"
      >
        <img className={classes.tiltImage} src={brain} alt="brain" />
      </Tilt>
    </div>
  );
};

export default Logo;
