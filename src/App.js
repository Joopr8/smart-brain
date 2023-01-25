import "./App.css";
import ImageLinkForm from "./Components/ImageLinkForm/ImageLinkForm";
import Logo from "./Components/Logo/Logo";
import Navigation from "./Components/Navigation/Navigation";
import Rank from "./Components/Rank/Rank";
import ParticlesBg from "particles-bg";
import { useState } from "react";
import ImageRecognition from "./Components/ImageRecognition/ImageRecognition";

function App() {
  const [Input, setInput] = useState(
    "https://nationalgeographic.pt/images/revistas/artigos_edicoes_especiais/FACES-E-MUDANCA/FACES_LOGO.jpg"
  );

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const onSubmitHandler = (e) => {
    console.log("click");
  };

  return (
    <div className="App">
      <ParticlesBg type="cobweb" bg={true} color="#ffffff" num={130} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm
        onInputChange={onInputChange}
        onSubmitHandler={onSubmitHandler}
      />
      <ImageRecognition imageLink={Input} />
    </div>
  );
}

export default App;
