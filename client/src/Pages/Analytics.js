import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash, FaShare } from 'react-icons/fa';
import DeleteModal from '../Components/Modals/DeleteModal';
import EditModal from '../Components/Modals/EditModal';
import axios from 'axios';

import '../App.css';

const API_BASE_URL = 'http://localhost:4000/quiz';

const Analytics = () => {
  const [quizData, setQuizData] = useState([]);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedQuizId, setSelectedQuizId] = useState();
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  useEffect(() => {
    fetchQuizData();
  }, []);

  const fetchQuizData = () => {
    axios
      .get(`${API_BASE_URL}/list`)
      .then((response) => {
        setQuizData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching quiz data:', error);
      });
  };

  const openDeleteModal = (quiz) => {
    setSelectedQuizId(quiz.quizId);
    setDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
  };

  const handleDelete = () => {
    axios
      .delete(`${API_BASE_URL}/${selectedQuizId}`)
      .then(() => {
        fetchQuizData();
        setDeleteModalOpen(false);
      })
      .catch((error) => {
        console.error('Error deleting quiz:', error);
      });
  };

  const openEditModal = (quiz) => {
    setSelectedQuizId(quiz.quizId);
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
  };

  const handleEdit = (updatedQuizData) => {
    axios
      .put(`${API_BASE_URL}/${selectedQuizId}`, updatedQuizData)
      .then(() => {
        fetchQuizData();
        setEditModalOpen(false);
      })
      .catch((error) => {
        console.error('Error editing quiz:', error);
      });
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
            <tr key={quiz.quizId} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
              <td>{index + 1}</td>
              <td>{quiz.quizName}</td>
              <td>{quiz.createdOn}</td>
              <td>{quiz.impression}</td>
              <td>
                <span className="action-edit" onClick={() => openEditModal(quiz)}>
                  <FaEdit />
                </span>
                <span className="action-del" onClick={() => openDeleteModal(quiz)}>
                  <FaTrash />
                </span>
                <span className="action-share">
                  <FaShare />
                </span>
                <Link to={`/analysis/${quiz.quizId}`} className="analysis-link">
                  Quiz wise Analysis
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isDeleteModalOpen && (
        <DeleteModal
          isOpen={isDeleteModalOpen}
          onRequestClose={closeDeleteModal}
          onDelete={handleDelete}
          quiz={selectedQuizId}
        />
      )}

      {isEditModalOpen && (
        <EditModal
          isOpen={isEditModalOpen}
          onRequestClose={closeEditModal}
          onEdit={handleEdit}
          quiz={selectedQuizId}
        />
      )}
    </div>
  );
};

export default Analytics;
