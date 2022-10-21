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
    }
}

function toTape() {
    let msg = '';
    if (bValue === '') {
        msg = `${aValue} ${currentOperator}`;
        tapeDisplay.textContent = msg;
    }
}

function clearAll() {
    console.log('Clear');
}

function evaluate() {
    console.log('Equals');
}