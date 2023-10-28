import React, { useState } from 'react';
import "./QuizModal.css"
import axios from 'axios'; // Import Axios

const CreateQuizModal = ({ isOpen, onClose }) => {
  const [quizName, setQuizName] = useState('');
  const [quizType, setQuizType] = useState('Q&A');

  const handleQuizNameChange = (e) => {
    setQuizName(e.target.value);
  };

  const handleCancel = () => {
    console.log("Hello Bye");
  };

  const handleContinue = () => {
    console.log("Hello world");

    // Create a data object to send to the API
    const data = {
      quizName: quizName,
      quizType: quizType,
    };

    // Make a POST request to the API
    axios.post('/api/quiz/create', data)
      .then(response => {
        // Handle the response, e.g., show a success message
        console.log("Quiz created successfully", response.data);
      })
      .catch(error => {
        // Handle errors, e.g., show an error message
        console.error("Error creating quiz", error);
      });

    onClose(); // Close the modal
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
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
        <div className="modal-buttons">
          <button onClick={handleCancel}>Cancel</button>
          <button onClick={handleContinue}>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default CreateQuizModal;
