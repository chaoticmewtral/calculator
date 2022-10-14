// variables
let a; // first operand
let b; // second operand
let operator;

const buttons = document.querySelectorAll('button');

// event listeners
buttons.forEach(button => button.addEventListener('click', getBtn));
window.addEventListener('keydown', getKey)

// helper functions
function getBtn() {
    const btnValue = this.textContent;
    console.log(btnValue);
}

function getKey(e) {
    const keyValue = e.key;
    console.log(keyValue);
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