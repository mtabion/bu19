// make the box disapear when the user clicks it
const redBox = document.getElementsByClassName("red-box")
    console.log(redBox)

const redDiv = redBox[0] 
    redDiv.addEventListener("click", function() {
    //  document.body.removeChild(redDiv)  
    redDiv.remove()  
    })