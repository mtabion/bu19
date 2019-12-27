//number 1
let name = "John";
const age = 101;

function runForLoops(pets) {
    let petObjects = []
    for(let i = 0; i < pets.length; i++) {
        let pet = {type: pets[i]}
        name;
        if(pets[i] === "cat") {
            name =  "fluffy"
        }else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}
runForLoops(["spot", "fluffy", "kujo"])

//number 2
const carrots = ["bright orange", "ripe", "rotten"]

function mapVegetables(arr) {
    return arr.map(carrot => {
        return { type: "carrot", name: carrot }
    })
}
console.log(mapVegetables(carrots));

//number 3
const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

function filterForFriendly(arr) {
    return arr.filter(person => {
        return person.friendly
    })
}
console.log(filterForFriendly(people));

//number 4
const doMathSum = (a, b) => { 
    return a + b;
};
console.log(doMathSum(3, 3))

//number 5
const produceProduct = (a, b) => { 
    return a * b;
};
console.log(produceProduct(5, 5))

const printString = (firstName = 'Jane', lastName = 'Doe', age = '100') => {

    return "Hi " + firstName + " " + lastName + ", " + "how does it feel to be " + age + "?"
}
//console.log(printString())
console.log(printString("doe","adeer","23"))

//number 6
const printString2 = (firstName = 'Jane', lastName = 'Doe', age = '100') => {

    return "Hi " + firstName + " " + lastName + ", " + "how does it feel to be " + age + "?"
}
console.log(printString("doe","adeer","23"))
console.log(printString2())

//number 7
const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
    ];


 function filterForDogs(arr) {
     const dogs = animals.filter(animal => animal.type === "dog")

 }

//number 8
const Message = (location, name = 'Janice') => {
    return 'Hi ${name}! \n\nWelcome to ${location}.\n\nI hope you enjoy your stay. Please ask the president of ${location} if you need a \nnything.'
    
    }
