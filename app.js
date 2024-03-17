"use strict"
let displayValue = "";
function add (x,y) {
    return x + y;
}

function subtract(x,y){
    return x - y ;
}

function multiply(x,y){
    return x * y ;
}

function divide(x,y){
    return x/y ;
}

function displayNumber(number){
    const displayScreen = document.getElementById("display");
    displayValue += number;
    displayScreen.value = displayValue;
}

function clearScreen(){
    displayValue = "";
    displayNumber(0);
}

function deleteLast(){
    let newDisplay = displayValue.slice(0,-1);
    displayValue = "";
    displayNumber(newDisplay);
}