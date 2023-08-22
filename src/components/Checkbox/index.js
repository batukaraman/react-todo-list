import { FaCheck } from "react-icons/fa";

import "./style.scss";

function Checkbox({ label, checked, classNames, ...props }) {
  return (
    <div
      className={`checkbox ${classNames} ${checked && "checked"}`}
      {...props}
    >
      <span>
        <FaCheck />
      </span>
      {label}
    </div>
  );
}
export default Checkbox;
