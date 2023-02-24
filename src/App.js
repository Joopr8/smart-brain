import "./App.css";
import ImageLinkForm from "./Components/ImageLinkForm/ImageLinkForm";
import Logo from "./Components/Logo/Logo";
import Navigation from "./Components/Navigation/Navigation";
import Rank from "./Components/Rank/Rank";
import ParticlesBg from "particles-bg";
import { useState } from "react";
import ImageRecognition from "./Components/ImageRecognition/ImageRecognition";
import SignIn from "./Components/SignIn/SignIn";
import Register from "./Components/Register/Register";

const USER_ID = "28zjfqds9zvu";
// Your PAT (Personal Access Token) can be found in the portal under Authentification
const PAT = "24b3eaf623594a1f8448dd6bbbf8336e";
const APP_ID = "face-detection";
// Change this to whatever image input you want to add
const MODEL_ID = "face-detection";
const IMAGE_URL =
  "";

function App() {
  const [Input, setInput] = useState(IMAGE_URL);
  const [FaceBox, setFaceBox] = useState({});
  const [UserStatus, setUserStatus] = useState("SIGN-OUT");

  const calculateFaceLocation = (BoxData) => {
    const clarifaiFace = JSON.parse(BoxData, null, 2).outputs[0].data.regions[0]
      .region_info.bounding_box;
    const image = document.getElementById("inputImage");
    const imgWidth = image.width;
    const imgHeight = image.height;
    return {
      leftCol: clarifaiFace.left_col * imgWidth,
      topRow: clarifaiFace.top_row * imgHeight,
      rightCol: imgWidth - clarifaiFace.right_col * imgWidth,
      bottRow: imgHeight - clarifaiFace.bottom_row * imgHeight,
    };
  };

  const displayFaceBox = (box) => {
    setFaceBox(box);
  };

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const onSubmitHandler = (e) => {
    const raw = JSON.stringify({
      user_app_id: {
        user_id: USER_ID,
        app_id: APP_ID, 
      },
      inputs: [
        {
          data: {
            image: {
              url: Input,
            },
          },
        },
      ],
    });

    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Key " + PAT,
      },
      body: raw,
    };

    fetch(
      `https://api.clarifai.com/v2/models/${MODEL_ID}/outputs`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => displayFaceBox(calculateFaceLocation(result)))
      .catch((error) => console.log("error", error));
  };

  const onRouteChange = (status) => {
    setUserStatus(status);
  }
  
  return (
    <div className="App">
      <ParticlesBg type="cobweb" bg={true} color="#ffffff" num={130} />
      {UserStatus === "SIGN-OUT" 
      ? <SignIn onRouteChange={onRouteChange}/> 
      : UserStatus === "SIGN-IN" ?
      <div>
          <Navigation onRouteChange={onRouteChange}/>
          <Logo />
          <Rank /> 
          <ImageLinkForm onInputChange={onInputChange} onSubmitHandler={onSubmitHandler} InputValue={Input}/>
          <ImageRecognition box={FaceBox} imageLink={Input} />
      </div> 
      : UserStatus === "REGISTER" ?  
      <Register onRouteChange={onRouteChange}/> : false
      }
    </div>
  );
}

export default App;
