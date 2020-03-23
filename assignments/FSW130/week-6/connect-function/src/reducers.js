let defaultState = {
  contacts: [
    {
      phone: "555-555-5555",
      email: "jdoe@unknown.com",
      name: "John Doe"
    },
    {
      phone: "555-555-1345",
      email: "fry@future.com",
      name: "Philip Fry"
    },
    {
      phone: "555-555-9876",
      email: "leela@future.com",
      name: "Leela"
    }
  ]
};

let reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "Add Contact":
      return Object.assign({}, state, {
        contacts: [...state.contacts, action.payload]
      });
    case "Delete Contact":
      console.log("Deleting");
      console.log(state);
      let newContacts = state.contacts.slice();
      newContacts.splice(action.payload, 1);
      console.log(state);
      return Object.assign({}, state, {
        contacts: newContacts
      });
    case "TEST":
      console.log("This is only a test", action.payload);
      return state;
    default:
      return state;
  }
};

export default reducer;
