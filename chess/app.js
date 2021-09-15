const chessContainer = document.querySelector(".chess-container");

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
    sq.addEventListener("mouseenter", () => highlight(i, j));
    sq.addEventListener("mouseleave", () => removeHighlight());
    row.append(sq);
  }
  chessContainer.append(row);
}
const dir = [
  [-1, -1],
  [-1, 1],
  [1, -1],
  [1, 1],
];

function removeHighlight() {
  const sq = document.querySelectorAll(".square");
  //   console.log({ newRow, newCol });
  sq.forEach((s) => {
    s.classList.remove("highlight");
  });
}

function highlight(r, c) {
  let i = r;
  let j = c;
  let k = r;
  let l = c;
  let m = r;
  let n = c;
  let a = r;
  let b = c;

  const sq = document.querySelectorAll(".square");
  while ((i >= 0 && j >= 0) || (k >= 0 && l < 8) || (m < 8 && n >= 0) || (a < 8 && b < 8)) {
    const sq = document.querySelector(`[data-pos="${i}_${j}"]`);
    const sq2 = document.querySelector(`[data-pos="${k}_${l}"]`);
    const sq3 = document.querySelector(`[data-pos="${m}_${n}"]`);
    const sq4 = document.querySelector(`[data-pos="${a}_${b}"]`);
    console.log(sq);
    if (sq) {
      sq.classList.add("highlight");
    }
    if (sq2) {
      sq2.classList.add("highlight");
    }

    if (sq3) {
      sq3.classList.add("highlight");
    }
    if (sq4) {
      sq4.classList.add("highlight");
    }
    i--;
    j--;
    k--;
    l++;
    m++;
    n--;
    a++;
    b++;
  }
}
