var Enemies=["Lex","Batman","Darkseid","Brainiac","General Zod","Doomsday"];

//funtion corrected: function was miss a c
function Who_Wins(is_there_kryptonite,enemy_name)
 
{
if (!is-there-kryptonite)
{
    return "Superman beats " +enemyName+ ", of course";
}

else{
    return "Depends on how quick Superman can get rid of the Kryptonite. "+ enemyname +" could possibly win this one.";
}
    }

for (var i=0;i<enemies.length;i++)
{
    var is_there_kryptonite;
               //kryptonite: corrected: colon cannot be used as an end-of-line

    if (i%2=== 0) {
        is_there_kryptonite = true;
    } else {
        is_there_kryptonite = false;
    }
    console.log(Who_Wins(is_there_kryptonite,enemies[i]));
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
   //superman false; note: Added = after superman

while (clarkKent){
    console.log("I'm just a nerdy columnist");
    var phoneBoothQuickChange =Math.random();
    if (phoneBoothQuickChange>= 0.5) {
        clarkKent=false;
        superman=true;
        console.log("Now I'm Superman!");}}
    