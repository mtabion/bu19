//Loop through the following array and count how many "computers" there are. Log the final count:
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp",
 "computer", "lamp", "stapler", "computer", "computer"];
var result = officeItems.filter(i => i === "computer").length;
console.log("Number of Computers: " + result);

//Loop through the following array and log to the console "old enough" if
// they are 18 or older, and "not old enough" if they aren't 18.
var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
        name: "Mike",
        age: 12,
        gender: "male"
    },{
        name: "Madeline",
        age: 80,
        gender: "female"
    },{
        name: "Cheryl",
        age: 22,
        gender: "female"
    },{
        name: "Sam",
        age: 30,
        gender: "male"
    },{
        name: "Suzy",
        age: 4,
        gender: "female"
    }
]
  
for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
       console.log("Is Old Enough");
    }else {
       console.log("Is Not Old Enough");
    } 
}

// Log to the console a personalized message like:
// Mike is not old enough to see Mad Max or Madeline is old enough to see Mad Max.
for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {    
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
       console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " Is Old Enough");       
    }else {
       console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " Is Not Old Enough");       
    }   
}


//Check to see if the movie goer is a male or female for an even more personalized message.
// Mike is not old enough to see Mad Max Fury Road, don't let HIM in or
// Madeline is old enough. SHE'S good to see Mad Max Fury Road.
for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {    
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
       console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " Is Old Enough To See Mad Max Fury Road. " +
       ((peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female") ? 'SHE' : 'HE') + "'s" + " good to see Mac Max Fury Road ");
    }else {
       console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " Is Not Old Enough don't let " +
       ((peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female") ? 'HER' : 'HIM') +  " in ");    
    }   
}


//Create a for loop that iterates through 101 numbers (from 0 - 100). 
//If the current iteration is an Odd number, print "Odd" to the console, otherwise print "Even".
for(var i = 0; i <= 101; i++) {
    if(i % 2 === 1) {
    console.log(i + " Is an odd number!");
    } else {
        console.log(i + " Is an even number");
    }
}