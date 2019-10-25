var addLi = document.createElement("li")
var list = document.getElementById("list")
    list.append(addLi)
    addLi.textContent = "I'm on third";

function createListItem (text) {
    var li = document.createElement("li");
    li.textContent = text;
    return li;
}
function appendChildren (parent, children) {
    children.forEach(function (child) {
        parent.appendChild(child);
    });
}

var secondList = document.getElementById("secondList");
var items = [
    createListItem("Bryan University"),
    createListItem("Full Stack Web Developer"),
    createListItem("2019")

]

appendChildren(secondList, items);