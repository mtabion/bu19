console.log(document)

// var navbar = document.createElement("li")
// navbar.textContent = "Home"
// var nav = document.getElementById("nav")
// nav.append(navbar)

// var navbar = document.createElement("li")
// navbar.textContent = "About"
// var nav = document.getElementById("nav")
// nav.append(navbar)

// var navbar = document.createElement("li")
// navbar.textContent = "Gallery"
// var nav = document.getElementById("nav")
// nav.append(navbar)

//This will only work with a single quote
var body = 
    '<ul>\
        <li>\
            <a href="#">Home</a>\
        </li>\
        <li>\
            <a href="#">About</a>\
        </li>\
        <li>\
            <a href="#">Gallery</a>\
        </li>\
    </ul>'

document.getElementById('nav').innerHTML = body;

var header =  document.getElementById("header")
header.textContent = "Hawaii State Fish"

var subh =  document.getElementById("subh")
subh.textContent = "It's name: Humuhumunukunukuapua'a"

var para1 =  document.getElementById("para")
para.textContent = "Humuhumunukunukuāpuaʻa. That’s the short, memorable, and easily pronounceable name of Hawaii’s state fish. As the only U.S. state unattached to North America, it’s unsurprising that the island chain of Hawaii—rich with seaside culture and customs—has a designated state fish. Delve deeper into the story behind the humuhumu."

var para2 =  document.getElementById("para2")
para2.textContent ="Humuhumunukunukuāpuaʻa (Reef Triggerfish) may seem like an intimidating word in itself, but it’s actually quite simple. Regardless, locals often save their breath and shorten it to just humuhumu. Like all Hawaiian names, there is deep meaning and history behind the state fish’s moniker. When broken down, the first part, “humuhumu,” is the Hawaiian word used for all species of triggerfish. The latter half of the name, “nukunukuāpuaʻa,” translates to “snout like a pig.” Albeit a seemingly strange analogy, there is a similarity between the unique grunting sound the live fish make when threatened and the recognizable sounds coming from pigs."

var foo =  document.getElementById("foo")
foo.textContent = "Related Fishes"

var typeOfFish = ['Lagoon', ' Reef', ' Pinktail', ' Black', ' Lei', ' Bridled', ' Gilded', ' Crosshatch', ' Bluelined', ' Ocean']
document.getElementById("list").innerHTML = typeOfFish;
