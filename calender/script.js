import { getElementsByClassName, getElementById } from "./utility.js";
import Calender from "./Calender.js";

const containerEl = getElementsByClassName("container");
const modal = getElementById("modal-overlay");
const modalBody = getElementsByClassName("modal-body");
const saveBtn = getElementById("save");
const titleInput = getElementById("title");
const desc = getElementById("desc");
const eventDate = getElementById("event-date");
const cancelBtn = getElementById("cancel");
const calenderEl = getElementById("calender");
const currentMonthEl = getElementById("currentmonth");
let currYear = new Date().getFullYear();
let currMonth = new Date().getMonth();

const calender = new Calender(calenderEl, currentMonthEl);

calender.generateLayout(currYear, currMonth);

cancelBtn.addEventListener("click", (e) => {
  modal.hidden = true;
  e.stopPropagation();
});

saveBtn.addEventListener("click", () => {
  const eventArr = (localStorage.getItem("event") && JSON.parse(localStorage.getItem("event"))) || [];
  const eventData = {
    title: titleInput.value,
    desc: desc.value,
    date: modal.dataset.selected,
  };
  if (eventArr && eventArr.length > 0) {
    const eventExists = eventArr.find((data) => data.date === modal.dataset.selected);
    if (eventExists) {
      eventExists["title"] = titleInput.value;
      eventExists["desc"] = desc.value;
    } else {
      eventArr.push(eventData);
    }
  } else {
    eventArr.push(eventData);
  }
  console.log(document.body.getAttribute("data-date"), modal.dataset.selected);
  document.querySelector(`[data-date='${modal.dataset.selected}']`).style.backgroundColor = "lightgreen";
  localStorage.setItem("event", JSON.stringify(eventArr));
  modal.hidden = true;
});

modal.addEventListener("click", (e) => {
  if (!e.target.contains(modalBody) || e.target === modalBody) return;
  modal.hidden = true;
});

calender.calenderEl.addEventListener("click", (e) => {
  if (!e.target.hasAttribute("data-date")) return;
  e.stopPropagation();
  console.log("clicked", e.target.dataset.date);
  eventDate.innerText = e.target.dataset.date.split(" ").slice(0, 4).join(" ");
  const eventData = localStorage.getItem("event") && JSON.parse(localStorage.getItem("event"));
  if (eventData) {
    const eventExists = eventData.find((data) => data.date === e.target.dataset.date);

    if (eventExists) {
      titleInput.value = eventExists["title"];
      desc.value = eventExists["desc"];
    } else {
      titleInput.value = "";
      desc.value = "";
    }
  }
  modal.setAttribute("data-selected", e.target.dataset.date);
  modal.hidden = false;
});

document.querySelectorAll("button").forEach((btn) => {
  if (!btn.closest("#btnContainer")) return;
  btn.addEventListener("click", (e) => {
    if (btn.id === "next") {
      currMonth++;
      if (currMonth === 12) {
        currYear += 1;
      }
      currMonth = currMonth % 12;
    } else if (btn.id === "prev") {
      currMonth -= 1;
      if (currMonth < 0) {
        currMonth = 11;
        currYear -= 1;
      }
    } else {
      currYear = new Date().getFullYear();
      currMonth = new Date().getMonth();
    }
    calender.generateLayout(currYear, currMonth);
  });
});
