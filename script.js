// variables for temporary stored values
let firstOperand = ''; // a
let secondOperand = ''; // b
let currentOperator = ''; // active operation
let calcInput = 'ready' // 'ready' default
let num = 0; // active number
let tapeText = ''; // tape display of operation history

// constants -------------------------------
const numbers = document.querySelectorAll('.num');
const display = document.querySelector('#display');
const tape = document.querySelector('#tape');
const operators = document.querySelectorAll('.ops')
const del = document.querySelector('#delete');
const clear = document.querySelector('#clear');
const equals = document.querySelector('#equals');
const dec = document.querySelector('#dec');

// event listeners --------------------------
window.addEventListener('keydown', (e) => getKey(e.key));

numbers.forEach(number => number.addEventListener('click', () => setNum(number.textContent)));

operators.forEach(operator => operator.addEventListener('click', () => setOperator(operator.textContent)));

del.addEventListener('click', backSpace);

clear.addEventListener('click', resetAll);

equals.addEventListener('click', evaluate);

dec.addEventListener('click', decimal);

// listener functions -----------------------
function getKey(e) {
    let key = e; // assign event argument to key variable
    if (key >= 0 && key <= 9) {
        getNum(key);
    } else if (key === '.') {
        decimal();
    } else if (key === 'Enter') {
        evaluate();
    } else if (key === 'Backspace') {
        backSpace();
    } else if (key === 'Delete' || key === 'Escape' || key === 'Clear') {
        resetAll();
    } else if (key === '/' || key === '*' || key === '-' || key === '+') {
        setOperator(key);
    }
}