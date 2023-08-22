import "./style.scss";
import React, { forwardRef } from "react";

const Textbox = forwardRef(({ type = "text", label, ...props }, ref) => {
  return (
    <label className="textbox">
      {label}
      <input ref={ref} type={type} {...props} />
    </label>
  );
});

export default Textbox;
