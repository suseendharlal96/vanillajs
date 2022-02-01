export class Clock {
  constructor(div, place) {
    console.log("sad");
    this.clock = div;
    this.place = place;
  }
  createClock() {
    console.log("asda");
    this.clock.classList.add("clock");
    const hour = document.createElement("div");
    const min = document.createElement("div");
    const sec = document.createElement("div");

    hour.classList.add(...["hand", `hour-${this.place}`]);
    min.classList.add(...["hand", `min-${this.place}`]);
    sec.classList.add(...["hand", `sec-${this.place}`]);
    this.clock.append(hour, min, sec);
    console.log(this.clock);
  }
  getClock() {
    return this.clock;
  }
}

export class Hands {
  constructor(clock, timezone) {
    this.clock = clock;
    this.timeZone = timezone;
  }
  createHands() {
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
      this.clock.append(numberContainer);
    });
  }
  getTime() {
    const time = new Date().toLocaleString("en-US", {
      timeZone: this.timeZone.name,
    });
    const sec = new Date(time).getSeconds() / 60;
    const min = (sec + new Date(time).getMinutes()) / 60;
    const hr = (min + new Date(time).getHours()) / 12;
    this.setHandsPosition(sec, min, hr);
  }

  setHandsPosition(s, m, h) {
    document.getElementsByClassName(`sec-${this.timeZone.name}`)[0].style.transform = `translateX(-50%) rotate(${s * 360}deg)`;
    document.getElementsByClassName(`min-${this.timeZone.name}`)[0].style.transform = `translateX(-50%) rotate(${m * 360}deg)`;
    document.getElementsByClassName(`hour-${this.timeZone.name}`)[0].style.transform = `translateX(-50%) rotate(${h * 360}deg)`;
  }
}

export class Checkbox {
  constructor(timezone, createClock) {
    this.timezone = timezone;
    this.checkbox = null;
    this.createClock = createClock;
  }
  createCheckbox() {
    console.log(this.timezone);
    const div = document.createElement("div");
    const input = document.createElement("input");
    const name = document.createElement("span");
    input.type = "checkbox";
    input.id = this.timezone.name;
    input.checked = this.timezone.selected;
    let that = this;
    div.addEventListener("click", function (e) {
      if (this.firstChild.checked) {
        that.timezone.selected = true;
        input.checked = true;
      } else {
        clearInterval(that.timezone.interval);
        that.timezone.selected = false;
        input.checked = false;
      }
      that.createClock();
    });
    // createClock()
    name.id = this.timezone.name;
    name.innerText = this.timezone.name;
    div.append(input, name);
    this.checkbox = div;
  }
  getCheckbox() {
    return this.checkbox;
  }
}
