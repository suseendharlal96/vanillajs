const clock = document.getElementsByClassName("clock")[0];
new Array(12).fill().forEach((_, i) => {
  const num = document.createElement("div");
  num.innerText = i + 1;
  num.classList.add("numbers");
  const deg = (i + 1) * 30;
  num.style.transform = `rotate(${deg}deg)`;
//   for (let i = 0; i < 3; i++) {
//     const pointer = document.createElement("div");
//     pointer.innerText = "s";
//     pointer.classList.add("pointer");
//     pointer.style.transform = `rotate(${deg + deg / 4 + i}deg)`;
//     num.append(pointer);
//   }
  clock.append(num);
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
