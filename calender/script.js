function createCalender(year, month) {
  console.log(month);
  const totalDays = new Date(year, month + 1, 0).getDate();
  const totalRows = Math.ceil(totalDays / 7);

  const arr = Array.from({ length: totalRows + 1 }).map(() => new Array(7));

  console.log(arr);
  const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  for (let i = 0; i < arr[0].length; i++) {
    arr[0][i] = week[i];
  }

  let rowNum = 1;
  let date = 1;
  while (date <= totalDays) {
    console.log(new Date(year, month, date));
    const colNum = findColumn(new Date(year, month, date).toString().split(" ")[0], arr[0]);
    if (rowNum === arr.length) arr.push(new Array(7));
    arr[rowNum][colNum] = date;
    if (colNum === 6) rowNum++;
    date++;
  }

  function findColumn(weekName, firstRow) {
    for (let i = 0; i < firstRow.length; i++) {
      console.log(firstRow[i], weekName);
      if (firstRow[i] === weekName) {
        return i;
      }
    }
  }
}
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
    } else {
      currMonth -= 1;
      if (currMonth < 0) {
        currMonth = 11;
        currYear -= 1;
      }
    }
    createCalender(currYear, currMonth);
  });
});
