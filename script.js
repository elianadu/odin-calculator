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

// make num1, num2, operator
let num1;
let num2;
let operator;

function operate(num1, num2, operator) {
    operator.toString();
    if (operator === "add") return add(num1, num2);
    else if (operator === "subtract") return add(num1, num2);
    else if (operator === "multiply") return add(num1, num2);
    else if (operator === "divide") return add(num1, num2);
    else return "invalid operator";
}