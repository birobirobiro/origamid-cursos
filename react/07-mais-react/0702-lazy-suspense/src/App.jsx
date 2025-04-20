import React from "react";
import { useState } from "react";
import { lazy } from "react";
import { Suspense } from "react";

const Contato = lazy(() => import("./Contato"));

const App = () => {
  const [ativo, setAtivo] = useState(false);

  return (
    <div>
      {ativo && (
        <Suspense fallback={<div>Carregando...</div>}>
          <Contato />
        </Suspense>
      )}
      <button onClick={() => setAtivo(true)}>Ativar</button>
    </div>
  );
};

export default App;
