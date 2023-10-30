import React, { useState } from 'react';
import './EditModal.css';

const EditModal = ({ isOpen, onClose, onUpdate }) => {
  const [newQuizName, setNewQuizName] = useState('');

  const handleUpdate = () => {
    onUpdate(newQuizName);
    setNewQuizName(''); 
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Edit Quiz Name</h2>
        <input
          type="text"
          placeholder="Enter new quiz name"
          value={newQuizName}
          onChange={(e) => setNewQuizName(e.target.value)}
        />
        <button onClick={handleUpdate}>Update</button>
      </div>
    </div>
  );
};

export default EditModal;
