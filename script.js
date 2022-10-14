// variables
let a; // first operand
let b; // second operand
let operator;
let displayValue;

const numbers = document.querySelectorAll('.num');
const display = document.querySelector('#display');


// event listeners
numbers.forEach(number => number.addEventListener('click', num));
window.addEventListener('keydown', getKey)

// helper functions
function num() {
    console.log(this.textContent);
}

function getKey(e) {
    console.log(e.key);
}

function read(val) {

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