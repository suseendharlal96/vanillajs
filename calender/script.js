const containerEl = document.getElementsByClassName("container")[0];
const calenderEl = document.getElementById("calender");
const currentMonthEl = document.getElementById("currentmonth");
let currYear = new Date().getFullYear();
let currMonth = new Date().getMonth();

createCalender(currYear, currMonth);

document.querySelectorAll("button").forEach((btn) => {
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
    createCalender(currYear, currMonth);
  });
});

function createCalender(year, month) {
  calenderEl.innerHTML = "";
  currentMonthEl.innerText = new Date(year, month, 1).toString().split(" ")[1] + " " + year;
  const endDate = new Date(year, month + 1, 0).getDate();

  initCalenderEl(0, 1);

  const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  for (let i = 0; i < week.length; i++) {
    const el = document.querySelector(`[data-id="0_${i}"]`);
    el.innerText = week[i];
  }

  let rowNum = calenderEl.childElementCount;
  let startDate = 1;
  while (startDate <= endDate) {
    const colNum = findColumn(new Date(year, month, startDate).toString().split(" ")[0], week);
    if (rowNum === calenderEl.childElementCount) {
      initCalenderEl(calenderEl.childElementCount, calenderEl.childElementCount + 1);
    }
    const el = document.querySelector(`[data-id="${rowNum}_${colNum}"]`);
    if (isToday(startDate, new Date(year, month, 1).toString().split(" ")[1], year)) {
      el.classList.add("current-date");
    }
    el.innerText = startDate;
    if (colNum === 6) rowNum++;
    startDate++;
  }
  populatePrevNextMonth();

  function initCalenderEl(start, end) {
    for (let i = start; i < end; i++) {
      const row = document.createElement("div");
      row.classList.add("row");
      for (let j = 0; j < 7; j++) {
        const col = document.createElement("span");
        col.classList.add("col");
        col.setAttribute("data-id", `${i}_${j}`);
        row.append(col);
      }
      calenderEl.append(row);
    }
  }

  function findColumn(weekName, week) {
    for (let i = 0; i < week.length; i++) {
      if (week[i] === weekName) {
        return i;
      }
    }
  }

  function isToday(date, month, year) {
    const today = new Date();
    const todayDate = today.toString().split(" ")[2];
    const todayMonth = today.toString().split(" ")[1];
    const todayYear = today.toString().split(" ")[3];
    return todayDate === date.toString() && todayMonth === month && todayYear === year.toString();
  }

  function populatePrevNextMonth() {
    let prevMonth = new Date(year, month, 0).getDate();
    for (let i = 6; i >= 0; i--) {
      if (!calenderEl.children[1].children[i].innerText) {
        const col = calenderEl.children[1].children[i];
        col.innerText = prevMonth--;
        col.classList.add("blur");
        col.addEventListener("click", () => {
          currMonth -= 1;
          if (currMonth < 0) {
            currMonth = 11;
            currYear -= 1;
          }
          createCalender(currYear, currMonth);
        });
      }
    }
    let nextMonth = 1;
    for (let i = 0; i < 7; i++) {
      if (!calenderEl.children[calenderEl.children.length - 1].children[i].innerText) {
        const col = calenderEl.children[calenderEl.children.length - 1].children[i];
        col.innerText = nextMonth++;
        col.classList.add("blur");
        col.addEventListener("click", () => {
          currMonth++;
          if (currMonth === 12) {
            currYear += 1;
          }
          currMonth = currMonth % 12;
          createCalender(currYear, currMonth);
        });
      }
    }
  }
}