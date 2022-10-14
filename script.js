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

// variables
const numbers = document.querySelectorAll('.num');
const operators = document.querySelector('#operators');
const display = document.querySelector('#display');
const clear = document.querySelector('#clear');
const button = 

// display functions
numbers.addEventListener('click', function(e) {
    const keyId = 
})