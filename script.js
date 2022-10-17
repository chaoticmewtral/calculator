// variables --------------------------
let firstValue = ''; // a
let secondValue = ''; // b
let currentOperation = '';
let calcState = 'ready';
let num = 0;
let tapeText = '';

// constants -----------------------------
const numbers = document.querySelectorAll('.num');
const display = document.querySelector('#display');
const tape = document.querySelector('#tape');
const operators = document.querySelectorAll('.ops')
const del = document.querySelector('#delete');
const clear = document.querySelector('#clear');
const equals = document.querySelector('#equals');
const dec = document.querySelector('#dec');

// event listeners ------------------------

window.addEventListener('keydown', (e) => getKey(e.key));

numbers.forEach(number => number.addEventListener('click', () => setNum(number.textContent)));

operators.forEach(operator => operator.addEventListener('click', () => setOperator(operator.textContent)));

del.addEventListener('click', backSpace);

clear.addEventListener('click', clearAll);

equals.addEventListener('click', evaluate);

dec.addEventListener('click', decimal);

// helper functions WORKING -----------------------

function getKey(e) {
    let key = e;
    if (key >= 0 && key <= 9) {
        setNum(key);
    } else if (key === '.') {
        decimal();
    } else if (key === 'Enter') {
        evaluate();
    } else if (key === 'Backspace') {
        backSpace();
    } else if (key === 'Delete' || key === 'Escape' || key === 'Clear') {
        clearAll();
    } else if (key === '/' || key === '*' || key === '-' || key === '+') {
        setOperator(key);
    }
}

function clearAll() {
    document.location.reload();
}

function setNum(e) {
    if (e === '.') {
        decimal();
    }
    if (calcState === 'ready') {
        if (e > 0) {
            num = e;
            setDisplay(num);
        }
    } else {
        num += e;
        setDisplay(num);
    }
}

function backSpace() {
    if (calcState === 'mediaRes') {
        num = num.slice(0, -1);
        if (num === '') {
            num = 0;
        }
        setDisplay(num);
        setCalcState();
    }
}


// helper functions IN PROGRESS -----------------


function decimal() {
    console.log("Decimal");
}

function setCalcState() {
    if (display.textContent !== '0') {
        calcState = 'mediaRes';
    } else {
        calcState = 'ready';
    }
}

function setDisplay(e) {
    display.textContent = e;
    setCalcState();
}

function setOperator(e) {
    currentOperation = e;
    setTape();
}

function setTape() {
    if (tape.textContent === '') {
        firstValue = num;
        tapeText = `${firstValue}  ${currentOperation} `;
    } else if (secondValue !== '') {
        tapeText = `${firstValue}  ${currentOperation}  ${secondValue}  =`;
    } else if (secondValue === '') {
        tapeText = `${firstValue}  ${currentOperation}`
    }
    tape.textContent = tapeText;
    calcState = 'ready';
}

function evaluate() {
    if (firstValue !== '' && currentOperation !== '') {
        secondValue = num;
        operate(currentOperation, firstValue, secondValue);
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
    setDisplay(result);
    setTape();
    firstValue = result;
    secondValue = '';
    currentOperation = '';
}