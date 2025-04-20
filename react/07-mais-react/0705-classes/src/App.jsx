import React from "react";
import Produtos from "./Produtos";
import { useState } from "react";

const App = () => {
  const [ativar, setAtivar] = useState(true);

  return (
    <div>
      {ativar && <Produtos titulo="Esses são os produtos" />}
      <button onClick={() => setAtivar(!ativar)}>Desativar</button>
    </div>
  );
};

export default App;
