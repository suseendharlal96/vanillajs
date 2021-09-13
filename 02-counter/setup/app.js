let count = 0;

const btns = document.getElementsByClassName("btn");
const counter = document.getElementById("value");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", ({ currentTarget }) => {
    if (currentTarget.classList[1] === "increase") {
      count++;
    } else if (currentTarget.classList[1] === "decrease") {
      count--;
    } else {
      count = 0;
    }
    counter.innerText = count;
    if (count > 0) {
      counter.style.color = "green";
    } else if (count < 0) {
      counter.style.color = "red";
    } else {
      counter.style.color = "black";
    }
  });
}

