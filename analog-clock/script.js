import { Checkbox, Clock, Hands } from "./utility.js";

const clockContainer = document.getElementsByClassName("clock-container")[0];
const zoneContainer = document.getElementsByClassName("timezones")[0];
// let interval;

const timeZones = [
  {
    name: "Europe/Andorra",
    selected: true,
    interval: 1,
  },
  {
    name: "Asia/Dubai",
    selected: false,
    interval: 2,
  },
  {
    name: "Asia/Kabul",
    selected: true,
    interval: 3,
  },
  {
    name: "America/New_York",
    selected: true,
    interval: 4,
  },
  {
    name: "Europe/Moscow",
    selected: true,
    interval: 5,
  },
  {
    name: "Europe/Dublin",
    selected: false,
    interval: 6,
  },
  {
    name: "Africa/Johannesburg",
    selected: true,
    interval: 7,
  },

  {
    name: "Asia/Kolkata",
    selected: true,
    interval: 8,
  },
];

timeZones.forEach((t) => {
  const checkbox = new Checkbox(t, createClock);
  checkbox.createCheckbox();
  zoneContainer.append(checkbox.getCheckbox());
});

function createClock() {
  clockContainer.innerHTML = "";
  [...timeZones]
    .filter((t) => t.selected)
    .forEach((t, i) => {
      clearInterval(t.interval);
      // Clock
      const clock = new Clock(document.createElement("div"), t.name);
      clock.createClock();
      console.log({ clock });
      const clockContent = document.createElement("div");
      const place = document.createElement("div");
      place.innerText = t.name;
      clockContent.append(...[place, clock.getClock()]);
      clockContainer.append(clockContent);

      // Clock hands
      const hands = new Hands(clock.getClock(), t);
      hands.createHands();
      t.interval = setInterval(() => {
        hands.getTime();
      }, 1000);
      hands.getTime();
    });
}

createClock();
