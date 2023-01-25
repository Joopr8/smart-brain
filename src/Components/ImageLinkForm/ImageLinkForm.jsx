import { Fragment } from "react";
import classes from "./ImageLinkForm.module.css";

const ImageLinkForm = ({ onInputChange, onSubmitHandler }) => {
  return (
    <Fragment>
      <div className={classes.form}>
        <input type="text" onChange={onInputChange} />
        <button onClick={onSubmitHandler}>Detect</button>
      </div>
    </Fragment>
  );
};

export default ImageLinkForm;
