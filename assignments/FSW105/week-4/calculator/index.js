const readlineSync = require('readline-sync')

function add(num1, num2) {
    console.log("The result is: " + (num1 + num2));
}

function mul(num1, num2) {
    console.log("The result is: "  + (num1 * num2));
}

function div(num1, num2) {
    console.log("The result is: "  + (num1 / num2));
}

function sub(num1, num2) {
    console.log("The result is: " + (num1 - num2));
}

var firstNum = parseInt(prompt("Please enter your first number"))
var secondNum = parseInt(prompt("Please enter your second number"))
var operation = prompt("Please enter the operation to perform: add, sub, mul, div ")

if(operation == "add") {
    add(firstNum, secondNum);
    
} else if(operation == "mul") {
    mul(firstNum, secondNum);

} else if(operation == "sub") {
    sub(firstNum, secondNum);

} else if(operation == "div") {
    div(firstNum, secondNum);
} 
