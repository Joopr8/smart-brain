import "./App.css";
import ImageLinkForm from "./Components/ImageLinkForm/ImageLinkForm";
import Logo from "./Components/Logo/Logo";
import Navigation from "./Components/Navigation/Navigation";
import Rank from "./Components/Rank/Rank";
import ParticlesBg from "particles-bg";

function App() {
  return (
    <div className="App">
      <ParticlesBg type="cobweb" bg={true} color="#ffffff" num={130} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/* <FaceRecognition />  */}
    </div>
  );
}

export default App;
