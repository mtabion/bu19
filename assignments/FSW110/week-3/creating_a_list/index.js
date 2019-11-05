
const names = ["steve", "larry", "joe", "shirley", "steph", "nate", "rick", "emily"];

for(var i = 0; i < names.length; i++) {
    var h1 = document.createElement("h1");
    h1.style.color = "red";
    h1.innerHTML = names[i];
    document.body.appendChild(h1);
}

