export class Grid {
  constructor(gridSize, gridContainer) {
    this.gridSize = gridSize;
    this.gridContainer = gridContainer;
  }
  createGrid({ r, g, b, row, col, check }) {
    this.gridContainer.style.gridTemplateColumns = `repeat(${this.gridSize}, 1fr)`;
    for (let i = 0; i < this.gridSize; i++) {
      for (let j = 0; j < this.gridSize; j++) {
        const sq = document.createElement("div");
        sq.id = `${i}_${j}`;
        sq.classList.add("square");
        sq.style.backgroundColor = `rgba(${r},${g},${b},${i === row && j === col ? 0.9 : 1})`;
        sq.addEventListener("click", () => check(i, j, row, col));
        this.gridContainer.append(sq);
      }
    }
  }
}
