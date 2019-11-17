function validate() {
  const input_text = document.getElementById("firstname");
  if(input_text.value == "") {
      alert("Please enter your first name.");
      return false;
}
  alert("Submitting form, thank you!");
  return true;
}  