// variables for temporary stored values
let firstOperand = ''; // a
let secondOperand = ''; // b
let currentOperator = ''; // active operation
let calcInput = 'ready' // 'ready' default
let num = 0; // active number
let tapeText = ''; // tape display of operation history
let cleanSlate = 'true';

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

numbers.forEach(number => number.addEventListener('click', () => getNum(number.textContent)));

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

function resetAll() {
    firstOperand = '';
    secondOperand = '';
    currentOperator = '';
    calcInput = 'ready'
    num = 0;
    toDisplay(num);
    tapeText = '';
    toTape(tapeText);
    cleanSlate = 'true';
}

function getNum(e) {
    if (num === 0) {
        if (e > 0) {
            num = e;
            calcInput = 'mediaRes';
            toDisplay(num);
        }
    } else if ((num > 0 || num < 0) && (calcInput === 'mediaRes')) {
        num += e;
        toDisplay(num);
    } else {
        num += e;
        toDisplay(num);
    }
}

function decimal(e) {
    if (cleanSlate) {
        num += e;
        cleanSlate = 'false';
        toDisplay(num);
        calcInput = 'mediaRes';
    }
}

function setOperator(e) {
    if (firstOperand === '') {
        currentOperator = e;
        firstOperand = num;
        num = 0;
        cleanSlate = 'false';
        tapeText = `${firstOperand}  ${currentOperator}`;
        toTape(tapeText);
        calcInput = 'ready';
        return;
    } else if (currentOperator === '') {
        currentOperator = e;
        evaluate();
        return;
    } else {
        currentOperator = e;
        evaluate();
    }
}

 function backSpace () {
    if (num === '0') {
        return;
    }
    num = num.slice(0, -1);
    toDisplay(num);
    return;
}

function toDisplay(e) {
    display.textContent = e;
}

function toTape(e) {
    tape.textContent = e;
}

function evaluate(e) {
    if (calcInput === 'ready') {
        return;
    } else if (e === 'Enter') {
        secondOperand = num;
    } {
        secondOperand = num;
        num = 0;
        tapeText = `${firstOperand}  ${currentOperator}  ${secondOperand}  =`;
        toTape(tapeText);
        operate(currentOperator, firstOperand, secondOperand);
        calcInput = 'ready';
        secondOperand = '';
        currentOperator = '';
    }
}

// calculation functions - DO NOT EDIT --------------
function add(a, b) {
    return parseInt(a) + parseInt(b);
}

function subtract(a, b) {
    return parseInt(a) - parseInt(b);
}

function multiply(a, b) {
    return parseInt(a) * parseInt(b);
}

function divide(a, b) {
    return parseInt(a) / parseInt(b);
}

function operate(operator, a, b) {
    let result;
    switch(operator) {
        case '+':
            result = add(a, b);
            break;
        case '-':
            result = subtract(a, b);
            break;
        case '*':
            result = multiply(a, b);
            break;
        case '×':
            result = multiply(a, b);
            break;
        case '/':
            if (a === 0){
                result = "You can't divide by 0!";
                break;
            }
            result = divide(a, b);
            break;
        case '÷':
            if (a === 0){
                result = "You can't divide by 0!";
                break;
            }
            result = divide(a, b);
    }
    toDisplay(result);
    firstOperand = result;
}