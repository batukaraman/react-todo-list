import "./style.scss";
import { FaTrash, FaPen } from "react-icons/fa";
import Listbox from "./components/Listbox";
import Header from "./components/Header";
import Modal from "./components/Modals";
import { createModal, useModals } from "./utils/modal";
import { deleteTodoHandle } from "./utils/store";
import { useSelector } from "react-redux";

export default function App() {
  const modals = useModals();
  const { todos } = useSelector((state) => state.todo);

  return (
    <>
      <h1>Yapılacaklar Listesi</h1>
      <div className="container">
        {modals.length > 0 && <Modal />}
        <Header />
        {todos.length > 0 ? (
          <Listbox
            checkable={true}
            items={todos}
            options={[
              {
                variant: "secondary",
                onClick: ({ id }) => {
                  deleteTodoHandle(id);
                },
                icon: <FaTrash />,
              },
              {
                variant: "secondary",
                onClick: (data) => {
                  createModal("todo", data);
                },
                icon: <FaPen />,
              },
            ]}
          />
        ) : (
          <p className="empty">Hiç Görev Yok!</p>
        )}
      </div>
    </>
  );
}
