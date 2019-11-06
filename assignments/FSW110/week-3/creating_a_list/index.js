var h1 = document.createElement("h1");
    h1.innerHTML = "Hello World";
    document.body.appendChild(h1);

const names = ["Steve", "Larry", "Joe", "Shirley", "Steph", "Nate", "Rick", "Emily"];

for(var i = 0; i < names.length; i++) {
    var h1 = document.createElement("h1");
    h1.style.color = "blue";
    h1.innerHTML = names[i];
    document.body.appendChild(h1);
}

