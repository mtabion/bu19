//Create a default state
let defaultState = [];

//Set up the reducer
reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "Add Contact":
      return [...state, action.payload];
      break;
    case "Delete Contact":
      state.splice(action.payload, 1);
      return state;
      break;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

render = () => {
  console.log(store.getState());

  let contacts = store.getState();
  document.getElementById("contacts-list").innerHTML = "";

  for (var i = 0; i < contacts.length; i++) {
    //Create the contact wrapper
    let contactWrapper = document.createElement("div");

    //Create the divs for the info and update the text
    let nameDiv = document.createElement("div");
    nameDiv.classList.add("contact-name");
    nameDiv.innerText = contacts[i].name;
    contactWrapper.appendChild(nameDiv);

    let emailDiv = document.createElement("div");
    emailDiv.classList.add("contact-email");
    emailDiv.innerText = contacts[i].email;
    contactWrapper.appendChild(emailDiv);

    let phoneDiv = document.createElement("div");
    phoneDiv.classList.add("contact-phone");
    phoneDiv.innerText = contacts[i].phone;
    contactWrapper.appendChild(phoneDiv);

    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.setAttribute("contactid", i);
    deleteButton.onclick = event => {
      console.log(parseInt(event.target.getAttribute("contactid")));
      deleteContact(parseInt(event.target.getAttribute("contactid")));
    };
    contactWrapper.appendChild(deleteButton);

    document.getElementById("contacts-list").appendChild(contactWrapper);
  }
};

deleteContact = index => {
  store.dispatch({ type: "Delete Contact", payload: index });
};
render();

store.subscribe(render);

addNewContact = () => {
  let newName = document.getElementById("new-contact-name").value;
  let newEmail = document.getElementById("new-contact-email").value;
  let newPhone = document.getElementById("new-contact-phone").value;

  let newContact = {
    phone: newPhone,
    email: newEmail,
    name: newName
  };

  store.dispatch({ type: "Add Contact", payload: newContact });
};
