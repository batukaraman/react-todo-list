import "./style.scss";
import { memo } from "react";

function Button({ type = "button", variant, children, ...props }) {
  const classes = `btn ${
    variant === "primary" ? "btn--primary" : "btn--secondary"
  }`;
  return (
    <button className={classes} type={type} {...props}>
      {children}
    </button>
  );
}

export default memo(Button);
