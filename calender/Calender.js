class Calender {
  constructor(calenderEl, currentMonthEl) {
    this.calenderEl = calenderEl;
    this.currentMonthEl = currentMonthEl;
  }

  //   set calenderEl(calenderEl) {
  //       console.log(this.calenderEl,{calenderEl});
  //       this.calenderEl = calenderEl;
  //     }

  //     get calenderEl() {
  //       console.log(this.calenderEl,{calenderEl});
  //     return this.calenderEl;
  //   }

  generateLayout(year, month) {
    this.calenderEl.innerHTML = "";
    this.currentMonthEl.innerText = new Date(year, month, 1).toString().split(" ")[1] + " " + year;
    const endDate = new Date(year, month + 1, 0).getDate();

    this.initCalender(0, 1);

    const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    for (let i = 0; i < week.length; i++) {
      const el = document.querySelector(`[data-id="0_${i}"]`);
      el.innerText = week[i];
    }

    let rowNum = this.calenderEl.childElementCount;
    let startDate = 1;
    while (startDate <= endDate) {
      const colNum = this.findColumn(new Date(year, month, startDate).toString().split(" ")[0], week);
      if (rowNum === this.calenderEl.childElementCount) {
        this.initCalender(this.calenderEl.childElementCount, this.calenderEl.childElementCount + 1);
      }
      const el = document.querySelector(`[data-id="${rowNum}_${colNum}"]`);
      if (this.isToday(startDate, new Date(year, month, 1).toString().split(" ")[1], year)) {
        el.classList.add("current-date");
      }
      el.setAttribute("data-date", new Date(year, month, startDate));
      const eventData = localStorage.getItem("event") && JSON.parse(localStorage.getItem("event"));
      if (eventData) {
        const eventExists = eventData.find((data) => data.date === new Date(year, month, startDate).toString());
        // console.log({eventExists},new Date(year,month,startDate))
        if (eventExists) {
          el.style.backgroundColor = "lightgreen";
        }
      }
      el.innerText = startDate;
      if (colNum === 6) rowNum++;
      startDate++;
    }
    this.populatePrevNextMonth(year, month);
  }

  initCalender(start, end) {
    for (let i = start; i < end; i++) {
      const row = document.createElement("div");
      row.classList.add("row");
      for (let j = 0; j < 7; j++) {
        const col = document.createElement("span");
        col.classList.add("col");
        col.setAttribute("data-id", `${i}_${j}`);
        row.append(col);
      }
      this.calenderEl.append(row);
    }
  }

  findColumn(weekName, week) {
    for (let i = 0; i < week.length; i++) {
      if (week[i] === weekName) {
        return i;
      }
    }
  }

  populatePrevNextMonth(year, month) {
    //   console.log({year,month});
    let currYear=year
    let currMonth=month
    let prevMonth = new Date(year, month, 0).getDate();
    for (let i = 6; i >= 0; i--) {
      if (!this.calenderEl.children[1].children[i].innerText) {
        const col = this.calenderEl.children[1].children[i];
        col.setAttribute("data-date", new Date(year, month - 1, prevMonth));
        col.innerText = prevMonth--;
        col.classList.add("blur");
        col.addEventListener("click", () => {
          currMonth -= 1;
          if (currMonth < 0) {
            currMonth = 11;
            currYear -= 1;
          }
          this.generateLayout(currYear, currMonth);
        });
      }
    }
    let nextMonth = 1;
    for (let i = 0; i < 7; i++) {
      if (!this.calenderEl.children[this.calenderEl.children.length - 1].children[i].innerText) {
        const col = this.calenderEl.children[this.calenderEl.children.length - 1].children[i];
        col.innerText = nextMonth++;
        col.classList.add("blur");
        col.setAttribute("data-date", new Date(year, month - 1, prevMonth));
        col.addEventListener("click", () => {
          currMonth++;
          if (currMonth === 12) {
            currYear += 1;
          }
          currMonth = currMonth % 12;
          this.generateLayout(currYear, currMonth);
        });
      }
    }
  }

  isToday(date, month, year) {
    const today = new Date();
    const todayDate = today.toString().split(" ")[2];
    const todayMonth = today.toString().split(" ")[1];
    const todayYear = today.toString().split(" ")[3];
    return todayDate === (date < 10 ? "0" + date : date.toString()) && todayMonth === month && todayYear === year.toString();
  }
}

export default Calender;
