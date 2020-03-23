import React, { useState, useEffect } from "react";
import axios from "axios";
import Things from "./components/Things.js";
import AddThingsForm from "./components/AddThingsForm.js";
import "./components/styles.css";

export default function App() {
  const [things, setThings] = useState([]);

  function getThings() {
    axios
      .get("/things")
      .then(res => setThings(res.data))
      .catch(err => console.log(err));
  }

  function addThing(newThing) {
    axios
      .post("/things", newThing)
      .then(res => {
        setThings(prevThings => [...prevThings, res.data]);
      })
      .catch(err => console.log(err));
  }

  function deleteThing(thingId) {
    axios
      .delete(`/things/${thingId}`)
      .then(res => {
        setThings(prevThings =>
          prevThings.filter(thing => thing.id !== thingId)
        );
      })
      .catch(err => console.log(err));
  }

  function editThing(updates, thingId) {
    console.log("editThing", thingId);
    axios
      .put(`/things/${thingId}`, updates)
      .then(res => {
        setThings(prevThings =>
          prevThings.filter(thing => thing._id !== thingId)
        );
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    getThings();
  }, []);

  return (
    <div>
      <div className="movie-container">
        <AddThingsForm submit={addThing} btnText="Add Thing" />
        {things.map(thing => (
          <Things
            {...thing}
            key={thing.name}
            deleteThing={deleteThing}
            editThing={editThing}
          />
        ))}
      </div>
    </div>
  );
}
