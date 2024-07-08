import React, { useState } from "react";
import Modal from "./Modal";

export default function ModleText() {
  const [showModal, setShowModal] = useState(false);

  const handleToggleModalPopup = () => {
    setShowModal(!showModal);
  };

  const onClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
      {showModal && <Modal onClose={onClose} />}
    </div>
  );
}
