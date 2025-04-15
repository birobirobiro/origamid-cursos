import { useState } from "react";
import Input from "./Form/Input";

const App = () => {
  const [cep, setCep] = useState("");
  const [error, setError] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    if (validateCep(cep)) {
      console.log("Enviar");
    } else {
      console.log("Não enviar");
    }
  }

  function validateCep(value) {
    if (value.length === 0) {
      setError("Preencha um valor");
      return false;
    } else if (!/^\d{5}-?\d{3}$/.test(value)) {
      setError("Preencha um cep válido");
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function handleBlur({ target }) {
    validateCep(target.value);
  }

  function handleChange({ target }) {
    if (error) validateCep(target.value);
    setCep(target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        label="CEP"
        id="cep"
        value={cep}
        onChange={handleChange}
        setValue={setCep}
        placeholder="00000-000"
        onBlur={handleBlur}
      />
      {error && <p>{error}</p>}
      <button>Enviar</button>
    </form>
  );
};

export default App;
