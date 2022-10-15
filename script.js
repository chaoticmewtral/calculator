// variables
let a = ''; // first operand
let b = ''; // second operand
let operator;
let displayValue;
let tapeValue;
let num;

// constants
const numbers = document.querySelectorAll('.num');
const display = document.querySelector('#display');
const tape = document.querySelector('#tape');
const operators = document.querySelectorAll('.ops')


// event listeners
numbers.forEach((number) => number.addEventListener('click', setNum));

window.addEventListener('keydown', getKey);

operators.forEach(operator => operator.addEventListener('click'), setOperator(operator.textContent));

// helper functions
function setNum(x) {
    if (display.textContent === '0') {
        num = x;
        display.textContent = num;
    }
}

function setOperator(op) {
    operator = op;
    console.log(operator);
}

function getKey(e) {
    number = e.key;
    console.log(number);
    updateDisplay();
}

function updateDisplay() {
    if (display.textContent === "0" && tape.textContent === '') {
        a = number;
        display.textContent = a;
    }
}

// calculation functions - DO NOT EDIT
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

function operate(operator, a, b) {
    let result;
    switch(operator) {
        case add:
            result = add(a, b);
            break;
        case subtract:
            result = subtract(a, b);
            break;
        case multiply:
            result = multiply(a, b);
            break;
        case divide:
            result = divide(a, b);
    }
    return result;
}