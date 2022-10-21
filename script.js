let aValue = '';
let bValue = '';
let currentOperator = '';
let resetDisplay = true;

const numbers = document.querySelectorAll('[.num]');
const operators = document.querySelectorAll('[.ops]');
const decimalButton = document.getElementById('dec');
const deleteButton = document.getElementById('delete');
const clearButton = document.getElementById('clear');
const equalsButton = document.getElementById('equals');

const mainDisplay = document.getElementById('display');
const tapeDisplay = document.getElementById('tape');

