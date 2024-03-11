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

// Iterates over number buttons instead of adding EventListener one by one
numberButtons.forEach((button) => {
  button.addEventListener("click", updateOperationDisplay);
});

function updateOperationDisplay(e) {
  if (operationDisplay.textContent.length < 13) {
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
  operator = e.target.textContent;
  operationDisplay.textContent += operator;
  console.log(operand1 + " " + operator);
}

// Updates Results Display
// function updateResultDisplay() {}

// console.log(operand1 + ' ' + operator);
