// variables
let currentOperand = '';
let a = ''; // first operand
let b = ''; // second operand
let operator;
let displayValue; // current operation
let tapeValue; // populates after first operator input

// constants
const numbers = document.querySelectorAll('.num');
const display = document.querySelector('#display');
const tape = document.querySelector('#tape');
const operators = document.querySelectorAll('.ops')


// event listeners

window.addEventListener('keydown', (e) => getKey(e.key));

numbers.forEach(number => number.addEventListener('click', () => setNum(number.textContent)));

operators.forEach(operator => operator.addEventListener('click', () => setOperator(operator.textContent)));

// helper functions

function getKey(e) {
    console.log(`You pressed ${e}`);
}

function setNum(e) {
    if (e === '.') {
        console.log('That\'s a decimal');
        return;
    }
    console.log(`You clicked ${e}`);
    return;
}

function setOperator(e) {
    console.log(`Let's ${e} some shit`);
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