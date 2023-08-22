import { destroyModal, useModals } from "../../utils/modal";
import TodoModal from "./todo";
import "./style.scss";
import { FaTimes } from "react-icons/fa";
export default function Modal() {
  const modals = useModals();
  const modalTypes = [
    {
      name: "todo",
      element: TodoModal,
    },
  ];

  const dropIn = {
    hidden: {
      opacity: 0,
      transform: "scale(0.9)",
    },
    visible: {
      transform: "scale(1)",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      transform: "scale(0.9)",
      opacity: 0,
    },
  };

  return (
    <div className="modal">
      {modals.map((modal) => {
        const m = modalTypes.find((modalType) => modalType.name === modal.name);
        return (
          <div className="modal__inner" key={modal.name}>
            <div className="modal__header">
              <button className="close-btn" onClick={destroyModal}>
                <FaTimes />
              </button>
            </div>
            <div className="modal__body">
              <m.element data={modal.data} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
