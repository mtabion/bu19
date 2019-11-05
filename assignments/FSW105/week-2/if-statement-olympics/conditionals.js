// preliminaries #1
if (5 > 3) {
    console.log("is greater than")
 }

//preliminaries #2
if ("cat" !== 3) {
   console.log("Is the length")
}

//preliminaries #3
if ("cat" == "dog" ) {
   console.log("Is equal to")
} else {
    console.log("Not the same")
}

//bronze medal #1
var person = {
    name: "Bobby",
    age: 19,    
}

//bronze medal #2
if (person.age > 18 && person.name.substr(0,1) == "B"){
    console.log(person.name + " " + "Is allowed to go to the movies")
} else {
    console.log(person.name + " " + "Is not allowed to go the movies")
}

//bronze medal #3
var person = {
    name: "Bobby",
    age: 12,
}

if (person.age > 18 && person.name.charAt(0) == "B") {
    console.log(person.name + " " + "Is allowed to go to the movies")
} else {
    console.log(person.name + " " + "Is not allowed to go to the movies")
}

var person = {
    name: "Junior",
    age: 20,    
}
if (person.age >= 18) {
    console.log(person.name + " " + "Is allwoed to go to the movies")
} else if(person.age < 18) {
console.log(person.name + " " + "Is not allowed to go to the movies")
}

//silver meadal #1
if (1 === "1") {
    console.log("strict")
} else if(1 == "1") {
    console.log("loose")
} else {
    console.log("not equal at all")
}

//silver meadl #2
if ((1 <= 2) && (2 == 4)) {
    console.log("yes")
}