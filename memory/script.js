const gridContainer = document.getElementsByClassName("grid")[0];
const scoreContainer = document.getElementById("score");
const highScoreContainer = document.getElementById("highscore");
const startBtn = document.getElementById("startbtn");

let gridSize = 4;
let score = 0;
let level = 1;
let clickCount = 0;
const selectedIndex = [];
scoreContainer.innerText = score;
highScoreContainer.innerText = localStorage.getItem("highscore") || score;
gridContainer.classList.add("disable");

init(gridSize);

function init(gridSize) {
  gridContainer.innerHTML = "";
  gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const sq = document.createElement("div");
      sq.id = `${i}_${j}`;
      sq.classList.add("square");
      sq.addEventListener("click", () => check(i, j));
      gridContainer.append(sq);
    }
  }
}

startBtn.addEventListener("click", function () {
  if (this.classList.value === "disable") return;
  this.classList.add("disable");
  addHighLight();
});

function addHighLight() {
  //   if (gridContainer.classList.value === "disable") return;
  clickCount = 0;
  selectedIndex.length = 0;
  for (let i = 0; i < level; i++) {
    selectedIndex.push(getRandomIndex(gridSize - 1));
  }
//   console.log(selectedIndex);
  selectedIndex?.forEach((rIndx, i) => {
    setTimeout(() => {
      setTimeout(() => {
        document.getElementById(rIndx).classList.remove("highlight");
      }, 400);
      document.getElementById(rIndx).classList.add("highlight");
    }, 1200 * i);
    if (i === selectedIndex.length - 1) {
      setTimeout(() => {
        gridContainer.classList.remove("disable");
      }, 1200 * selectedIndex.length);
    }
  });
}

function check(r, c) {
  if (gridContainer.classList.value.indexOf("disable") >= 0) return;
//   console.log("click");
  if (selectedIndex[clickCount] === `${r}_${c}`) {
    clickCount++;
    setTimeout(() => {
      document.getElementById(`${r}_${c}`).classList.remove("success");
    }, 400);
    document.getElementById(`${r}_${c}`).classList.add("success");
    // console.log({ clickCount, selectedIndex });
    if (clickCount === selectedIndex.length) {
      score++;
      scoreContainer.innerText = score;
      calcHighScore(score, highScoreContainer);
      setTimeout(() => addHighLight(++level), 1000);
    }
  } else {
    setTimeout(() => {
      document.getElementById(`${r}_${c}`).classList.remove("failure");
    }, 400);
    document.getElementById(`${r}_${c}`).classList.add("failure");
    gridContainer.animate([{ transform: "translate(2px)" }, { transform: "translate(-2px)" }, { transform: "translate(2px)" }], {
      iterations: 8,
      duration: 100,
      easing: "linear",
    });
    scoreContainer.innerText = 0;
    startBtn.classList.remove("disable");
    gridContainer.classList.add("disable");
  }
}

function getRandomIndex(gridSize) {
  const r = Math.floor(Math.random() * gridSize + 1);
  const c = Math.floor(Math.random() * gridSize + 1);
  return `${r}_${c}`;
}

function calcHighScore(score, highScoreContainer) {
  highScoreContainer.innerText = localStorage.getItem("highscore") ? (localStorage.getItem("highscore") < score ? score : localStorage.getItem("highscore")) : score;
  if (localStorage.getItem("highscore") < score) localStorage.setItem("highscore", score);
}
