let numbers = document.querySelectorAll('.number');
let display = document.getElementsByClassName('.display');
let operation = document.querySelectorAll('.operator');

let firstValue = '';
let secondValue = '';


//Calculator functions
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
    if (operator === "+") {
        return add(a, b);
    } else if (operator === "-") {
        return subtract(a, b);
    } else if (operator === "*") {
        return multiply(a, b);
    } else if (operator === "/") {
        return divide(a, b);
    } else
        return "Select an operator";
}

function show(event) {
    let textArea = document.querySelector('.display');
    let value = textArea.value;
    let finalValue = value + event.innerHTML;
    textArea.value = finalValue;
}

// function displayNumbers() {
//     let firstvalue = display.value
// }