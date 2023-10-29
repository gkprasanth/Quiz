import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash, FaShare } from 'react-icons/fa';
import DeleteModal from '../Components/Modals/DeleteModal'; // Import the DeleteModal component
import '../App.css';

const dummyQuizData = [
  {
    quizName: 'Quiz 1',
    createdOn: '2023-01-01',
    impression: 500,
    // analysisLink: 'https://example.com/quiz1',
  },
  {
    quizName: 'Quiz 2',
    createdOn: '2023-02-15',
    impression: 800,
    // analysisLink: 'https://example.com/quiz2',
  },
  {
    quizName: 'Quiz 3',
    createdOn: '2023-03-20',
    impression: 1200,
    // analysisLink: 'https://example.com/quiz3',
  },
];

const Analytics = () => {
  const [quizData, setQuizData] = useState(dummyQuizData);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  const openDeleteModal = (quiz) => {
    setSelectedQuiz(quiz);
    setDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
  };

  const handleDelete = () => {
   
    setQuizData((prevData) => prevData.filter((quiz) => quiz !== selectedQuiz));
    setDeleteModalOpen(false);
  };

  return (
    <div className="quiz-analysis-container">
      <h1 className="qhead">Quiz Analysis</h1>
      <table className="quiz-table">
        <thead>
          <tr>
            <th>S.no</th>
            <th>Quiz name</th>
            <th>Created On</th>
            <th>Impressions</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {quizData.map((quiz, index) => (
            <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
              <td>{index + 1}</td>
              <td>{quiz.quizName}</td>
              <td>{quiz.createdOn}</td>
              <td>{quiz.impression}</td>
              <td>
                <span className="action-edit">
                  <FaEdit />
                </span>
                <span className="action-del" onClick={() => openDeleteModal(quiz)}>
                  <FaTrash />
                </span>
                <span className="action-share">
                  <FaShare />
                </span>
                <Link className="analysis-link">Quiz wise Analysis</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <DeleteModal
        isOpen={isDeleteModalOpen}
        onRequestClose={closeDeleteModal}
        onDelete={handleDelete}
        quiz={selectedQuiz}
      />
    </div>
  );
};

export default Analytics;
