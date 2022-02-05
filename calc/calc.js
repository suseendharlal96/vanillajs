export class Calculator {
  constructor(upper, lower) {
    this.upper = upper;
    this.lower = lower;
    this.operation = null;
  }

  clearDisp() {
    this.upper.innerText = "";
    this.lower.innerText = "";
    this.operation = null;
  }

  delete() {
    if (this.lower.innerText) {
      this.lower.innerText = this.lower.innerText.slice(0, -1);
    }
  }

  setOperation(operation) {
    this.operation = operation;
    const lowerText = this.lower.innerText;
    if (!this.upper.innerText.split(" ")[1]) this.lower.innerText = "";
    this.upper.innerText = `${this.upper.innerText.split(" ")[1] ? this.upper.innerText.split(" ")[0] : lowerText}  ${this.operation}`;
  }

  eval() {
    let result = 0;
    if (!this.lower.innerText) return;
    switch (this.operation) {
      case "+":
        result = +this.upper.innerText.split(" ")[0] + +this.lower.innerText;
        break;
      case "-":
        result = +this.upper.innerText.split(" ")[0] - +this.lower.innerText;
        break;
      case "*":
        result = +this.upper.innerText.split(" ")[0] * +this.lower.innerText;
        break;
      case "/":
        result = +this.upper.innerText.split(" ")[0] / +this.lower.innerText;
        break;
      default:
    }
    this.upper.innerText = "";
    this.lower.innerText = result;
  }

  updateDisp(value) {
    if ((value === "." && this.lower.innerText === "") || (value === "." && this.lower.innerText.includes("."))) return;
    this.lower.innerText += value;
  }
}

export const calcObj = [
  {
    name: "disp",
    className: "disp",
  },
  {
    name: "AC",
    className: "ac",
    group: "clear",
  },
  {
    name: "DEL",
    className: "del",
    group: "del",
  },
  {
    name: "/",
    className: "divide",
    group: "calc",
  },
  {
    name: "*",
    className: "mul",
    group: "calc",
  },
  {
    name: "+",
    className: "add",
    group: "calc",
  },
  {
    name: "-",
    className: "sub",
    group: "calc",
  },
  {
    name: "=",
    className: "equal",
    group: "eval",
  },
  {
    name: ".",
    className: "point",
    group: "numbers",
  },
  {
    name: "0",
    className: "zero",
    group: "numbers",
  },
  {
    name: "1",
    className: "one",
    group: "numbers",
  },
  {
    name: "2",
    className: "two",
    group: "numbers",
  },
  {
    name: "3",
    className: "three",
    group: "numbers",
  },
  {
    name: "4",
    className: "four",
    group: "numbers",
  },
  {
    name: "5",
    className: "five",
    group: "numbers",
  },
  {
    name: "6",
    className: "six",
    group: "numbers",
  },
  {
    name: "7",
    className: "seven",
    group: "numbers",
  },
  {
    name: "8",
    className: "eight",
    group: "numbers",
  },
  {
    name: "9",
    className: "nine",
    group: "numbers",
  },
];
