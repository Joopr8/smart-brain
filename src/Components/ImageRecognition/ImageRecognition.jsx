import classes from "./ImageRecognition.module.css";
let stylesBox;

const ImageRecognition = ({ imageLink, box, ImageError }) => {
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
      {
        ImageError === "FALSE" ? 
        (<div id="ImageContainer" className={classes.imageContainer}>
          <span className={classes.boundingBox} style={stylesBox}></span>
          <img id="inputImage" src={imageLink} alt={imageLink} />
        </div>)  
      : ImageError === "TRUE" ? 
      (<div className={classes.errorMessage}>This adress is not valid </div>)
      : false}
    </div>
  );
};

export default ImageRecognition;
