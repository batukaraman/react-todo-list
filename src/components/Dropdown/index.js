import { useSelector } from "react-redux";

import React, { useEffect, useRef, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

import "./style.scss";
import { filterTodoHandle } from "../../utils/store";

export default function Dropdown({
  label,
  placeHolder,
  defaultSelected,
  options,
}) {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedValue, setSelectedValue] = useState(
    options.find((option) => option.value === defaultSelected) || null
  );
  const inputRef = useRef();

  const handleTrigger = () => {
    setShowMenu(!showMenu);
  };

  const isSelected = (option) => {
    if (!selectedValue) {
      return false;
    }

    return selectedValue.value === option.value;
  };

  const handleSelected = (option) => {
    if (option === selectedValue && !placeHolder) setSelectedValue(options[0]);
    else if (option === selectedValue) setSelectedValue(null);
    else {
      setSelectedValue(option);
    }
  };

  useEffect(() => {
    const handler = (e) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("click", handler);
    };
  });

  const { todos } = useSelector((state) => state.todo);

  useEffect(() => {
    filterTodoHandle({ filter: selectedValue.value });
  }, [selectedValue, todos]);

  return (
    <div className={`dropdown${showMenu ? " open" : ""}`} role="dropdown">
      <div ref={inputRef} onClick={handleTrigger} className="dropdown__trigger">
        <div className="dropdown__placeholder">
          {selectedValue ? selectedValue.label : placeHolder}
        </div>
        <div className="dropdown__arrow">
          {(!showMenu && <FaAngleDown />) || <FaAngleUp />}
        </div>
      </div>
      {showMenu && (
        <div className="dropdown__list">
          {options.map((option) => (
            <div
              onClick={() => handleSelected(option)}
              key={option.value}
              className={`dropdown__item ${isSelected(option) && "selected"}`}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
