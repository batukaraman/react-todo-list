import "./style.scss";

import Button from "../Button";
import Dropdown from "../Dropdown";

import { createModal } from "../../utils/modal";

function Header() {
  const options = [
    { value: "DESC_DATE", label: "Tarihe Göre Azalan" },
    { value: "ASC_DATE", label: "Tarihe Göre Artan" },
    { value: "DESC_NAME", label: "İsme Göre Azalan" },
    { value: "ASC_NAME", label: "İsme Göre Artan" },
  ];

  return (
    <header>
      <Button
        variant="primary"
        onClick={() => {
          createModal("todo");
        }}
      >
        Ekle
      </Button>
      <Dropdown options={options} defaultSelected="DESC_DATE" />
    </header>
  );
}

export default Header;
