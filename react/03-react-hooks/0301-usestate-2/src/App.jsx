import React from "react";
import { useState } from "react";

function App() {
  const [contar, setContar] = useState(1);
  const [items, setItems] = useState(["Item 1"]);

  function handleClick() {
    setContar(contar + 1);
    setItems([...items, "Item " + (contar + 1)]);
  }
  return (
    <div>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}

      <button onClick={handleClick}>{contar}</button>
    </div>
  );
}

export default App;
