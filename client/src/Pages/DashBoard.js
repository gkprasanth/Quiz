import React from 'react';
import Card from '../Components/Cards/Card';

const cardStyle = {
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  paddingLeft: '150px',
};

const trendingQuizzes = [
  {
    quizName: 'Quiz 1',
    createdOn: '2023-10-29',
    impressions: 1000,
  },
  {
    quizName: 'Quiz 2',
    createdOn: '2023-10-28',
    impressions: 800,
  },
  {
    quizName: 'Quiz 3',
    createdOn: '2023-10-27',
    impressions: 1200,
  },
];

const DashBoard = () => {
  return (
    <>
      <div style={cardStyle}>
        <Card title="Quizzes Created" value="150" />
        <Card title="Questions Asked" value="120" />
        <Card title="Total Impressions" value="5000" />
      </div>
      <div>
        <h2>Trending Quizzes</h2>
        {trendingQuizzes.map((quiz, index) => (
          <Card
            key={index}
            title={quiz.quizName}
            value={`Created on: ${quiz.createdOn}, Impressions: ${quiz.impressions}`}
          />
        ))}
      </div>
    </>
  );
};

export default DashBoard;
