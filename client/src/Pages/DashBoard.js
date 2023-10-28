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

const DashBoard = () => {
  return (
    <>
    <div style={cardStyle}>
      <Card title="Quizes  Created" value="150" />
      <Card title="Questions Asked" value="120" />
      <Card title="Total Impressions" value="5000" />
    </div>
    </>
  );
};

export default DashBoard;
