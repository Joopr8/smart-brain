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
      <div className={classes.title}>Please insert an image adress and try to detect some faces</div>
    </div>
  );
};

export default Logo;
