const containerEl = document.querySelector(".container");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
    });
  },
  {
    threshold: 1,
  }
);

createNewCards();
function createNewCards() {
  for (let i = 0; i < 10; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("show");
    card.innerText = containerEl.children.length + 1;
    observer.observe(card);
    containerEl.appendChild(card);
  }
}

const lastElObserver = new IntersectionObserver((entries) => {
  const lastEl = entries[0];
  if (!lastEl.isIntersecting) return;
  createNewCards();
  lastElObserver.unobserve(lastEl.target);
  lastElObserver.observe(document.querySelector(".card:last-child"));
});

const lastCard = document.querySelector(".card:last-child");

lastElObserver.observe(lastCard);
