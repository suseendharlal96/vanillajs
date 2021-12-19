const calcButtons = [
  { val: "AC", dataset: "all-clear" },
  { val: "DEL", dataset: "delete" },
  { val: "/", dataset: "operation" },
  { val: ".", dataset: "number" },
  { val: "0", dataset: "number" },
  { val: "=", dataset: "equals" },
];
const operations = ["*", "+", "-"];
const matrix = Array.from({ length: 3 }).map((_, i) => new Array(3).fill(i + 1));

const calcGrid = document.getElementsByClassName("calc-grid")[0];

(() => {
  for (let i = 0; i < 3; i++) {
    const button = document.createElement("button");
    button.innerText = calcButtons[i].val;
    if (calcButtons[i].val === "AC") {
      button.classList.add("span-two");
    }
    button.setAttribute(`data-${calcButtons[i].dataset}`, "");
    calcGrid.append(button);
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const button = document.createElement("button");
      button.innerText = i * 3 + (j + 1);
      button.setAttribute(`data-number`, "");
      calcGrid.append(button);
    }
    const button = document.createElement("button");
    button.innerText = operations[i];
    button.setAttribute(`data-operation`, "");
    calcGrid.append(button);
  }
  for (let i = 3; i < calcButtons.length; i++) {
    const button = document.createElement("button");
    button.innerText = calcButtons[i].val;
    if (calcButtons[i].val === "=") {
      button.classList.add("span-two");
    }
    button.setAttribute(`data-${calcButtons[i].dataset}`, "");
    calcGrid.append(button);
  }
})();

class Calculator {
  constructor(prev, curr) {
    this.prev = prev;
    this.curr = curr;
    this.clear();
  }

  clear() {
    this.currentOperand = "";
    this.prevOperand = "";
    this.operation = undefined;
  }
  delete() {
    console.log("del");
    this.currentOperand = this.currentOperand.slice(0, -1);
  }
  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return;
    this.currentOperand = this.currentOperand + number;
  }
  chooseOperation(operation) {
    if (this.currentOperand === "") return;
    if (this.prevOperand !== "") {
      this.compute();
    }
    this.operation = operation;
    this.prevOperand = this.currentOperand;
    this.currentOperand = "";
  }
  compute() {
    let computation;
    const prev = +this.prevOperand;
    const curr = +this.currentOperand;
    if (isNaN(prev) || isNaN(curr)) return;
    switch (this.operation) {
      case "*":
        computation = prev * curr;
        break;
      case "/":
        computation = prev / curr;
        break;
      case "+":
        computation = prev + curr;
        break;
      case "-":
        computation = prev - curr;
        break;
      default:
        return;
    }
    this.currentOperand = computation;
    this.operation = undefined;
    this.prevOperand = "";
  }

  addCommaSeperator(num) {
      console.log({num});
    const integer = num.toString().split(".")[0];
    const decimal = num.toString().split(".")[1];
    let finalDisp = "";
    if (isNaN(integer)) {
      finalDisp = "";
    } else {
      finalDisp = integer.toLocaleString("en", { maximumFractionDigits: 0 });
    }
    if (decimal !== null&&decimal!==undefined) {
      return `${finalDisp}.${decimal||''}`;
    } else {
      return finalDisp;
    }
  }

  updateDisp() {
    console.log(this.curr);
    this.curr.innerText = this.addCommaSeperator(this.currentOperand);
    if (this.operation !== undefined) {
      this.prev.innerText = `${this.addCommaSeperator(this.prevOperand)} ${this.operation || ""}`;
    } else {
      this.prev.innerText = "";
    }
  }
}

const numberBtns = document.querySelectorAll("[data-number]");
const operationBtns = document.querySelectorAll("[data-operation]");
const equalsBtn = document.querySelector("[data-equals]");
const delBtn = document.querySelector("[data-delete]");
const allClearBtn = document.querySelector("[data-all-clear]");
const prev = document.querySelector("[data-prev-operand]");
const curr = document.querySelector("[data-curr-operand]");

function handleClick() {
  console.log("clicked");
}

const calc = new Calculator(prev, curr);

numberBtns.forEach((btn) => {
  //   console.log(btn.innerText);
  btn.addEventListener("click", () => {
    calc.appendNumber(btn.innerText);
    calc.updateDisp();
  });
});
operationBtns.forEach((btn) => {
  //   console.log(btn.innerText);
  btn.addEventListener("click", () => {
    calc.chooseOperation(btn.innerText);
    calc.updateDisp();
  });
});
equalsBtn.addEventListener("click", () => {
  calc.compute();
  calc.updateDisp();
});
allClearBtn.addEventListener("click", () => {
  calc.clear();
  calc.updateDisp();
});
delBtn.addEventListener("click", () => {
  calc.delete();
  calc.updateDisp();
});
