import React from "react";

export default function Radio({ options, value, setValue, ...props }) {
  return (
    <>
      {options.map((option) => (
        <label key={option}>
          <input
            type="radio"
            value={option}
            checked={value === option}
            onChange={({ target }) => setValue(target.value)}
            {...props}
          />

          {option}
        </label>
      ))}
    </>
  );
}
