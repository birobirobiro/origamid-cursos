import React from "react";
import "./App.css";
import foto from "./img/foto.jpg";
import DogSvg from "./DogSvg";
import { useState } from "react";

const App = () => {
  const [olho, setOlho] = useState(0);

  function handleClick() {
    for (let i = 0; i < 6; i++) {
      setTimeout(() => {
        setOlho(i);
      }, 30 * i);
    }
  }

  return (
    <div>
      <p className="fundo" onClick={handleClick}></p>
      <DogSvg color="#84e" olho={olho} />
      <img src={foto} alt="cachorrro" />
    </div>
  );
};

export default App;
