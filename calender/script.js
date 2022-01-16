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
  const arr = Array.from({ length: 1 }).map(() => new Array(7));

  initCalenderEl(0, 1);

  const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  for (let i = 0; i < arr[0].length; i++) {
    const el = document.querySelector(`[data-id="0_${i}"]`);
    arr[0][i] = week[i];
    el.innerText = week[i];
  }

  let rowNum = arr.length;
  let startDate = 1;
  while (startDate <= endDate) {
    const colNum = findColumn(new Date(year, month, startDate).toString().split(" ")[0], arr[0]);
    if (rowNum === arr.length) {
      initCalenderEl(arr.length, arr.length + 1);
      arr.push(new Array(7));
    }
    const el = document.querySelector(`[data-id="${rowNum}_${colNum}"]`);
    arr[rowNum][colNum] = startDate;
    if (isCurrentDate(startDate, new Date(year, month, 1).toString().split(" ")[1], year)) {
      el.classList.add("current-date");
    }
    el.innerText = startDate;
    if (colNum === 6) rowNum++;
    startDate++;
  }

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

  function findColumn(weekName, firstRow) {
    for (let i = 0; i < firstRow.length; i++) {
      if (firstRow[i] === weekName) {
        return i;
      }
    }
  }

  function isCurrentDate(date, month, year) {
    const today = new Date();
    const todayDate = today.toString().split(" ")[2];
    const todayMonth = today.toString().split(" ")[1];
    const todayYear = today.toString().split(" ")[3];
    return todayDate === date.toString() && todayMonth === month && todayYear === year.toString();
  }
}
