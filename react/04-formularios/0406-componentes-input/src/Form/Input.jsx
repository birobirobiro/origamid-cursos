import React from "react";

export default function Input({ id, label, setValue, ...props }) {
  return (
    <>
      <label htmlFor="">{label}</label>
      <input
        type="text"
        id={id}
        name={id}
        onChange={({ target }) => setValue(target.value)}
        {...props}
      />
    </>
  );
}
