import React from "react";
import { memo } from "react";

const Header = () => {
  console.log("Renderizou");
  return (
    <div>
      <h1>Header</h1>
    </div>
  );
};

export default memo(Header);
