import React from "react";

export default function Input({
  id,
  label,
  onChange,
  value,
  type,
  onBlur,
  placeholder,
  error,
}) {
  return (
    <>
      <label htmlFor="">{label}</label>
      <input
        id={id}
        name={id}
        onChange={onChange}
        placeholder={placeholder}
        onBlur={onBlur}
        type={type}
        value={value}
      />
      {error && <p>{error}</p>}
    </>
  );
}
