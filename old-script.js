// constants -------------------------------
const numbers = document.querySelectorAll('.num');
const display = document.querySelector('#display');
const tape = document.querySelector('#tape');
const operators = document.querySelectorAll('.ops')
const del = document.querySelector('#delete');
const clear = document.querySelector('#clear');
const equals = document.querySelector('#equals');
const dec = document.querySelector('#dec');

// variables for temporary stored values
let firstOperand = ''; // a
let secondOperand = ''; // b
let currentOperator = ''; // active operation
let calcInput = 'ready' // 'ready' default
let num = ''; // active number
let tapeText;
let result;


// event listeners --------------------------
window.addEventListener('keydown', (e) => getKey(e.key));

numbers.forEach(number => number.addEventListener('click', () => getNum(number.textContent)));

operators.forEach(operator => operator.addEventListener('click', () => setOperator(operator.textContent)));

del.addEventListener('click', backSpace);

clear.addEventListener('click', resetAll);

equals.addEventListener('click', evaluate('Enter'));

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
}

function getNum(e) {
    if (num === '0') {
        if (e > 0) {
            num = e;
            calcInput = 'mediaRes';
            toDisplay(num);
        } else {
            return;
        }
    } else if (calcInput === 'mediaRes') {
        num += e;
        toDisplay(num);
    } else {
        num = e;
        toDisplay(num);
        calcInput = 'mediaRes';
    }
}

function decimal(e) {
    num = num.toString();
    if (calcInput === 'ready') {
        num = '0.';
    } else if ((num.replace('.', '')) === num) {
        num += e;
    } else {
        return;
    }
    toDisplay(num);
    calcInput = 'mediaRes';
}

function setOperator(e) {
    if (firstOperand === '') {
        currentOperator = e;
        firstOperand = num;
        tapeText = `${firstOperand}  ${currentOperator}`;
        toTape(tapeText);
        calcInput = 'ready';
        return;
    } else if (calcInput === 'ready') {
        if (secondOperand === '') {
            currentOperator = e;
            tapeText = `${firstOperand}  ${currentOperator}`;
            toTape(tapeText);
            calcInput = 'ready';
            return;
        }
    } // add function for performing operation on existing result after cleaning up eval()
}

 function backSpace() {
    if (num === '0') {
        return;
    }
    num = num.slice(0, -1);
    toDisplay(num);
    return;
}

function toDisplay(e) {
    display.textContent = e;
    num = display.textContent;
}

function toTape(e) {
    tape.textContent = e;
    tapeText = tape.textContent;
}

function evaluate(e) {
    if (e === 'Enter') {
        if (currentOperator = '') {
            return;
        } else {
            secondOperand = num;
            operate(currentOperator, firstOperand, secondOperand);
            tapeText = `${firstOperand.toString()}  ${currentOperator.toString()}  ${secondOperand.toString()}  =`;
            toTape(tapeText);
            toDisplay(result);
        }
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
}