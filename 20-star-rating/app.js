const count = 5;
const set = new Set();
let selectedId = null;
const starContainer = document.querySelector(".rating-container");
const rating = document.getElementsByClassName("rating")[0];

Array.from({ length: count }).forEach((_, i) => {
  const star = document.createElement("div");
  star.classList.add("star-five");
  star.setAttribute("data-id", i + 1);
  starContainer.appendChild(star);
  star.addEventListener("mouseenter", (e) => hoverHighlight(e.currentTarget.dataset.id));
  star.addEventListener("click", (e) => setHighlight(e.currentTarget.dataset.id));
  star.addEventListener("mouseleave", () => removeHighlight());
});

function setHighlight(id) {
  set.clear();
  removeHighlight();
  if (id === selectedId) {
    selectedId = null;
  } else {
    selectedId = id;
    const stars = document.getElementsByClassName("star-five");
    for (let i = 0; i < id; i++) {
      stars[i].style.setProperty("--shape-color", "hsl(39, 90%, 61%)");
      set.add(i);
    }
  }
  rating.innerText = set.size ? set.size : "-";
}

function removeHighlight() {
  const stars = document.getElementsByClassName("star-five");
  for (let i = 0; i < stars.length; i++) {
    if (!set.has(i)) {
      stars[i].style.setProperty("--shape-color", "hsl(0, 4%, 90%)");
    }
  }
}

function hoverHighlight(id) {
  const stars = document.getElementsByClassName("star-five");
  for (let i = 0; i < id; i++) {
    stars[i].style.setProperty("--shape-color", "hsl(39, 90%, 61%)");
  }
}
