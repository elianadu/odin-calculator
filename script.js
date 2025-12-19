function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  console.log("hi");
  if (b == 0) {
    return "Cookie Monster has no cookies :(";
  }
  return a / b;
}

// make num1, num2, operator
let num1 = "empty";
let num2 = "empty";
let operator = "empty";
let output = "empty";
let numHasBeenClicked = false;
let opWasJustClicked = false;
let currOperator = "";

function operate(num1, num2, operator) {
  operator = operator.toString();
  num1 = Number(num1);
  num2 = Number(num2);
  if (operator === "add") return add(num1, num2);
  else if (operator === "subtract") return subtract(num1, num2);
  else if (operator === "multiply") return multiply(num1, num2);
  else if (operator === "divide") return divide(num1, num2);
  else if (operator === "equals") return;
  else return "invalid operator";
}

allButtons = Array.from(document.querySelectorAll("button"));
for (button of allButtons) {
  if (button.classList.contains("number")) {
    button.addEventListener("click", (e) => {
      if (opWasJustClicked || !numHasBeenClicked) {
        clearDisplay();
      }
      display.textContent += e.target.textContent;
      numHasBeenClicked = true;
      opWasJustClicked = false;
    });
  } else if (button === document.getElementById("clear")) {
    button.addEventListener("click", () => {
      clearDisplay();
      clearVariables();
      numberHasBeenClicked = false;
    });
  } else if (button.classList.contains("operator")) {
    button.addEventListener("click", (e) => {
      onOperatorClick(e.target.getAttribute("id"));
      opWasJustClicked = true;
    });
  }
}

function onOperatorClick(operator) {
  if (num1 === "empty" && !numHasBeenClicked) {
    clearDisplay();
  } else if (num1 === "empty" && numHasBeenClicked) {
    num1 = Number(display.textContent);
  } else if (!opWasJustClicked) {
    if (num2 !== "empty") num1 = output;
    num2 = Number(display.textContent);
    output = operate(num1, num2, currOperator);
    if (output === Number(output)) {
      output = Math.round(output * 100) / 100;
    }
    display.textContent = output;
    if (operator === "equals") {
      clearVariables();
    }
  }
  if (operator !== "equals") currOperator = operator;
}

function clearVariables() {
  num1 = "empty";
  num2 = "empty";
  output = "empty";
}

function clearDisplay() {
  display.textContent = "";
}
