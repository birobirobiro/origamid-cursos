import React, { useRef, useState } from "react";

function App() {
  const [carrinho, setCarrinho] = useState(0);
  const [notificacao, setNotificacao] = useState(null);
  const timemoutRef = useRef;
  // const [comentarios, setComentarios] = useState([]);
  // const [input, setInput] = useState("");
  // const inputElement = useRef();

  function handleClick() {
    setCarrinho(carrinho + 1);
    setNotificacao("Item adicionado ao carrinho");

    clearTimeout(timemoutRef.current);
    timemoutRef.current = setTimeout(() => {
      setNotificacao(null);
    }, 2000);
  }

  // function handleClick() {
  //   setComentarios((comentarios) => [...comentarios, input]);
  //   setInput("");
  //   inputElement.current.focus();
  // }

  return (
    // <div>
    //   <ul>
    //     {comentarios.map((comentario) => (
    //       <li key={comentario}>{comentario}</li>
    //     ))}
    //   </ul>
    //   <input
    //     type="text"
    //     value={input}
    //     ref={inputElement}
    //     onChange={({ target }) => setInput(target.value)}
    //   />
    //   <br />
    //   <button onClick={handleClick}>Enviar</button>
    // </div>

    <div>
      <p>{notificacao}</p>
      <button onClick={handleClick}>Adicionar Carrinho {carrinho}</button>
    </div>
  );
}

export default App;
