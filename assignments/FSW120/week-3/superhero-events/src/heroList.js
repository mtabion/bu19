import React from "react";
import SuperHero from "./superHero";

const data = require("./data.json");
// console.log(data);

const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
// console.log(numbers);

class HeroList extends React.Component {
  constructor() {
    super();
    this.state = {
      heroList: SuperHero
    };
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
