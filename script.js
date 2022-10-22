let aValue = '';
let bValue = '';
let currentOperator = '';
let resetDisplay = true;

const numbers = document.querySelectorAll('.num');
const operators = document.querySelectorAll('.ops');
const decimalButton = document.getElementById('dec');
const deleteButton = document.getElementById('delete');
const clearButton = document.getElementById('clear');
const equalsButton = document.getElementById('equals');

const mainDisplay = document.getElementById('display');
const tapeDisplay = document.getElementById('tape');

numbers.forEach((num) => num.addEventListener('click', () => toDisplay(num.textContent)));
operators.forEach((operator) => operator.addEventListener('click', () => setOperator(operator.textContent)));
decimalButton.addEventListener('click', () => addDecimal());
deleteButton.addEventListener('click', () => backSpace());
clearButton.addEventListener('click', () => clearAll());
equalsButton.addEventListener('click', () => evaluate());
window.addEventListener('keydown', (e) => getKeyValue(e.key));

function getKeyValue(key) {
    if (key === '/' || key === '*' || key === '-' || key === '+') {
        setOperator(key);
    } else if (key === '.') {
        addDecimal();
    } else if (key >= 0 || key <= 9) {
        toDisplay(key);
    } else if (key === 'Enter') {
        evaluate();
    } else if (key === 'Delete' || key === 'Clear') {
        clearAll();
    } else if (key === 'Backspace') {
        backSpace();
    }
}

function addDecimal() {
    if (!resetDisplay && mainDisplay.textContent.replace('.', '') === mainDisplay.textContent) {
        mainDisplay.textContent += '.';
    } else if (resetDisplay || mainDisplay.textContent === '0') {
        mainDisplay.textContent = '0.'
        resetDisplay = false;
    }
}

function toDisplay(e) {
    if (resetDisplay || mainDisplay.textContent === '0') {
        mainDisplay.textContent = e;
        resetDisplay = false;
    } else {
        mainDisplay.textContent += e;
    }
}

function backSpace() {
    if (!resetDisplay || mainDisplay.textContent === '0') {
        mainDisplay.textContent = mainDisplay.textContent.slice(0, -1);
        if (mainDisplay.textContent.length < 1) {
            mainDisplay.textContent = 0;
        }
    }
}

function setOperator(op) {
    if (currentOperator === '') {
        aValue = mainDisplay.textContent;
        currentOperator = op;
        toTape();
        resetDisplay = true;
    } else {
        if (resetDisplay) {
            currentOperator = op;
            toTape();
        } else {
        currentOperator = op;
        evaluate();
        }
    }
}

function toTape(input) {
    let msg;
    if (bValue === '') {
        msg = `${aValue} ${currentOperator}`;
        tapeDisplay.textContent = msg;
    } else {
        msg = `${aValue.toString()} ${currentOperator.toString()}  ${bValue.toString()} = ${input}`;
        tapeDisplay.textContent = msg;
    }
    console.log(msg);
}

function clearAll() {
    aValue = '';
    bValue = '';
    currentOperator = '';
    resetDisplay = true;
    mainDisplay.textContent = '0';
    tapeDisplay.textContent = '';
}

function evaluate() {
    if (currentOperator === '') {
        return;
    } else {
        bValue = mainDisplay.textContent;
        operate(currentOperator, aValue, bValue);
        currentOperator = '';
        bValue = '';
        aValue = mainDisplay.textContent;
        resetDisplay = true;
    }
}

// meds are kicking in, so any code beyond this point could be sus

// calculation functions - DO NOT EDIT --------------
function add(a, b) {
    return parseInt(a) + parseInt(b);
}

function subtract(a, b) {
    return parseInt(a) - parseInt(b);
}

function multiply(a, b) {
    return parseInt(a) * parseInt(b);
}

function divide(a, b) {
    return parseInt(a) / parseInt(b);
}

function operate(operator, a, b) {
    let result;
    switch(operator) {
        case '+':
            result = add(a, b);
            break;
        case '-':
            result = subtract(a, b);
            break;
        case '*':
            result = multiply(a, b);
            break;
        case '×':
            result = multiply(a, b);
            break;
        case '/':
            if (a === 0){
                result = "You can't divide by 0!";
                break;
            }
            result = divide(a, b);
            break;
        case '÷':
            if (a === 0){
                result = "You can't divide by 0!";
                break;
            }
            result = divide(a, b);
    }
    toTape(result);
    mainDisplay.textContent = result;
}