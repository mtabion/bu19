import React, { useState } from "react";
import AddMovieForm from "./AddMovieForm.js";

export default function Movie(props) {
  const { title, genre, _id } = props;
  const [editToggle, setEditToggle] = useState(false);
  // console.log("props in Movie.js", props);
  return (
    <div className="movie">
      {!editToggle ? (
        <>
          <h1>Title: {props.title}</h1>
          <p>Genre: {props.genre}</p>
          <button className="delete-btn" onClick={() => props.deleteMovie(_id)}>
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
          <AddMovieForm
            title={props.title}
            genre={props.genre}
            _id={props._id}
            btnText="Submit Edit"
            submit={props.editMovie}
          />
          <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>
            Close
          </button>
        </>
      )}
    </div>
  );
}
