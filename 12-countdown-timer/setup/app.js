const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const date = new Date();
const giveAwayText = document.getElementsByClassName("giveaway")[0];
const deadLine = document.getElementsByClassName("deadline")[0];
["day(s)", "hours", "minutes", "seconds"].forEach((d) => {
  const display = document.createElement("div");
  display.classList.add("deadline-format");
  const div = document.createElement("div");
  const heading = document.createElement("h4");
  heading.classList.add("days");
  const span = document.createElement("span");
  span.textContent = d;
  div.appendChild(heading);
  div.appendChild(span);
  display.appendChild(div);
  deadLine.appendChild(display);
});

function getTimeFormat(date) {
  let hr = date.getHours();
  let min = date.getMinutes();
  const ampm = hr <= 12 ? "am" : "pm";
  hr %= 12;
  hr = hr ? hr : "00";
  min = min < 10 ? "0" + min : min;
  return hr + ":" + min + ampm;
}

const offerEndDate = new Date("2021/09/19");
let timeDiff;
let countDown = setInterval(calcRemainingTime, 1000);
calcRemainingTime();

function calcRemainingTime() {
  const futureDate = new Date(date.getFullYear(), date.getMonth(), new Date().getDate()+10, 1, 20, 0);
  timeDiff = futureDate.getTime() - new Date().getTime();
  // console.log(timeDiff);

  const dayDiff = Math.floor(timeDiff / (24 * 60 * 60 * 1000));
  const hrDiff = Math.floor((timeDiff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  const minDiff = Math.floor((timeDiff % (60 * 60 * 1000)) / (60 * 1000));
  const secDiff = Math.floor((timeDiff % (60 * 1000)) / 1000);
  // console.log({ dayDiff, hrDiff, minDiff, secDiff });
  giveAwayText.textContent = `giveaway ends on ${weekdays[futureDate.getDay()]}, ${futureDate.getDate()} ${
    months[futureDate.getMonth()]
  } ${futureDate.getFullYear()}, ${getTimeFormat(futureDate)}`;
  if (timeDiff < 0) {
    // if (countDown) {
    clearInterval(countDown);
    // }
    deadLine.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
  } else {
    [dayDiff, hrDiff, minDiff, secDiff].forEach((d, i) => {
      document.getElementsByClassName("days")[i].textContent = d;
    });
  }
}
