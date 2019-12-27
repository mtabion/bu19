
const redBox = document.getElementsByClassName("red-box")

const redDiv = redBox[0]

redDiv.addEventListener("mousemove", function(e) {  // replacing redDiv with window will read all coordinates around browser
    redDiv.textContent = `position x : ${e.pageX} position y : ${e.pageY}` 
}) 
