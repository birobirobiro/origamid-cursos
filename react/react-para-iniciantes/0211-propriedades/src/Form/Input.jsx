import React from "react";

const Input = ({ id, ...props }) => {
  return (
    <div style={{ margin: "1rem 0" }}>
      <label htmlFor={id} style={{ textTransform: "capitalize" }}>
        {id}
      </label>
      <input id={id} type="text" {...props} />
    </div>
  );
};

export default Input;
