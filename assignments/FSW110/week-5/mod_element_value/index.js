input.placeholder = "First Name";

input2.placeholder = "Last Name";

input3.placeholder = "Age";

function validate() {
  const inputText = document.getElementsByTagName("form");
  const inputValues = ["First Name: " + input.value + "\nLast Name: " + input2.value  + "\nAge: " + input3.value];
  const message = ("Please enter your information.")
  
  if(inputText.value === "") {
    alert(message);
        return false;
  }else
    alert(inputValues);
        return true;
}