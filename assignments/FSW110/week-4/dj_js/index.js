const element = document.getElementById("dj") 
let header = document.createTextNode("My Online DJ Business");
element.appendChild(header); 

//Blue when the mouse hovers over the square
const mouseHover = () => {
    square.style.backgroundColor = 'blue';
}
square.addEventListener('mouseover', mouseHover);

//Red when the mouse button is held down over the square
const holdMeDown = () => {
    square.style.backgroundColor = 'red';
}
square.addEventListener('mousedown', holdMeDown);

//Yellow when the mouse button is let go over the square
const letMeGo = () => {
    square.style.backgroundColor = 'yellow';
}
square.addEventListener('mouseup', letMeGo);

//Green when the mouse is double clicked in the square
const clickMeTwice = () => {
    square.style.backgroundColor = 'green';
}
square.addEventListener('dblclick', clickMeTwice);

//Orange when the mouse scroll is used somewhere in the window
const scrollArnd = () => {
    square.style.backgroundColor = 'orange';
}
square.addEventListener('wheel', scrollArnd);

// const scrollArnd = () => {
//     document.body.style.backgroundColor = 'orange';
// }
// document.body.addEventListener('wheel', scrollArnd);

//You should also be able to press the first letter of the colors (typing "r" on the keyboard for "red", for example)
const pressKey = (event) => {
    if(event.which == 66) {
    console.log('pressed')
square.style.backgroundColor = "blue";
}
}
document.addEventListener('keydown', pressKey);