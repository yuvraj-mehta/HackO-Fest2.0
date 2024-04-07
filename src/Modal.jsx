import React, { useState } from 'react';
import './Modal.css';
import './App.css';

function Modal(props) {
  const { buttonText } = props;
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    
    <div>
      <button onClick={openModal}>{buttonText}</button>

      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button onClick={closeModal} className="modal-close-btn">
              Close
            </button>
            <div className="modal-content">{props.children}</div>
          </div>
        </div>
      )}

    </div>
  
  );
}

export default Modal;
