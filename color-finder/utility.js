export function getRandomColor() {
  const r = Math.floor(Math.random() * 255 + 1);
  const g = Math.floor(Math.random() * 255 + 1);
  const b = Math.floor(Math.random() * 255 + 1);
  return [r, g, b];
}

export function getRandomIndex(gridSize) {
  const r = Math.floor(Math.random() * gridSize + 1);
  const c = Math.floor(Math.random() * gridSize + 1);
  return [r, c];
}

export function calcHighScore(score,highScoreContainer) {
  highScoreContainer.innerText = localStorage.getItem("highscore") ? (localStorage.getItem("highscore") < score ? score : localStorage.getItem("highscore")) : score;
  if (localStorage.getItem("highscore") < score) localStorage.setItem("highscore", score);
}
