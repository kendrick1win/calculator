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

// operator button function
document.querySelectorAll('.operator').forEach(button => {
  button.addEventListener('click', () => {
    // check if first number has a value
    // first time hitting operator button firstNumber will always be null
    if (firstNumber === null){
      firstNumber = parseFloat(displayValue);
    }
    else if (operator !== null && displayValue !== ''){
      secondNumber = parseFloat(displayValue);
      const result = operate(firstNumber, secondNumber);
      displayValue = result.toString();
      firstNumber = result;
    }
    // store the operator value
    operator = button.textContent;
    // reset display for the next input
    shouldResetDisplay = true;
  })
})

// equals button function
document.querySelector('.equals').addEventListener(click, () => {
  
})