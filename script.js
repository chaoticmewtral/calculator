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
decimalButton.addEventListener('click', () => addDecimal('.'));
deleteButton.addEventListener('click', () => backSpace());
clearButton.addEventListener('click', () => clearAll());
equalsButton.addEventListener('click', () => evaluate());
window.addEventListener('keydown', (e) => getKeyValue(e.key));

function getKeyValue(key) {
    console.log(key);
}

function toDisplay(e) {
    console.log(e);
}

function setOperator(op) {
    console.log(op);
}

function addDecimal(dec) {
    console.log(dec);
}

function backSpace() {
    console.log('Backspace');
}

function clearAll() {
    console.log('Clear');
}

function evaluate() {
    console.log('Equals');
}