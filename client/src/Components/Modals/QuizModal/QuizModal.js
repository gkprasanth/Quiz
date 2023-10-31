import React, { useState } from 'react';
import styles from './QuizModal.module.css'; 
import axios from 'axios';

const CreateQuizModal = ({ isOpen, onClose }) => {
  const [quizName, setQuizName] = useState('');
  const [quizType, setQuizType] = useState('q&a');

  const handleQuizNameChange = (e) => {
    setQuizName(e.target.value);
  };

  const handleCancel = () => {
    console.log("Hello Bye");
  };

  const handleContinue = () => {
    console.log("Hello world");

    const data = {
      quizName: quizName,
      quizType: quizType,
    };

    axios.post('/quiz/create', data)
      .then(response => {
        console.log("Quiz created successfully", response.data);
      })
      .catch(error => {
        console.error("Error creating quiz", error);
      });

    onClose();
  };

  return (
    <div className={`${styles.modal} ${isOpen ? styles.open : ''}`}>
      <div className={styles['modal-content']}>
        <input
          type="text"
          value={quizName}
          placeholder='Quiz Name'
          onChange={handleQuizNameChange}
        />
        <label>
          Quiz Type:
          <button
            value="Q&A"
            onClick={() => setQuizType('Q&A')}
          >
            Q & A
          </button>
          <button
            value="Poll"
            onClick={() => setQuizType('Poll')}
          >
            Poll
          </button>
        </label>
        <div className={styles['modal-buttons']}>
          <button value="cancel" onClick={handleCancel}>Cancel</button>
          <button value="continue" onClick={handleContinue}>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default CreateQuizModal;
