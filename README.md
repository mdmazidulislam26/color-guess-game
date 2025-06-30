# 🎯 Color Guess Game (React.js)

A fun and interactive color guessing game built with React and Tailwind CSS. Guess the matching color from a 4x4 grid where each cell has the same base color but with varying opacity.

---

## 🚀 Features

- 🎨 4x4 grid of uniquely colored boxes (with varying opacity)
- 🧠 One target color to guess
- ✅ Correct guess → score increases
- ❌ Wrong guess → sorry message
- 🎉 Every 5 points → congratulatory popup
- ⚛️ Built with React + Tailwind CSS
- 🐳 Dockerized for easy deployment

---

## 🧑‍💻 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/mdmazidulislam26/color-guess-game.git
cd color-guess-game
```
### 2. Install dependencies
```bash
npm install
```
### 3. Run locally (dev mode)
```bash
npm run dev
```
Then visit: http://localhost:5173

## 🐳 Docker Instructions
### 1. Build Docker Image
```bash
docker build -t color-guess-game .
```

2. Run Docker Container
```bash
docker run -p 80:80 color-guess-game
```
Then open: http://localhost

```
📁 Project Structure
color-guess-game/
├── src/
│   ├── components/
│   │   ├── ColorGrid.jsx
│   │   └── ScoreBoard.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── Dockerfile
├── .dockerignore
├── nginx.conf
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```
### 🧠 Future Ideas
1. Level progression (4x4 → 5x5 → 6x6)
2. Timer or Challenge mode
3. Leaderboard (with backend)
4. Sound effects

## 👤 Author
### Md Mazidul Islam
🔗 GitHub Profile