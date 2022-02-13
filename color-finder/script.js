const container = document.getElementsByClassName("container")[0];
const gridContainer = document.getElementsByClassName("grid")[0];
const scoreContainer = document.getElementById("score");
const highScoreContainer = document.getElementById("highscore");
// console.log(gridContainer.style);
let gridSize = 4;
let score = 0;
scoreContainer.innerText = score;
highScoreContainer.innerText = localStorage.getItem("highscore") || score;

init(gridSize);

function init(gridSize) {
  gridContainer.innerHTML = "";
  const [r, g, b] = getRandomColor();
  const [row, col] = getRandomIndex(gridSize - 1);
  gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  console.log({ row, col });
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const sq = document.createElement("div");
      sq.id = `${i}_${j}`;
      sq.classList.add("square");
      sq.style.backgroundColor = `rgba(${r},${g},${b},${i === row && j === col ? 0.9 : 1})`;
      sq.addEventListener("click", () => check(i, j, row, col));
      gridContainer.append(sq);
    }
  }
}

function check(r, c, row, col) {
  if (r === row && c === col) {
    score++;
    init(++gridSize);
  } else {
    gridSize = 4;
    score = 0;
    gridContainer.animate([{ transform: "translateX(2px)" }, { transform: "translateX(-2px)" }, { transform: "translateX(2px)" }], {
      duration: 100,
      iterations: 8,
      easing: "linear",
    });
    init(gridSize);
  }
  scoreContainer.innerText = score;
  highScoreContainer.innerText = localStorage.getItem("highscore") ? (localStorage.getItem("highscore") < score ? score : localStorage.getItem("highscore")) : score;
  if (localStorage.getItem("highscore") < score) localStorage.setItem("highscore", score);
}

function getRandomColor() {
  const r = Math.floor(Math.random() * 255 + 1);
  const g = Math.floor(Math.random() * 255 + 1);
  const b = Math.floor(Math.random() * 255 + 1);
  //   console.log({ r, g, b });
  return [r, g, b];
}

function getRandomIndex(gridSize) {
  const r = Math.floor(Math.random() * gridSize + 1);
  const c = Math.floor(Math.random() * gridSize + 1);
  return [r, c];
}
