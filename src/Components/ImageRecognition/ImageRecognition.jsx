import classes from "./ImageRecognition.module.css";

const ImageRecognition = ({ imageLink }) => {
  return (
    <div className={classes.imageContainer}>
      <img src={imageLink} />
    </div>
  );
};

export default ImageRecognition;
