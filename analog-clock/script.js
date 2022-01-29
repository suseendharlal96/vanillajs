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
  const div = document.createElement("div");
  const input = document.createElement("input");
  const name = document.createElement("span");
  input.type = "checkbox";
  input.id = t.name;
  input.checked = t.selected;
  div.addEventListener("click", function (e) {
    if (this.firstChild.checked && this.children[this.childElementCount-1].innerText === t.name) {
        clearInterval(t.interval);
        t.selected = false;
        this.firstChild.checked=false
    } else {
        t.selected = true;
        this.firstChild.checked=true
    }
    createClock();
  });
  // createClock()
  name.innerText = t.name;
  div.append(input, name);
  zoneContainer.append(div);
});

function createClock() {
  clockContainer.innerHTML = "";
  [...timeZones]
    .filter((t) => t.selected)
    .forEach((t, i) => {
      clearInterval(t.interval);
      const clockContent=document.createElement("div");
      const clock = document.createElement("div");
      clock.classList.add("clock");
      const hour = document.createElement("div");
      const min = document.createElement("div");
      const sec = document.createElement("div");

      hour.classList.add(...["hand", `hour-${t.name}`]);
      min.classList.add(...["hand", `min-${t.name}`]);
      sec.classList.add(...["hand", `sec-${t.name}`]);
      clock.append(hour, min, sec);
      const place = document.createElement("div");
      place.innerText = t.name;
      clockContent.append(...[place,clock])
      clockContainer.append(clockContent);

      new Array(12).fill().forEach((_, i) => {
        const numberContainer = document.createElement("div");
        const number = document.createElement("span");
        number.innerText = i + 1;
        numberContainer.classList.add("numbers");
        const deg = (i + 1) * 30;
        number.style.position = "absolute";
        number.style.transform = `translateX(-50%) rotate(${-1 * deg}deg)`;
        numberContainer.style.transform = `rotate(${deg}deg)`;
        numberContainer.append(number);
        clock.append(numberContainer);
      });

      t.interval = setInterval(() => {
        initClock();
      }, 1000);

      function initClock() {
        const time = new Date().toLocaleString('en-US', {
          timeZone: t.name,
        });
        const sec = new Date(time).getSeconds() / 60;
        const min = (sec + new Date(time).getMinutes()) / 60;
        const hr = (min + new Date(time).getHours()) / 12;
        setHandsPosition(sec, min, hr);
      }

      function setHandsPosition(s, m, h) {
        document.getElementsByClassName(`sec-${t.name}`)[0].style.transform = `translateX(-50%) rotate(${s * 360}deg)`;
        document.getElementsByClassName(`min-${t.name}`)[0].style.transform = `translateX(-50%) rotate(${m * 360}deg)`;
        document.getElementsByClassName(`hour-${t.name}`)[0].style.transform = `translateX(-50%) rotate(${h * 360}deg)`;
      }
      initClock();
    });
}

createClock();
