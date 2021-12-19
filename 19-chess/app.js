const chessContainer = document.querySelector(".chess-container");
const set = new Set();

for (let i = 0; i < 8; i++) {
  const row = document.createElement("div");
  row.classList.add("row");
  for (let j = 0; j < 8; j++) {
    const sq = document.createElement("div");
    sq.classList.add("square");
    if ((i + j) % 2) {
      sq.classList.add("dark");
    }
    sq.setAttribute("data-pos", `${i}_${j}`);
    sq.addEventListener("mouseover", () => highlight(i, j));
    sq.addEventListener("mouseleave", () => removeHighlight());
    row.append(sq);
  }
  chessContainer.append(row);
}
const directions = [
  [-1, -1],
  [-1, 1],
  [1, -1],
  [1, 1],
];

function removeHighlight() {
  const sq = document.querySelectorAll(".square");
  set.clear();
  sq.forEach((s) => {
    s.classList.remove("highlight");
  });
}

function highlight(r, c) {
  for (let [dirX, dirY] of directions) {
    helper(dirX, dirY, r, c);
  }
}

function helper(diagRow, diagCol, currRow, currCol) {
  while (currRow >= 0 && currCol >= 0 && currRow < 8 && currCol < 8) {
    const square = document.querySelector(`[data-pos="${currRow}_${currCol}"]`);
    if (square) {
      square.classList.add("highlight");
    }
    currRow += diagRow;
    currCol += diagCol;
  }
}
