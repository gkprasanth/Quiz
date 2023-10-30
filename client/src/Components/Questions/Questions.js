import React, { useState, useEffect } from 'react';
import './Questions.css';

const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(10);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [quizData, setQuizData] = useState(null);

  // Fetch quiz data from the API when the component mounts
  useEffect(() => {
    fetch('http://localhost:4000/quiz/list') // Update the URL to match your API
      .then((response) => response.json())
      .then((data) => setQuizData(data))
      .catch((error) => console.error(error));
  }, []);

  // Fetch time and score from the API


  useEffect(() => {
    const timer = setTimeout(() => {
      if (time > 0) {
        setTime(time - 1);
      } else {
        handleNextQuestion();
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
    };//eslint-disable-next-line
  }, [time, currentQuestion]);

  const handleAnswer = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    // if (selectedOption === quizData[currentQuestion].correctAnswer) {
    //   setScore(score + 1);
    // }
    // setIsSubmitted(true);
    console.log("Submitted");
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setIsSubmitted(false);
      setTime(10);
    } else {
      alert(`Quiz is over. You scored ${score}/${quizData.length}`);
    }
  };

  return (
    <div className="max-container">
      <div className="quiz-container">
        <h1>Quiz Page</h1>
        {quizData ? (
          <>
            <p className="question-text">Question: {quizData[currentQuestion].question}</p>
            <div className="options">
              {quizData[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className={selectedOption === option ? 'selected' : ''}
                  disabled={isSubmitted}
                >
                  {option}
                </button>
              ))}
            </div>
          </>
        ) : (
          <p>Loading quiz data...</p>
        )}
        {isSubmitted ? (
          <button onClick={handleNextQuestion}>Next Question</button>
        ) : (
          <button className='submit' onClick={handleSubmit}>Submit</button>
        )}
        <p className="score">{score}/{quizData ? quizData.length : 0}</p>
        <p className="timer">00:{time < 10 ? `0${time}` : time}s</p>
      </div>
    </div>
  );
};

export default QuizPage;
