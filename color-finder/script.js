import { Grid } from "./grid.js";
import { getRandomColor, getRandomIndex, calcHighScore } from "./utility.js";

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
  const grid = new Grid(gridSize, gridContainer);
  const params = { r, g, b, row, col, check };
  grid.createGrid(params);
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
  calcHighScore(score,highScoreContainer);
}
