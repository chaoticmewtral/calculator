let firstOperand = '';
let secondOperand = '';
let currentOperator = '';


const numbers = document.querySelectorAll('.num');
const display = document.querySelector('#display');
const tape = document.querySelector('#tape');
const operators = document.querySelectorAll('.ops')
const del = document.querySelector('#delete');
const clear = document.querySelector('#clear');
const equals = document.querySelector('#equals');
const dec = document.querySelector('#dec');


window.addEventListener('keydown', (e) => getKey(e.key));

numbers.forEach(number => number.addEventListener('click', () => getNum(number.textContent)));

operators.forEach(operator => operator.addEventListener('click', () => setOperator(operator.textContent)));

del.addEventListener('click', backSpace);

clear.addEventListener('click', resetAll);

equals.addEventListener('click', evaluate);

dec.addEventListener('click', decimal);


// read key pressed and pass to applicable function
function getKey(e) {
    let key = e; // assign event argument to key variable
    if (key >= 0 && key <= 9) {
        getNum(key);
    } else if (key === '.') {
        decimal(key);
    } else if (key === 'Enter') {
        evaluate(key);
    } else if (key === 'Backspace') {
        backSpace();
    } else if (key === 'Delete' || key === 'Escape' || key === 'Clear') {
        resetAll();
    } else if (key === '/' || key === '*' || key === '-' || key === '+') {
        setOperator(key);
    }
}


function getNum(e) {
    let num = display.textContent;
    let hist = tape.textContent;
    if (e === '0' && num === '0') {
        return;
    } else if (hist === '' && num === '0') {
        display.textContent = e;
    } else if (hist)
}