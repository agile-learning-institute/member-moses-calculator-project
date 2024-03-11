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
let operand1;
let operand2;
let operator;

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

// const oneBtn = document.querySelector(".btn-1");
// const twoBtn = document.querySelector(".btn-2");
// const threeBtn = document.querySelector(".btn-3");
// const fourBtn = document.querySelector(".btn-4");
// const fiveBtn = document.querySelector(".btn-5");
// const sixBtn = document.querySelector(".btn-6");
// const sevenBtn = document.querySelector(".btn-7");
// const eightBtn = document.querySelector(".btn-8");
// const nineBtn = document.querySelector(".btn-9");
// const zeroBtn = document.querySelector(".btn-0");
let numberButtons = document.querySelectorAll(".num-btn");
numberButtons.forEach((button) => {
  button.addEventListener("click", updateOperationDisplay);
});

// Buttons Event listeners
// oneBtn.addEventListener("click", updateOperationDisplay);

// Updates Operations Display
function updateOperationDisplay(e) {
  if (operationDisplay.textContent.length < 13) {
    operationDisplay.textContent += e.target.textContent;
  } else {
    operationDisplay.textContent += "";
  }
}

// Updates Results Display
// function updateResultDisplay() {}

// console.log(operationDisplay);
