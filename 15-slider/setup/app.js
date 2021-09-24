const slideData = [
  {
    id: 1,
    img: "img-1.jpeg",
  },
  {
    id: 2,
    img: "img-2.jpeg",
  },
  {
    id: 3,
    img: "person-1.jpeg",
  },
];
let activeIndex = 0;
const slideContainer = document.createElement("div");
slideContainer.classList.add("slider-container");

const btnContainer = document.createElement("div");
btnContainer.classList.add("btn-container");

["prevBtn", "nextBtn"].forEach((btn) => {
  const newBtn = document.createElement("button");
  newBtn.classList.add(btn);
  newBtn.innerText = btn.substring(0, 4);
  newBtn.addEventListener("click", () => nav(btn.substring(0, 4)));
  btnContainer.appendChild(newBtn);
});

window.addEventListener("DOMContentLoaded", () => {
  getButtonVisibility();
});

function nav(type) {
  const btn = document.getElementsByClassName("slide");
  if (type === "next") {
    activeIndex = (activeIndex + 1) % slideData.length;
  } else {
    activeIndex--;
    if (activeIndex < 0) {
      activeIndex = slideData.length - 1;
    }
  }
  getButtonVisibility();

  for (let i = 0; i < btn.length; i++) {
    btn[i].style.transform = `translateX(-${activeIndex * 100}%)`;
  }
}

slideData.forEach((slide, i) => {
  const slideContent = document.createElement("div");
  slideContent.classList.add("slide");
  slideContent.style.left = i * 100 + "%";
  slideContent.setAttribute("id", i);
  const img = document.createElement("img");
  img.classList.add("slide-img");
  img.src = "./" + slide.img;
  const header = document.createElement("h1");
  header.textContent = slide.id;
  slideContent.appendChild(img);
  slideContent.appendChild(header);
  slideContainer.appendChild(slideContent);
});
document.body.appendChild(slideContainer);

document.body.appendChild(btnContainer);

function getButtonVisibility() {
  if (activeIndex === slideData.length - 1) {
    document.getElementsByClassName("nextBtn")[0].style.display = "none";
  } else {
    document.getElementsByClassName("nextBtn")[0].style.display = "block";
  }
  if (activeIndex === 0) {
    document.getElementsByClassName("prevBtn")[0].style.display = "none";
  } else {
    document.getElementsByClassName("prevBtn")[0].style.display = "block";
  }
}
