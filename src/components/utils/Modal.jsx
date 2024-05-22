import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={stopPropagation}>
        <button className="modal-close" onClick={onClose}>
          Fermer
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
