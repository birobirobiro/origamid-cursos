import React from "react";
import { useEffect } from "react";

export default function Head(props) {
  useEffect(() => {
    document.title = "Dogs | " + props.title;
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", props.description);
    console.log(props);
  }, [props]);

  return <></>;
}
