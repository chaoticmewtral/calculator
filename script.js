// variables
let a = ''; // first operand
let b = ''; // second operand
let operator;
let displayValue;
let number;

const numbers = document.querySelectorAll('.num');
const display = document.querySelector('#display');
const tape = document.querySelector('#tape');
const operators = document.querySelectorAll('.ops')


// event listeners
numbers.forEach(number => number.addEventListener('click', num));
window.addEventListener('keydown', getKey)

// helper functions
function num() {
    number = this.textContent;
    console.log(number);
    updateDisplay();
}

function getKey(e) {
    number = e.key;
    console.log(number);
    updateDisplay();
}

function updateDisplay() {
    if (display.textContent === "0" && tape.textContent === null) {
        a = number;
        display.textContent = a;
    } else if ()
}

// calculation functions
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