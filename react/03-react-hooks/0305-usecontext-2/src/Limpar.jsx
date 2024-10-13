import React from "react";
import { GlobalContext } from "./GlobalContext";
import { useContext } from "react";

function Limpar() {
  const { limparDados } = useContext(GlobalContext);
  console.log(limparDados);
  return <button onClick={limparDados}>Limpar</button>;
}

export default Limpar;
