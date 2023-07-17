import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);
  const handlerClick = () => {
    setShowModal(true);
  };
  return (
    <div>
      <Button onClick={handlerClick} primary>
        Open modal
      </Button>
      {showModal && <Modal />}
    </div>
  );
}

export default ModalPage;
