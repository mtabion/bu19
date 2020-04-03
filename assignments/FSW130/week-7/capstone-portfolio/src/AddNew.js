import React, { useState } from "react";

import { connect } from "react-redux";

function AddNew(props) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <input
        placeholder="Name"
        value={name}
        onChange={event => {
          setName(event.target.value);
        }}
      />
      <input
        placeholder="Address"
        value={address}
        onChange={event => {
          setAddress(event.target.value);
        }}
      />
      <input
        placeholder="Phone"
        value={phone}
        onChange={event => {
          setPhone(event.target.value);
        }}
      />
      <input
        placeholder="Email"
        value={email}
        onChange={event => {
          setEmail(event.target.value);
        }}
      />
      <button
        onClick={() => {
          let randomNumber = Math.floor(Math.random() * 300);
          fetch(`https://rickandmortyapi.com/api/character/${randomNumber}`)
            .then(res => res.json())
            .then(json => {
              console.log(json);
              let newContact = {
                fullName: name,
                phoneNumber: phone,
                email: email,
                address: address,
                image: json.image
              };
              setAddress("");
              setPhone("");
              setEmail("");
              setName("");
              props.addContact(newContact);
            });
        }}
      >
        Add New Contact
      </button>
    </div>
  );
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    addContact: newContact =>
      dispatch({ type: "Add Contact", payload: newContact })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNew);
