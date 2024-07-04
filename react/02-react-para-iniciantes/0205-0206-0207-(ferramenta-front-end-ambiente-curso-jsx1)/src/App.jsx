import React from "react";

const titulo = <h1>Esse é um título</h1>;

const App = () => {
  const random = Math.random();
  const ativo = false;

  function mostrarNome(sobrenome) {
    return "birobirobiro" + sobrenome;
  }

  const carro = {
    marca: "Ford",
    rodas: "4",
  };

  const estiloP = {
    color: "blue",
    fontSize: "2rem",
  };

  return (
    <>
      {titulo}
      <p>
        {true ? "ajsdndjasn" : "aslkdnmkas"} = {10}
        {mostrarNome("teste")}
      </p>
      <p>{carro.marca}</p>
      <p style={estiloP}>{carro.rodas}</p>
      <p style={estiloP}>{new Date().getFullYear()}</p>
      <p className={ativo ? "ativo" : "inativo"}>{(random * 1000) / 50}</p>
    </>
  );
};

export default App;
