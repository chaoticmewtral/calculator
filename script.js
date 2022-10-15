// variables --------------------------
let firstValue = ''; // a
let secondValue = ''; // b
let currentOperation;

// constants -----------------------------
const numbers = document.querySelectorAll('.num');
const display = document.querySelector('#display');
const tape = document.querySelector('#tape');
const operators = document.querySelectorAll('.ops')
const del = document.querySelector('#delete');
const clear = document.querySelector('#clear');
const equals = document.querySelector('#equals');

// event listeners ------------------------

window.addEventListener('keydown', (e) => getKey(e.key));

numbers.forEach(number => number.addEventListener('click', () => setNum(number.textContent)));

operators.forEach(operator => operator.addEventListener('click', () => setOperator(operator.textContent)));

del.addEventListener('click', backSpace);

clear.addEventListener('click', clearAll);

equals.addEventListener('click', evaluate);

// helper functions ----------------------------

function getKey(e) {
    console.log(`Key pressed: ${e}`);
    let key = e;
    if ((key >= 0 && key <= 9) || key === '.') {
        setNum(key);
    }
}

function setNum(e) {
    if (e === '.') {
        console.log('That\'s a decimal');
        return;
    }
    console.log(`Number: ${e}`);
    return;
}

function setOperator(e) {
    console.log(`Let's ${e} some shit`);
}

function backSpace() {
    console.log('Take it back now, y\'all');
}

function clearAll() {
    console.log('Reset button');
}

function evaluate() {
    console.log('Time to evaluate our life choices?');
}

// calculation functions - DO NOT EDIT --------------
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