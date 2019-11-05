function sum(x, y) {
    return x + y;
}
var result = sum (35, 53)
console.log(result)

function largest(num1, num2, num3) {
    if(num1 > num2 && num1 > num3) {
        return num1;
    } else if(num2 > num1 && num2 > num3) {
        return num2;
    } else if(num3 > num1 && num3 > num2) {
        return num3;
    }
}
var largestNumber = largest(25, 15, 55)
console.log(largestNumber + " Is the largest number");


function evenOdd(a) {
    if(a % 2 === 0) {
        console.log("Even")
    } else {
        console.log("Odd")
    }
}
evenOdd(20);


function stringLength(str) {
    if(str.length <= 20) {
        return str + str;
    } else {
        return str.slice(0, str.length / 2);
    }
}
var output = stringLength("Humuhumunukunukuapuaa");
console.log("Output is: " + output);