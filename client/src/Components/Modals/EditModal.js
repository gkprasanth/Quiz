// EditModal.js
import React, { useState } from 'react';
import Modal from 'react-modal';
Modal.setAppElement('#root');

const EditModal = ({ isOpen, onRequestClose, onEdit, quiz }) => {
  const [updatedData, setUpdatedData] = useState(quiz);

  const handleEdit = () => {
    onEdit(updatedData);
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Edit Modal" className="modal-style">
      <div className="modal-content">
        <h3 className="modal-heading">Edit Quiz</h3>
        <form>
          <div>
            <label htmlFor="quizName">Quiz Name:</label>
            <input
              type="text"
              id="quizName"
              name="quizName"
              value={updatedData.quizName}
              onChange={(e) => setUpdatedData({ ...updatedData, quizName: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="createdOn">Created On:</label>
            <input
              type="text"
              id="createdOn"
              name="createdOn"
              value={updatedData.createdOn}
              onChange={(e) => setUpdatedData({ ...updatedData, createdOn: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="impression">Impressions:</label>
            <input
              type="number"
              id="impression"
              name="impression"
              value={updatedData.impression}
              onChange={(e) => setUpdatedData({ ...updatedData, impression: e.target.value })}
            />
          </div>
        </form>
        <button onClick={handleEdit} className="edit-button">
          Save
        </button>
        <button onClick={onRequestClose} className="close">
          Close
        </button>
      </div>
    </Modal>
  );
};

export default EditModal;
