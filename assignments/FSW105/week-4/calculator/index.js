const readlineSync = require("readline-sync")


function add(num1, num2) {
    console.log("The result is: " + (+num1 + +num2));  // To add these to numbers together, use the unary operator + in front of the variable 
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

var firstNum = readlineSync.question("Please enter your first number. ")
var secondNum = readlineSync.question("Please enter your second number. ")
var operation = readlineSync.question("Please enter the operation to perform: add, sub, mul, div ")

if(operation == "add") {
    add(firstNum, secondNum);
    
} else if(operation === "mul") {
    mul(firstNum, secondNum);

} else if(operation === "sub") {
    sub(firstNum, secondNum);

} else if(operation == "div") {
    div(firstNum, secondNum);
} 