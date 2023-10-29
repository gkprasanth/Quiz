const express = require('express');
const router = express.Router();
const resultController = require('../controllers/quizResultController');

// Get all results for a specific quiz by quiz ID
router.get('/:quizId', resultController.getResultsForQuiz);

// Get all results for a specific user by user ID
router.get('/user/:userId', resultController.getResultsForUser);

// Get a specific result by result ID
router.get('/:resultId', resultController.getResultById);



module.exports = router;
