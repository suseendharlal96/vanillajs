const draggableList = document.getElementById("draggable-list");
const check = document.getElementById("check");

const richestPeople = [
  "Elon Musk",
  "Jeff Bezos",
  "Bill Gates",
  "Warren Buffett",
  "Bernard Arnault",
  "Amancio Ortega",
  "Larry Ellison",
  "Mark Zuckerberg",
  "Michael Bloomberg",
  "Larry Page",
];
const listItems = [];
let dragStartIndex = -1;
const dragStart = function () {
  console.log(this);
  dragStartIndex = +this.closest("li").getAttribute("data-index");
};
function dragOver(e) {
  e.preventDefault();
}
function drop() {
  const dragEndIndex = +this.getAttribute("data-index");
  swapData(dragStartIndex, dragEndIndex);
  this.classList.remove("over");
}

function swapData(start, end) {
  const itemOne = listItems[start].querySelector(".draggable");
  const itemTwo = listItems[end].querySelector(".draggable");

  listItems[start].appendChild(itemTwo);
  listItems[end].appendChild(itemOne);
}

function dragEnter() {
  //   console.log("enter", this);
  this.classList.add("over");
}
function dragLeave() {
  //   console.log("leave", this);
  this.classList.remove("over");
}
generateRandomList();

function generateRandomList() {
  [...richestPeople]
    .map((r) => ({ name: r, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map((r) => r.name)
    .forEach((val, i) => {
      const listItem = document.createElement("li");
      listItem.setAttribute("data-index", i);
      listItem.innerHTML = `<span class="number">${i + 1}</span>
      <div class="draggable" draggable="true">
        <p class="person-name">${val}</p>
        <i class="fas fa-grip-lines"></i>
      </div>`;
      listItems.push(listItem);
      draggableList.appendChild(listItem);
    });
  addEventListeners();
}

function addEventListeners() {
  const dragListItems = document.getElementsByClassName("draggable");
  const dragArea = document.querySelectorAll(".draggable-list li");

  for (let i = 0; i < dragListItems.length; i++) {
    dragListItems[i].addEventListener("dragstart", dragStart);
  }
  dragArea.forEach((d) => {
    d.addEventListener("dragover", dragOver);
    d.addEventListener("drop", drop);
    d.addEventListener("dragenter", dragEnter);
    d.addEventListener("dragleave", dragLeave);
  });
}

function checkOrder() {
  listItems.forEach((listItem, index) => {
    const personName = listItem.querySelector(".draggable").innerText.trim();

    if (personName !== richestPeople[index]) {
      listItem.classList.add("wrong");
    } else {
      listItem.classList.remove("wrong");
      listItem.classList.add("right");
    }
  });
}

check.addEventListener("click", checkOrder);
