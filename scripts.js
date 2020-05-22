let numbers = document.querySelectorAll('.number');
let display = document.querySelector('.display');
let operation = document.querySelectorAll('.operator');

let deleteBtn = document.getElementById('back');
let answerButton = document.getElementById('equals');
let decimalBtn = document.getElementById('decimal');
let remainderBtn = document.getElementById('remainder')

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

function remainder(a, b) {
    return a % b;
}

function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '÷':
            return divide(a, b);
        case '%':
            return remainder(a, b);
        default:
            return 'Select an operator';
    }
}

//Display numbers

// numbers.forEach((number) => {
//     number.addEventListener('click', function(e) {
//         let value = display.value;
//         let finalValue = value + e.target.innerHTML;
//         display.value = finalValue;
//     });
// });

function getVal(e) {
    if ((e.target.innerHTML === '*' || e.target.innerHTML === '÷') && display.value === '') {
        return;
    }
    let value = display.value;
    let finalValue = value + e.target.innerHTML;
    display.value = finalValue;
}

numbers.forEach((number) => {
    number.addEventListener('click', (e) => getVal(e));
});

//Clear numbers
let clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', function(e) {
    display.value = "";
});

// Add operation
// operation.forEach((operator) => {
//     operator.addEventListener('click', function(e) {
//         let value = display.value;
//         let finalValue = value + " " + e.target.innerHTML + " ";
//         display.value = finalValue;
//         finalOperation = finalValue
//     });
// });
operation.forEach((operator) => {
    operator.addEventListener('click', (e) => getVal(e));
});

// Delete value
function deleteValue() {
    let textValue = display.value;
    let finalValue = textValue.slice(0, -1);
    display.value = finalValue;
}

// Add Decimal
function decimal(e) {
    let textValue = display.value;
    let finalValue = textValue + e.target.innerHTML
    display.value = finalValue;
}

// Operation Results
function answer() {
    let values = display.value.split('');
    let finalOperation;
    let firstNumber;
    let lastNumber;
    for (let i = 0; i < values.length; i++) {
        if (values[i] === '+' || values[i] === "-" || values[i] === "*" || values[i] === "÷" || values[i] === "%") {
            finalOperationPos = values.indexOf(values[i]);
            finalOperation = values[i];

            firstNumber = parseFloat(values.slice(0, finalOperationPos).join(''));
            lastNumber = parseFloat(values.slice(finalOperationPos + 1).join(''));
        }
    }
    let answer = operate(finalOperation, firstNumber, lastNumber);
    let finalValue = answer;
    display.value = finalValue;
    return answer
}

// Events listener
deleteBtn.addEventListener('click', deleteValue);
answerButton.addEventListener('click', answer);
decimalBtn.addEventListener('click', decimal)