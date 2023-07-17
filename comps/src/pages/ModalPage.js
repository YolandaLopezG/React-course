import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handlerClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>I accept</Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here some text</p>
    </Modal>
  );

  return (
    <div>
      <Button onClick={handlerClick} primary>
        Open modal
      </Button>
      {showModal && modal}
    </div>
  );
}

export default ModalPage;
