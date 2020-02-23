import React, { Component } from "react";
import { ThemeContextConsumer } from "./userContext";

function DataList(props) {
  return (
    <ThemeContextConsumer>
      {context => (
        <div className="data-list">
          {context.data.map((item, index) => (
            <div className="data-input" key={index}>
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
          ))}
        </div>
      )}
    </ThemeContextConsumer>
  );
}

export default DataList;
