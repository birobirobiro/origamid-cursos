import React from "react";

export default function Input({ id, label, onChange, ...props }) {
  return (
    <>
      <label htmlFor="">{label}</label>
      <input type="text" id={id} name={id} onChange={onChange} {...props} />
    </>
  );
}
