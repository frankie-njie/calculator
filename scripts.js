function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multipy(a, b) {
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
        return multipy(a, b);
    } else if (operator === "/") {
        return divide(a, b);
    } else
        return "Select an operator";
}