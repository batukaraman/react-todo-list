import Checkbox from "../Checkbox";
import "./style.scss";
import { updateTodoHandle } from "../../utils/store";
import Button from "../Button";

export default function Listbox({
  items,
  checkable = false,
  options = [],
  ...props
}) {
  return (
    <ul className="listbox" {...props}>
      {items.map((item) => (
        <li
          className={`listbox__item ${item.done ? "checked" : ""}`}
          key={item.id}
        >
          <div className="listbox__body">
            {checkable && (
              <Checkbox
                classNames="listbox__checkbox"
                checked={item.done}
                onClick={() => {
                  const payload = { ...item, done: !item.done };
                  updateTodoHandle(payload);
                }}
              />
            )}
            <div className="listbox__info">
              <span className="listbox__title">{item.title}</span>
              <span className="listbox__subtitle">{item.date}</span>
            </div>
          </div>
          <div className="listbox__options">
            {options.map((option, index) => (
              <Button
                variant={option.variant}
                onClick={() =>
                  option.onClick({
                    title: item.title,
                    date: item.date,
                    id: item.id,
                  })
                }
                key={index}
              >
                {option.icon}
              </Button>
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}
