import React, { useState } from 'react';
import './EditModal.css';

const EditModal = ({ isOpen, onRequestClose, onEdit, quiz }) => {
  const [updatedQuizName, setUpdatedQuizName] = useState(quiz.name);

  const handleSave = () => {
    // Create an object with the updated data.
    const updatedData = {
      name: updatedQuizName,
    };

    onEdit(updatedData);


    onRequestClose();
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <h2>Edit Quiz</h2>
        <form>
          <div className="form-group">
            <label htmlFor="quizName">Quiz Name</label>
            <input
              type="text"
              id="quizName"
              value={updatedQuizName}
              onChange={(e) => setUpdatedQuizName(e.target.value)}
            />
          </div>
          <div className="modal-buttons">
            <button type="button" onClick={handleSave}>
              Save
            </button>
            <button type="button" onClick={onRequestClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
