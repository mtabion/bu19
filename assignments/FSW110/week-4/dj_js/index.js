var element = document.getElementById("h1") 
var header = document.createTextNode("My Online DJ Business");
element.appendChild(header);

var hoverOver = document.getElementById("hover");
var mouseOverFunction = function() {
  this.style.color = "blue";
}
hoverOver.onmouseover = mouseOverFunction;

var holdMeDown = document.getElementById("hold")
var mouseDown = function() {
  this.style.color = "red";
}
holdMeDown.onmousedown = mouseDown;
  
var letMeGo = document.getElementById("hold")
var mouseUp = function() {
  this.style.color = "yellow";
}
letMeGo.onmouseup = mouseUp;

var doubleClick = document.getElementById("doubleClick")
var dblclick = function() {
  this.style.color = "green";
}
doubleClick.ondblclick = dblclick;

document.getElementById("all").onscroll = function() {myFunction()};
var scrollArnd = document.getElementById("scroll")
var scrolled = function() {
  this.style.color = "orange";
}
scrollArnd.onscroll = scrolled;


document.addEventListener("keydown", function(event) {
  console.log(event.which);
})