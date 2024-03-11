// functions for operations
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
  return a / b;
}

function percentage(a) {
  return a / 100;
}

// variables for operations
let operand1 = "";
let operand2 = "";
let operator = "";
let result = "";

function operate(operand1, operator, operand2) {
  if (operator === "+") {
    return add(operand1, operand2);
  } else if (operator === "-") {
    return subtract(operand1, operand2);
  } else if (operator === "x") {
    return multiply(operand1, operand2);
  } else if (operator === "÷") {
    return divide(operand1, operand2);
  } else if (operator === "%") {
    return percentage(operand1);
  }
}

let operationDisplay = document.querySelector(".operation-display");
let resultDisplay = document.querySelector(".result-display");
let numberButtons = document.querySelectorAll(".num-btn");
let operatorButtons = document.querySelectorAll(".op-btn");
let clearButton = document.querySelector(".btn-clear");
let equalsButton = document.querySelector(".btn-equals");
let decimalButton = document.querySelector(".btn-point");
let deleteButton = document.querySelector(".btn-delete");

// Iterates over number buttons instead of adding EventListener one by one
numberButtons.forEach((button) => {
  button.addEventListener("click", updateOperationDisplay);
});

function updateOperationDisplay(e) {
  if (operationDisplay.textContent.length < 13) {
    if (operator === "") {
      operand1 += e.target.textContent;
    } else {
      operand2 += e.target.textContent;
    }
    operationDisplay.textContent += e.target.textContent;
  } else {
    operationDisplay.textContent += "";
  }
}

// Iterates over Operator buttons instead of adding EventListener one by one
operatorButtons.forEach((button) => {
  button.addEventListener("click", addOperatorToDisplay);
});

function addOperatorToDisplay(e) {
  if (operand1 !== "" && operand2 !== "") {
    operand1 = operate(parseFloat(operand1), operator, parseFloat(operand2));
    operand2 = "";
    operationDisplay.textContent = operand1;
  }

  const lastChar = operationDisplay.textContent.trim().slice(-1);
  if (
    lastChar === "+" ||
    lastChar === "-" ||
    lastChar === "x" ||
    lastChar === "÷" ||
    lastChar === "%"
  ) {
    // If last character is an operator, replace it with the new one
    operationDisplay.textContent = operationDisplay.textContent.slice(0, -1);
  }
  operator = e.target.textContent;
  operationDisplay.textContent += operator;
}

// Add point(.) button with check so that its not more than one in each operand
decimalButton.addEventListener("click", () => {
  if (operator === "") {
    if (!operand1.includes(".")) {
      operand1 += ".";
      operationDisplay.textContent += ".";
    }
  } else {
    if (!operand2.includes(".")) {
      operand2 += ".";
      operationDisplay.textContent += ".";
    }
  }
});

// console.log(operand1 + ' ' + operator);

clearButton.addEventListener("click", () => {
  operand1 = "";
  operand2 = "";
  operator = "";
  result = "";
  operationDisplay.textContent = "";
  resultDisplay.textContent = "";
});

// Equals event handler
equalsButton.addEventListener("click", () => {
  if (operand1 !== "" && operand2 !== "") {
    result = operate(parseFloat(operand1), operator, parseFloat(operand2));
  } else if (operand1 === "" && operand2 !== "") {
    if (operator === "-") {
      operator = operator;
    } else {
      operator = "";
    }
    result = operator + operand2;
  } else if (operand1 !== "" && operand2 === "") {
    if (operator === "-") {
      operator = operator;
    } else {
      operator = "";
    }
    result = operator + operand1;
  }

  if (result.toString().length > 13) {
    result = parseFloat(result.toFixed(13));
  }

  resultDisplay.textContent = result;
  operand1 = "";
  operand2 = "";
  operator = "";
  operationDisplay.textContent = "";
});

// Delete button event handler
deleteButton.addEventListener("click", () => {
  if (operand2 !== "") {
    operand2 = operand2.slice(0, -1);
    operationDisplay.textContent = operationDisplay.textContent.slice(0, -1);
  } else if (operator !== "") {
    operator = "";
    operationDisplay.textContent = operationDisplay.textContent.slice(0, -1);
  } else if (operand1 !== "") {
    operand1 = operand1.slice(0, -1);
    operationDisplay.textContent = operationDisplay.textContent.slice(0, -1);
  } else {
    operationDisplay.textContent = "";
  }
});

// ### Chei!! Key Board Support is here, but.....let me say no more ###
// Some keys still don't respond like the operator keys,
// probably due to keyboard layout differences

document.addEventListener("keydown", ({ key }) => {
  const btn = (key) => document.querySelector(`.btn-${key}`);
  const triggerClick = (element) => element && element.click();

  if (!isNaN(key) || key === ".") triggerClick(btn(key));
  else if (["+", "-", "*", "/", "%"].includes(key)) triggerClick(btn(key));
  else if (key === "Enter") triggerClick(btn("equals"));
  else if (key === "Escape") triggerClick(btn("clear"));
  else if (key === "Backspace") triggerClick(btn("delete"));
});

numberButtons.forEach((button) =>
  button.classList.add(`btn-${button.textContent}`)
);
operatorButtons.forEach((button) =>
  button.classList.add(`btn-${button.textContent}`)
);
