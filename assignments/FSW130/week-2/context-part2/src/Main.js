import React, { useState } from "react";
import { ThemeContextConsumer } from "./userContext";
import DataList from "./DataList";

function Main(props) {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [species, setSpecies] = useState("");
  const [gender, setGender] = useState("");
  return (
    <ThemeContextConsumer>
      {context => (
        <div>
          <div className="new-character-form">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={event => {
                setName(event.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Species"
              value={species}
              onChange={event => {
                setSpecies(event.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Status"
              value={status}
              onChange={event => {
                setStatus(event.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Gender"
              value={gender}
              onChange={event => {
                setGender(event.target.value);
              }}
            />
            <button
              onClick={() => {
                context.addCharacter(name, species, status, gender);
                setName("");
                setSpecies("");
                setStatus("");
                setGender("");
              }}
            >
              Add Character
            </button>
          </div>

          <DataList />
        </div>
      )}
    </ThemeContextConsumer>
  );
}

export default Main;
