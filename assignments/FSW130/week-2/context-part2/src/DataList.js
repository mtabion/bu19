import React, { Component } from "react";
import { ThemeContextConsumer } from "./userContext";

function DataList(props) {
  return (
    <ThemeContextConsumer>
      {context => (
        <div className="data-list">
          {context.data.map((item, index) => (
            <div className="data-input" key={index}>
              <h3>Name: {item.name}</h3>
              <h3>Status: {item.status}</h3>
              <h3>Species: {item.species}</h3>
              <h3>Gender: {item.gender}</h3>
            </div>
          ))}
        </div>
      )}
    </ThemeContextConsumer>
  );
}

export default DataList;
