import React, { useState } from "react";

const App = () => {
  const [produto, setProduto] = useState("");
  const [cor, setCor] = useState("");

  function handleChange({ target }) {
    setProduto(target.value);
  }

  return (
    <form>
      <h2>Cores</h2>
      <label>
        <input
          type="radio"
          value="azul"
          checked={cor === "azul"}
          onChange={({ target }) => setCor(target.value)}
        />
        Azul
      </label>
      <label>
        <input
          type="radio"
          value="vermelho"
          onChange={({ target }) => setCor(target.value)}
          checked={cor === "vermelho"}
        />
        Vermelho
      </label>
      <h2>Produtos</h2>
      <label>
        <input
          type="radio"
          value="smartphone"
          checked={produto === "smartphone"}
          onChange={handleChange}
        />
        Smartphone
      </label>
      <label>
        <input
          type="radio"
          value="notebook"
          onChange={handleChange}
          checked={produto === "notebook"}
        />
        Notebook
      </label>
    </form>
  );
};

export default App;
