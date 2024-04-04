import React from "react";
import Modal from "./Modal";

const ModalAddress = ({ isOpen, onClose, address }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div>ModalAddress</div>
    </Modal>
  );
};

export default ModalAddress;
