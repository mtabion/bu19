var enemies=["Lex","Batman","Darkseid","Brainiac","General Zod","Doomsday"];

//funtion corrected: function was miss a c, camelCasing
function whoWins(isThereKryptonite,enemyName)
 
{
if (!isThereKryptonite)
{
    return "Superman beats " +enemyName+ ", of course";
}

else{
    return "Depends on how quick Superman can get rid of the Kryptonite. "+ enemyname +" could possibly win this one.";
}
    }

for (var i=0;i<enemies.length;i++)
{
    var isThereKryptonite;
               //kryptonite: corrected: colon cannot be used as an end-of-line also camelCasing

    if (i%2=== 0) {
        iisThereKryptonite = true;
    } else {
        isThereKryptonite = false;
    }
    console.log(whoWins(isThereKryptonite,enemies[i])); //whoWins
}

function HowAttractedIsLoisLaneToMe ()
{
    // 1 is not at all attracted, 10 is "super" attracted...
    return Math.floor((Math.random()*10)+1);
                     //((Mat.random()*10)+1); corrected: mat.random to math.random
}

console.log( HowAttractedIsLoisLaneToMe ()) ;
//consol.log corrected: console

var clarkKent =true;
var superman =false;
   //superman false; note: Added = after superman, camelCase clarkKent

while (clarkKent){
    console.log("I'm just a nerdy columnist");
    var phoneBoothQuickChange =Math.random();
    if (phoneBoothQuickChange>= 0.5) {
        clarkKent=false;
        superman=true;
        console.log("Now I'm Superman!");}}
    