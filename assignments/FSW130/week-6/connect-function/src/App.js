import React, { useState } from "react";
import { connect } from "react-redux";

import "./App.css";

function App(props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  console.log(props);
  return (
    <div>
      <div className="add-new-contact-form">
        <input
          onChange={event => setName(event.target.value)}
          type="text"
          id="new-contact-name"
          value={name}
          placeholder="Name"
        />
        <input
          onChange={event => setEmail(event.target.value)}
          type="text"
          id="new-contact-email"
          value={email}
          placeholder="Email"
        />
        <input
          onChange={event => setPhone(event.target.value)}
          type="text"
          id="new-contact-phone"
          value={phone}
          placeholder="Phone"
        />
        <button
          onClick={() => {
            let newContact = { name: name, phone: phone, email: email };
            props.addContact(newContact);
            setName("");
            setPhone("");
            setEmail("");
          }}
        >
          Add Contact
        </button>
      </div>
      {props.contacts.map((item, i) => {
        return (
          <div key={i} className="contact-wrapper">
            <div className="contact-name">{item.name}</div>
            <div className="contact-email">{item.email}</div>
            <div className="contact-phone">{item.phone}</div>
            <button
              onClick={() => {
                props.delete(i);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    contacts: state.contacts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    delete: index => dispatch({ type: "Delete Contact", payload: index }),
    addContact: newContact =>
      dispatch({ type: "Add Contact", payload: newContact })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
