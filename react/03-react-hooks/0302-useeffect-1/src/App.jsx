import { useEffect, useState } from "react";
import Produto from "./Produto";

const App = () => {
  // const [contar, setContar] = useState(0);
  // const [dados, setDados] = useState(null);
  const [ativo, setAtivo] = useState(false);

  // useEffect(() => {
  //   fetch("https://ranekapi.origamid.dev/json/api/produto/notebook")
  //     .then((response) => response.json())
  //     .then((json) => setDados(json));
  // }, []);

  return (
    <div>
      {/* {dados && (
        <div>
          <h1>{dados.nome}</h1>
          <p>R$ {dados.preco * contar}</p>
        </div>
      )}
      <button onClick={() => setContar(contar + 1)}>{contar}</button> */}
      {ativo && <Produto />}
      <button onClick={() => setAtivo(!ativo)}>Ativar</button>
    </div>
  );
};

export default App;
