//Make a function that will return any given string into all caps followed by the same string all lowercase.
var upperCase = "Hello"
var lowerCase = "Hello"
var allCaps = upperCase.toUpperCase()
var allLower = lowerCase.toLowerCase()
var allTogether = allCaps.concat(allLower)
console.log(allTogether)

//Make a function that returns a number half the length, and rounded down.  You'll need to use Math.floor().
var halfOfStr = ("Hello") // => "2"
var div = Math.floor(4)/2;
console.log(div)
var halfOfStr2 = "Hello World" // => "5"
var div2 = Math.floor(10)/2;
console.log(div2)


//Make a function that uses slice() and the other functions you've written to return the first half of the string.
var returnFirstHalf = "Hello" // => "He"
var firstHalf = returnFirstHalf.slice(0, 2)
console.log(firstHalf)
var returnFirstHalf2 = "Hello World" // => "Hello"
var firstHalf2 = returnFirstHalf2.slice(0, 5)
console.log(firstHalf2)


//Make a function that takes a string and returns that string where the first half is capitalized, 
//and the second half is lower cased. (If the string length is odd, capitalize the shorter of the first half.)
var capilizeAndLowerCase = "Hello" // => "HEllo"

//Make a function that takes a string and returns that string where the first half is capitalized, 
//and the second half is lower cased. (If the string length is odd, capitalize the shorter of the first half.)
var capilizeAndLowerCase = "Hello World" // => "HELLO world"

