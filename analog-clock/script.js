const clock = document.getElementsByClassName("clock")[0];
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

setInterval(() => {
  initClock();
}, 1000);

function initClock() {
  const time = new Date();
  const sec = time.getSeconds() / 60;
  const min = (sec + time.getMinutes()) / 60;
  const hr = (min + time.getHours()) / 12;
  setHandsPosition(sec, min, hr);
}

function setHandsPosition(s, m, h) {
  // console.log( document.getElementsByClassName("sec")[0]);
  document.getElementsByClassName("sec")[0].style.transform = `translateX(-50%) rotate(${s * 360}deg)`;
  document.getElementsByClassName("min")[0].style.transform = `translateX(-50%) rotate(${m * 360}deg)`;
  document.getElementsByClassName("hour")[0].style.transform = `translateX(-50%) rotate(${h * 360}deg)`;
}
initClock();
