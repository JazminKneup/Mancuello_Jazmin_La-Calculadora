var currentInput = '0';
var operator = null;
var previousInput = null;
var displayDiv = document.querySelector("#display");

function press(number) {
    if (currentInput === '0' && number !== '.') {
        currentInput = '' + number;
    } else {
        currentInput += number;
    }
    updateDisplay();
}

function setOP(op) {
    if (operator !== null) {
        calculate();
    }
    previousInput = currentInput;
    currentInput = '0';
    operator = op;
}

function calculate() {
    if (operator === null || previousInput === null) {
        return;
    }
    var result;
    switch (operator) {
        case '+':
            result = parseFloat(previousInput) + parseFloat(currentInput);
            break;
        case '-':
            result = parseFloat(previousInput) - parseFloat(currentInput);
            break;
        case '*':
            result = parseFloat(previousInput) * parseFloat(currentInput);
            break;
        case '/':
            if (currentInput === '0') {
                result = "Error"; // Handle division by zero
            } else {
                result = parseFloat(previousInput) / parseFloat(currentInput);
            }
            break;
    }
    currentInput = result.toString();
    operator = null;
    previousInput = null;
    updateDisplay();
}

function clr() {
    currentInput = '0';
    operator = null;
    previousInput = null;
    updateDisplay();
}

function updateDisplay() {
    displayDiv.innerText = currentInput;
}
