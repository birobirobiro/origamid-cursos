import React from "react";
import Input from "./Input";
import Button from "./Button";

const Form = () => {
  const arr = ["Item 1", "Item 2"];
  return (
    <form>
      <Input id="email" label="Email" required />
      <Input id="password" type="password" label="Password" />

      <Button items={arr} />
    </form>
  );
};

export default Form;
