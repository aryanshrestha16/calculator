"use strict"
let displayValue = "";
let result = 0;
let operand = "";
const displayScreen = document.getElementById("display");
updateActiveButton();

function operate(operator, x, y) {
    switch(operator) {
        case '+':
            return x + y;
        case '-':
            return x - y;
        case '*':
            return x * y;
        case '/':
            if (y === 0) {
                return "Error: Division by zero";
            }
            return x / y;
        default:
            return "Error: Invalid operator";
    }
}

function displayNumber(number){
    removeActivebuttons();
    const displayScreen = document.getElementById("display");
    if (displayValue === "0"){
        displayValue = String(number);
    }
    else
    {
    displayValue = displayValue.concat(number);
    }
    displayScreen.value = displayValue;
}

function clearScreen(){
    displayValue = "";
    displayNumber(0);
}

function deleteLast(){
    displayValue = displayValue.slice(0, -1);
    if (displayValue === "") {
        displayScreen.value = "0";
    }
    else {
    displayScreen.value = displayValue;
    }
}

function displayResult(){
    result = operate(operand, result, parseFloat(displayValue));
    if (typeof result === "number") {
        displayValue = result.toString();
        displayScreen.value = displayValue;
    } else {
        console.error(result);
    }
}

function percentsign(){
    if (displayValue != ""){
        displayValue = parseFloat(displayValue) / 100;
        result = displayValue
        displayScreen.value = result;
    }
}

function addOperand(sign){
    if (operand !== "") {
        displayResult();
    }
    operand = sign;
    result = parseFloat(displayValue);
    displayValue = "";
}

function acbutton(){
    displayValue = "";
    operand = "";
    result = 0;
    removeActivebuttons();
    displayNumber(0);
}

function updateActiveButton() {
    let buttons = document.querySelectorAll(".operand");
    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            let current = document.querySelector(".active");
            if (current) {
                current.classList.remove("active");
            }
            button.classList.add("active");
        });
    });
}

function removeActivebuttons(){
    let current = document.querySelector(".operand.active");
        if (current) {
            current.classList.remove("active");
        }
    }