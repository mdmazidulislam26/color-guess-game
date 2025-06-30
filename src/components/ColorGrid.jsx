// 📁 src/components/ColorGrid.jsx
import React from 'react';

const ColorGrid = ({ colors, onGuess }) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {colors.map((c, idx) => (
        <div
          key={idx}
          onClick={() => onGuess(c.color)}
          className="w-20 h-20 rounded-md cursor-pointer hover:scale-105 transition"
          style={{ backgroundColor: c.color, opacity: c.opacity }}
        ></div>
      ))}
    </div>
  );
};

export default ColorGrid;