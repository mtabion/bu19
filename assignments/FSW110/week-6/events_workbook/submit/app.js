// The "submit" event refreshes your browser by default
// use "e.preventDefault()" in the first line of your callback function to prevent this
// remember to pass "e" into the callback function
const input = document.getElementById("name")

input.name ="user_name" 

input.setAttribute("id", "firstName")

const age = document.getElementById("age")

age.type ="number" 