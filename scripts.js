let numbers = document.querySelectorAll('.number');
let display = document.querySelector('.display');
let operation = document.querySelectorAll('.operator');
let deleteBtn = document.getElementById('back');

let firstValue;
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

// function show(event) {
//     let textArea = document.querySelector('.display');
//     let value = textArea.value;
//     let finalValue = value + event.innerHTML;
//     textArea.value = finalValue;
// }

//Display numbers
numbers.forEach((number) => {
    number.addEventListener('click', function(e) {
        let value = display.value;
        let finalValue = value + e.target.innerHTML;
        display.value = finalValue;
    })
});

//Clear numbers
let clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', function(e) {
    display.value = "";
});

// add operation
operation.forEach((operator) => {
    operator.addEventListener('click', function(e) {
        let value = display.value;
        let finalValue = value + " " + e.target.innerHTML + " ";
        display.value = finalValue;
    })
});

// Delete value
function deleteValue() {
    let textValue = display.value;
    let finalValue = textValue.slice(0, -1);
    display.value = finalValue;
}

deleteBtn.addEventListener('click', deleteValue);