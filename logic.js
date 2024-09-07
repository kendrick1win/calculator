function add(num1, num2){
    return num1 + num2;
}
function subtract(num1, num2){
    return num1 - num2;
}
function multiply(num1, num2){
    return num1 * num2;
}
function divide(num1, num2){
    if (num2 === 0){
        return "Error, Can't divide by 0."
    }
    return num1/num2;
}

let firstNumber = null;
let secondNumber = null;
let operator = null;
let displayValue = '';
let shouldResetDisplay = false;

function operate(operator, a, b) {
    if (operator === '+') {
      return add(a, b);
    } else if (operator === '-') {
      return subtract(a, b);
    } else if (operator === '*') {
      return multiply(a, b);
    } else if (operator === '/') {
      return divide(a, b);
    } else {
      return null; // In case the operator is not valid
    }
  }

function updateDisplay() {
  document.getElementById('display').textContent = displayValue;
}

function clearCalculator() {
  firstNumber = null;
  secondNumber = null;
  operator = null;
  displayValue = '0';
  updateDisplay();
}
document.querySelector('.clear').addEventListener('click', clearCalculator);


document.querySelectorAll('.digit').forEach(button => {
  button.addEventListener('click', () => {
      if (shouldResetDisplay) {
          displayValue = '';
          shouldResetDisplay = false;
      }
      displayValue += button.textContent;
      updateDisplay();
  });
});

// round function
function roundResult(result) {
  return Math.round(result * 1000) / 1000;  // Rounds to 3 decimal places
}

// Set functionality for operator buttons
document.querySelectorAll('.operator').forEach(button => {
  button.addEventListener('click', () => {
    if (firstNumber === null) {
      // First number not set, so store the first number
      firstNumber = parseFloat(displayValue);
    } else if (operator !== null && displayValue === '') {
      // If operator is pressed again before entering a second number, reset calculator
      clearCalculator();
      return;
    } else {
      // If a second number has been entered, perform the calculation
      secondNumber = parseFloat(displayValue);
      const result = operate(operator, firstNumber, secondNumber);
      displayValue = roundResult(result).toString();
      updateDisplay();
      firstNumber = result;
    }

    // Store the new operator and prepare for the next number input
    operator = button.textContent;
    shouldResetDisplay = true;  // Reset the display for the next input
  });
});



// Handle the equals button
document.querySelector('.equals').addEventListener('click', () => {
  if (firstNumber !== null && operator !== null) {
      secondNumber = parseFloat(displayValue);
      const result = operate(operator, firstNumber, secondNumber);
      displayValue = roundResult(result).toString();
      updateDisplay();
      firstNumber = result;
      operator = null;
      secondNumber = null;
      shouldResetDisplay = true;
  }
});

// Functionality for the decimal button
document.querySelector('.decimal').addEventListener('click', () => {
  if (!displayValue.includes('.')) {
      displayValue += '.';
      updateDisplay();
  }
});