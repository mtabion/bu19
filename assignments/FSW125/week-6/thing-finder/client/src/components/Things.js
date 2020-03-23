import React, { useState } from "react";
import AddThingsForm from "./AddThingsForm.js";

export default function Things(props) {
  const { name, type, _id } = props;
  const [editToggle, setEditToggle] = useState(false);
  return (
    <div className="thing">
      {!editToggle ? (
        <>
          <h1>Name: {props.name}</h1>
          <p>Type: {props.type}</p>
          <button className="delete-btn" onClick={() => props.deleteThing(_id)}>
            Delete
          </button>
          <button
            className="edit-btn"
            onClick={() => setEditToggle(prevToggle => !prevToggle)}
          >
            Edit
          </button>
        </>
      ) : (
        <>
          <AddThingsForm
            name={props.name}
            type={props.type}
            _id={props._id}
            btnText="Submit Edit"
            submit={props.editType}
          />
          <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>
            Close
          </button>
        </>
      )}
    </div>
  );
}
