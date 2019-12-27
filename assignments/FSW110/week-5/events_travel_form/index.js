const customerName = prompt("Please enter your name", "")
if (customerName!= null) {
    document.getElementById("welcome").innerHTML =
    "Hello " + customerName + "! How are you today? Please fill out your information";
}

const customerInfo= document.customer

document.customer.addEventListener("submit", (event) =>{
    event.preventDefault()
    
const firstName = customerInfo.firstName.value;  
const lastName = customerInfo.lastName.value;
const age = customerInfo.age.value;
const gender = customerInfo.gender.value;
const destination = customerInfo.place.value;
const chooseDiet = []
    for(let i = 0; i < customerInfo.diet.length; i++) {
        if(customerInfo.diet[i].checked){
            chooseDiet.push(customerInfo.diet[i].value)
        }
}
console.log(firstName + " " + lastName + " " + age + " " + gender + " " + destination + " ");
console.log(chooseDiet);
alert("First name: " + firstName + "\n" + "Last name: " + lastName + "\n" + "Age: " + age + "\n" + "Gender: " + gender + "\n" + "Location: " + destination + "\n" + "Dietary restrictions: " + chooseDiet.join())

})

