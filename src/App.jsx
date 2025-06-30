import React, { useEffect, useState } from 'react';
import ScoreBoard from './components/ScoreBoard';
import ColorGrid from './components/ColorGrid';

const generateRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

const App = () => {
  const [colors, setColors] = useState([]);
  const [targetColor, setTargetColor] = useState('');
  const [score, setScore] = useState(0);
  const [popupMessage, setPopupMessage] = useState('');

  const generateColors = () => {
    const baseColors = new Set();
    while (baseColors.size < 16) {
      baseColors.add(generateRandomColor());
    }
    const colorArray = Array.from(baseColors).map(color => {
      const opacity = (Math.random() * 0.5 + 0.5).toFixed(2);
      return { color, opacity };
    });
    setColors(colorArray);
    const randomTarget = colorArray[Math.floor(Math.random() * 16)];
    setTargetColor(randomTarget.color);
  };

  const handleGuess = (guessedColor) => {
    if (guessedColor === targetColor) {
      const newScore = score + 1;
      setScore(newScore);
      if (newScore % 5 === 0) {
        setPopupMessage(`🎉 Congratulations! You scored ${newScore}!`);
      } else {
        setPopupMessage('✅ Correct!');
      }
    } else {
      setPopupMessage('🙏 Sorry! Try again.');
    }

    generateColors();

    // 2 seconds পরে popup মুছে ফেলবো
    setTimeout(() => {
      setPopupMessage('');
    }, 2000);
  };

  useEffect(() => {
    generateColors();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center gap-6 p-6 relative">
      <ScoreBoard score={score} targetColor={targetColor} />
      <ColorGrid colors={colors} onGuess={handleGuess} />

      {popupMessage && (
        <div className="absolute top-10 bg-white shadow-lg rounded-md px-6 py-3 text-lg font-semibold animate-fadeInOut">
          {popupMessage}
        </div>
      )}

      <style>{`
        @keyframes fadeInOut {
          0% {opacity: 0;}
          10% {opacity: 1;}
          90% {opacity: 1;}
          100% {opacity: 0;}
        }
        .animate-fadeInOut {
          animation: fadeInOut 2s forwards;
        }
      `}</style>
    </div>
  );
};

export default App;
