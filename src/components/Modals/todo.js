import { useEffect, useState, useRef } from "react";
import { nanoid } from "nanoid";
import { addTodoHandle, updateTodoHandle } from "../../utils/store";
import { destroyModal } from "../../utils/modal";
import { formatDateTime } from "../../utils/DateTime";
import Form from "../Form";
import Textbox from "../Textbox";
import Button from "../Button";

export default function TodoModal({ data = false }) {
  const [todo, setTodo] = useState(data.title || "");

  const submitHandle = (e) => {
    e.preventDefault();
    const payload = {
      title: todo,
      date: data.date || formatDateTime(),
      done: data.done || false,
      id: data.id || nanoid(),
    };
    data ? updateTodoHandle(payload) : addTodoHandle(payload);
    setTodo("");
    destroyModal();
  };

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        destroyModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <Form onSubmit={submitHandle}>
      <div className="form__item">
        <Textbox
          ref={inputRef}
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Görev yaz..."
        />
        <Button disabled={!todo} type="submit" variant="primary">
          {(!data && <>Ekle</>) || <>Kaydet</>}
        </Button>
      </div>
    </Form>
  );
}
