import React from 'react';
import './Card.css';

const Card = ({ title, value }) => {
  return (
    <div className="card">
      <h2 className="card-value">{value}</h2>
      <p className="card-title">{title}</p>
    </div>
  );
};

export default Card;
