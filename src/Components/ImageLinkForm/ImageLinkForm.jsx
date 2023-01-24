import { Fragment } from "react";
import classes from "./ImageLinkForm.module.css";

const ImageLinkForm = () => {
  return (
    <Fragment>
      <div className={classes.form}>
        <input type="text" />
        <button>Detect</button>
      </div>
    </Fragment>
  );
};

export default ImageLinkForm;
