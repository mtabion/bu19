// // //Create an h1 tag with the text “Hello World”, and append it to the DOM
var h1 = document.createElement("h1");
    h1.innerHTML = "Hello World";
    document.body.appendChild(h1);
// // //Using a for-loop, repeat this process 10 times so that 10 h1’s with the text “Hello World” show up when the website is visited.
for(var i = 0; i < 10; i++) {
var h1 = document.createElement("h1");
    h1.innerHTML = "Hello World";
    document.body.appendChild(h1);
}
// //Adjust your for-loop to now loop through the length of the array. 
// //You should now see 8 “Hello World” h1s show up when the page loads.
var h1 = document.createElement("h1");
    h1.innerHTML = "Hello World";

const names = ["Steve", "Larry", "Joe", "Shirley", "Steph", "Nate", "Rick", "Emily"];
for(var i = 0; i < names.length; i++) {
var h1 = document.createElement("h1");
    h1.style.color = "red";
    h1.innerHTML = names[i];
    document.body.appendChild(h1);
}