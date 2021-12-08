let result = 0;
num1 = parseInt(document.getElementById("num1-el").textContent);
num2 = parseInt(document.getElementById("num2-el").textContent);
let sumEl = document.getElementById("sum-el");

function add() {
    result = num1 + num2;
    sumEl.textContent = `Sum: ${result}`;
}

function subtract() {
    result = num1 - num2;
    sumEl.textContent = `Sum: ${result}`;
}

function divide() {
    result = num1 / num2;
    sumEl.textContent = `Sum: ${result}`;
}

function multiply() {
    result = num1 * num2;
    sumEl.textContent = `Sum: ${result}`;
}