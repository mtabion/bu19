const header=document.getElementById("addTask");

const input2=document.createElement("input");

    header.append(input2)
    
    input2.type = "text"

function addText(){

    const input = document.getElementById('todo').value;

    const header=document.createElement("h1");

    const clearForm = document.getElementById("doList")

    const textnode=document.createTextNode(input + " " + input2.value);
    header.appendChild(textnode);

    document.getElementById('addTask').appendChild(header)

    const removeTask = document.createElement('input');

    removeTask.setAttribute('type', 'button');

    removeTask.setAttribute("value", "Remove");

    removeTask.setAttribute("id", "removeButton");

    removeTask.addEventListener('click', function(e) {
        header.parentNode.removeChild(header);
        
    }, false);
    header.appendChild(removeTask);
    clearForm.reset(); 
}
    