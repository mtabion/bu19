const rl = require('readline-sync');
 
const userName = rl.question('Who are you? ');

const greetings = `${userName}, You have been trapped. You must now find an escape route.`;
console.log(greetings)
 
let escapeRoute= [
    "put hand in hole",
    "open door",
    "search"
 ];

let tryAgain = true;
let found = false;
while(tryAgain) {
    index = rl.keyInSelect(escapeRoute, `Now, ${userName}, You must select an option if you want to get out of here. Which route will you choose? `);
    // They put hand in hole
    console.log("You picked: "  + index);
    if ( index == 0) {
        console.log("GAME OVER!!! You are dead.");
        tryAgain = false;
    }
    // They are trying to open door 
    else if ( index == 1 && !found) {
        console.log("This door is locked! You must search for the key. Beware! One wrong move and you will DIE!!!");
    }else if (index == 1 && found) {
        console.log("CONGRATULATIONS! You have found freedom!");
        tryAgain = false;
    }
    // They decided to search for key 
    else if ( index == 2) {
        console.log("AWSOME! You have found the key. Proceed to the door to unlock it. KEY PRESS 2 TO ACTIVATE.");
        found = true;
    } else if(index == -1){
        console.log("Thank you for Playing. Please come back again!")
        break;
    }
}