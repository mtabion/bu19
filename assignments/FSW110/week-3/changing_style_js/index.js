
const motorcycles = ["Street Glide", "Softail", "Ultra Glide", "Fatboy", "CVO Limited", "Ultra Classic", "Heritage", "Tri Glide"];

for(var i = 0; i < motorcycles.length; i++) {
    var h1 = document.createElement("h1");
    h1.style.color = "cornflowerblue";
    h1.style.fontSize = "20px";
    h1.style.fontWeight = "lighter";
    h1.style.fontFamily = "sans-serif";
    h1.innerHTML = motorcycles[i];
    h1.classList = "border";
    document.body.appendChild(h1);
}