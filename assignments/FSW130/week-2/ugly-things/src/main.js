import React, { useState } from "react";
import { ThemeContextConsumer } from "./userContext";
import DataList from "./dataList";

function Main(props) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  return (
    <ThemeContextConsumer>
      {context => (
        <div>
          <div className="new-character-form">
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={event => {
                setTitle(event.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Img Url"
              value={image}
              onChange={event => {
                setImage(event.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Description"
              value={description}
              onChange={event => {
                setDescription(event.target.value);
              }}
            />
            <button
              onClick={() => {
                context.addCharacter(title, image, description);
                setTitle("");
                setImage("");
                setDescription("");
              }}
            >
              Submit
            </button>
          </div>

          <DataList />
        </div>
      )}
    </ThemeContextConsumer>
  );
}

export default Main;
