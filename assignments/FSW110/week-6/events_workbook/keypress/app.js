/* Your task is to display to the user the key and key code they press.
Example of output: You've pressed the "a" key. It's key code is 65.
Wes Bos made this https://keycode.info/ for us to use as an example. */
const divOutput = document.getElementById("output")
    

keyPress = (e) => {
    if(e.code == "Backspace") {
        divOutput.textContent = " "
    } else {    //comment out line 8-10 and line 12. optional to have keypress read out name of button
        divOutput.textContent += e.code
 } 
}
document.body.addEventListener("keydown", keyPress)