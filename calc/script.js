import { Calculator, calcObj } from "./calc.js";
const calcContainer = document.getElementById("calc-container");

calcObj.forEach((item) => {
  const el = document.createElement("div");
  if (item.className !== "disp") el.innerText = item.name;
  el.classList.add(...["grid-item", item.className]);
  if (item.group) el.setAttribute(`data-${item.group}`, true);
  el.style.gridArea = item.className;
  calcContainer.append(el);
});

const upperText = document.createElement("div");
const lowerText = document.createElement("div");
const disp = document.getElementsByClassName("disp")[0];
disp.append(...[upperText, lowerText]);

const calc = new Calculator(upperText, lowerText);

document.querySelectorAll("[data-numbers]").forEach((el) => {
  el.addEventListener("click", ({ target: { innerText } }) => {
    calc.updateDisp(innerText);
  });
});
document.querySelectorAll("[data-calc]").forEach((el) => {
  el.addEventListener("click", ({ target: { innerText } }) => {
    calc.setOperation(innerText);
  });
});
document.querySelector("[data-clear]").addEventListener("click", () => {
  calc.clearDisp();
});
document.querySelector("[data-eval]").addEventListener("click", () => {
  calc.eval();
});
document.querySelector("[data-del]").addEventListener("click", () => {
  calc.delete();
});
