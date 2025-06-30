// 📁 src/components/ScoreBoard.jsx
import React from 'react';

const ScoreBoard = ({ score, targetColor }) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-2">🎯 Guess The Color</h1>
      <div className="w-24 h-24 rounded-md shadow-md" style={{ backgroundColor: targetColor }}></div>
      <p className="mt-2 text-lg">Score: {score}</p>
    </div>
  );
};

export default ScoreBoard;