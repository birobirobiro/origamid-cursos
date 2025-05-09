import React from "react";
import "./App.css";
import { Produto } from "./Produto";
import { useState } from "react";

const App = () => {
  const [ativar, setAtivar] = useState(false);

  return (
    <div>
      <button onClick={() => setAtivar(!ativar)}>Ativar</button>
      {ativar && <Produto />}
    </div>
  );
};

export default App;
