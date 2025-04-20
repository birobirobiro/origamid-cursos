import React from "react";
import Header from "./Header";
import { useState } from "react";

const App = () => {
  const [contar, setContar] = useState(0);
  return (
    <div>
      <Header contar={contar} />
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  );
};

export default App;
