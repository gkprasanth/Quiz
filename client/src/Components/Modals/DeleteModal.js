import React from 'react';
import Modal from 'react-modal';
import "./DeleteModal.css"; 
// Modal.setAppElement('#root'); 

const DeleteModal = ({ isOpen, onRequestClose, onDelete }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Delete Modal"
      className="overlay" 
    >
      <div className="content"> 
        <h3 className='heading'>Are you sure you want to delete?</h3>
        <button onClick={onDelete} className="delete-button">
           Delete
        </button>
        <button onClick={onRequestClose} className="close">
          Close
        </button>
      </div>
    </Modal>
  );
};

export default DeleteModal;
