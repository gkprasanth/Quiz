import React, { useState, useEffect } from 'react';
import "./Questions.css";

const QuizQuestion = ({ onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [quizList, setQuizList] = useState([]);

  useEffect(() => {
    // Define the URL for your API
    const apiUrl = 'http://localhost:4000/quiz/list';

    // Make an API request when the component mounts
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Update the quiz list state with the data from the API
        setQuizList(data);
      })
      .catch((error) => {
        console.error('Error fetching quiz list:', error);
      });
  }, []);

  const questions = [
    {
      question: "What is the capital of France?",
      options: ['Paris', 'London', 'Berlin', 'Madrid'],
    },
  ];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <div className="quiz-question">
      {quizList.map((quiz, questionIndex) => (
        <div key={questionIndex}>
          <p className="question-paragraph">{quiz.question}</p>
          <div className="options">
            {quiz.options.map((option, optionIndex) => (
              <div
                key={optionIndex}
                className={`option ${selectedOption === option ? 'selected' : ''}`}
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuizQuestion;
