import classes from "./ImageRecognition.module.css";
let stylesBox;

const ImageRecognition = ({ imageLink, box }) => {
  if (box.topRow !== undefined) {
    stylesBox = {
      border: "solid 0.3rem aqua",
      top: box.topRow,
      right: box.rightCol,
      bottom: box.bottRow,
      left: box.leftCol,
    };
  }

  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <span className={classes.boundingBox} style={stylesBox}></span>
        <img id="inputImage" src={imageLink} alt={imageLink} />
      </div>
    </div>
  );
};

export default ImageRecognition;
