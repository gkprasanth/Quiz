const mongoose = require('mongoose');

const qnaOptionSchema = new mongoose.Schema({
  text: String,
  isCorrect: Boolean,
});

const pollOptionSchema = new mongoose.Schema({
  text: String,
  imageUrl: String,
  votes: Number,
}
);

const qnaQuestionSchema = new mongoose.Schema({
  text: String,
  options: [qnaOptionSchema],
});

const pollQuestionSchema = new mongoose.Schema({
  text: String,
  options: [pollOptionSchema],
});

const resultSchema = new mongoose.Schema({
  userId: String,
  score: Number,
  date: Date,
});

const quizSchema = new mongoose.Schema({
  name: String,
  type: {
    type: String,
    enum: ['qna', 'poll'],
  },
  title: String,
  description: String,
  createdOn: {
    type: Date,
    default: Date.now,
  },
  impression: Number,
  questions: [
    {
      question_id: String, 
      question_title: String,
      options: [
        {
          option_id: String, 
          text: String,
          imageUrl: String,
          votes: Number,
        },
      ],
    },
  ],
  results: [resultSchema],
  shareLink: String,
},
{ timestamps: true });


quizSchema.pre('save', function (next) {
  const uniqueShareLink = UniqueShareLink();
  this.shareLink = uniqueShareLink;
  next();
});

function UniqueShareLink() {
  const uuid = require('uuid');
  return uuid.v4();
}


const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;
