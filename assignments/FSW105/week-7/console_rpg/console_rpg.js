const rl = require('readline-sync');
 
const playerName = rl.question('The year is 1985. Disguised as a human, a cyborg assassin known as a Terminator travels from 2030 to kill Sarah Connor. Your mission is to protect Sarah. \nState your name to accept this mission. ');

 

let action = rl.keyIn(`${playerName}, enter "w" to walk \n`, { limit: '$<w>' });


if (action === "w") {
    console.log("And we are walking...");

function playerWalks() {
    let enemies = [
        "T-1000 Liquid Cyborg ",
        "T-X Female Cyborg ",
        "T-3000 Terminator Genisys"
    ];

    
    let hp = 100;
    

if (Math.random() * 100 > 50) {
    
    let randomEnemy = (Math.floor(Math.random() * 3) + 1) - 1;
        console.log("Oh no, " + enemies[randomEnemy] + " appeared");
    
    let random = Math.random() * 100;
    
if(random > 50) {
    console.log("Enemy is attacking!");

    
    let random = Math.random() * 100;

    
    hp = hp - random;


if(hp <= 10){
    
    console.log("Game Over!");
    
    }
    console.log("You got lucky! " + hp);
    playerWalks(playerName)
 } else {
     
     action = rl.keyIn(`${playerName}, Do you want to attack? enter (a) or run? enter (r)? \n`, { limit: '$<a, r>' });
     
     if (action === "a") {
        
        console.log("User decided to attack!");
       
        let enemyAttack = Math.random() * 100;

        hp = hp - enemyAttack 

        if (enemyAttack > 50) { 
            console.log(`Game Over! ENEMY WINS! ${enemyAttack}`) 
        } else if (enemyAttack < 50) { 
            console.log(`HASTA LA VISTA BABY! You Have Terminated The Enemy! ${enemyAttack}`) 
            playerWalks(playerName)
        } else {
            console.log(`IT'S A DRAW! GIVE THE ENEMY A HUG AND START OVER! ${enemyAttack}`) 
        } 
    }
    if (action === "r") {
        
        console.log("User decided to run!");
        playerWalks(playerName)
    }
  }
} else {
    let action = rl.keyIn(`${playerName}, enter "w" to walk \n`, { limit: '$<w>' });
    if (action === "w") {
        console.log("And we are walking AGAIN...");
        playerWalks(playerName)
    }
  }
}
playerWalks(playerName)
}
