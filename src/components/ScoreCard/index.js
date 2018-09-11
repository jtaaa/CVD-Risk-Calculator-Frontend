import React from 'react';
import './index.css';

const ScoreCard = ({ value = '?', message='Your score will appear here' }) => (
  <div className="score-card">
    <div className="score-card-title">Your score:</div>
    <div className="score-card-value">{ Math.round(value * 1000) / 1000 }</div>
    <div className="score-card-message">{ message }</div>
  </div>
);

export default ScoreCard;
