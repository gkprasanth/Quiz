import React, { useState, useEffect } from 'react';
import './Questions.css';

const QuizQuestionPage = () => {
  const [question, setQuestion] = useState("What is the capital of France?");
  const [answers, setAnswers] = useState(['Paris', 'London', 'Berlin', 'Madrid']);
  const [correctAnswer] = useState('Paris'); // Set the correct answer
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(10);

  // Function to handle answer selection
  const handleAnswerSelect = (selectedOption) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(selectedOption);
      if (selectedOption === correctAnswer) {
        setScore(score + 0.4);
      }
    }
  };

  // Timer countdown effect
  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [time]);

  return (
    <div className="quiz-question-page">
      <p>{question}</p>
      <div className="answers">
        {answers.map((answer, index) => (
          <div
            key={index}
            className={`answer ${selectedAnswer === answer ? (answer === correctAnswer ? 'correct' : 'wrong') : ''}`}
            onClick={() => handleAnswerSelect(answer)}
          >
            {answer}
          </div>
        ))}
      </div>
      <p>Score: {score}</p>
      <p>Time: 00:{time < 10 ? `0${time}` : time}s</p>
    </div>
  );
};

export default QuizQuestionPage;
