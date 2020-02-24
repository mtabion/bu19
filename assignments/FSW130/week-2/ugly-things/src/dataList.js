import React, { Component } from "react";
import { ThemeContextConsumer } from "./userContext";

function DataList(props) {
  return (
    <ThemeContextConsumer>
      {context => (
        <div className="data-list">
          {context.data.map((item, index) => (
            <div>
              <div className="data-input" key={index}>
                <h3>ID: {item.id}</h3>
                <h3>Title: {item.title}</h3>
                <img src={item.image} alt={item.title}></img>
                <h3>Description: {item.description}</h3>
                <button
                  onClick={() => {
                    context.deleteCharacter(item);
                  }}
                >
                  DELETE
                </button>
              </div>

              <div className="new-character-form">
                <input
                  type="text"
                  placeholder={item.title}
                  onChange={event => {
                    item.title = event.target.value;
                  }}
                />
                <input
                  type="text"
                  placeholder={item.image}
                  onChange={event => {
                    item.image = event.target.value;
                  }}
                />
                <input
                  type="text"
                  placeholder={item.description}
                  onChange={event => {
                    item.description = event.target.value;
                  }}
                />
                <button
                  onClick={() => {
                    context.editCharacter(
                      item.id,
                      item.title,
                      item.image,
                      item.description
                    );
                  }}
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </ThemeContextConsumer>
  );
}

export default DataList;
