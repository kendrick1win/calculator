// Decalre variables
let firstNumber = null;
let secondNumber = null;
let operator = null;
let displayValue = '';
let shouldResetDisplay = false;

// Operate function
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

// updating display
function updateDisplay() {
  document.getElementById('display').textContent = displayValue;
}

// digit button function
document.querySelectorAll('.digit').forEach(button => {
  button.addEventListener('click', () => {
    // check if display should be reset
    if (shouldResetDisplay){
      displayValue = '';
      shouldResetDisplay = false
    }
    displayValue += button.textContent;
    updateDisplay();
  })
  
})