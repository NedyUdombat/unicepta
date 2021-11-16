/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react';

/** Icon(s) */

const ReactModal = require('react-modal');

ReactModal.setAppElement('#root');

interface ModalPropsTypes {
  isOpen: boolean;
  closeModal: () => void;
  children?: React.ReactElement;
}

const Modal = ({
  isOpen,
  closeModal,
  children,
}: ModalPropsTypes): JSX.Element => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      style={{
        overlay: {
          background: 'rgba(0, 0, 0, .25)',
          zIndex: 99,
        },
      }}
      className="modal"
      contentLabel="Response Modal"
    >
      <div className="modal-content">
        <div className="close-btn-section">
          <button type="button" className="close-btn" onClick={closeModal}>
            <i className="fas fa-times fa-2x mb-4" />
          </button>
        </div>
        {children && children}
      </div>
    </ReactModal>
  );
};

export default Modal;
