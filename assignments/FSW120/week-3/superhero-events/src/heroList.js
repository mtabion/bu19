import React from "react";
import SuperHero from "./superHero";
const data = require("./data.json");

const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

class HeroList extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="hero_container">
        {data.map(function(data, nums) {
          const keys = numbers[nums];
          console.log(keys);
          return (
            <SuperHero
              onClick={() => {
                alert(data.catchPhrase);
              }}
              key={numbers[nums]}
              //   className={classes[nums]}
              h1={data.name}
              h3={data.show}
              src={data.imageName}
            />
          );
        })}
      </div>
    );
  }
}
export default HeroList;
