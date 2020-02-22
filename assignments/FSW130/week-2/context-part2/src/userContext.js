import React, { Component } from "react";
const { Provider, Consumer } = React.createContext();
class ThemeContextProvider extends Component {
  state = {
    data: [
      {
        name: "Rick Sanchez",
        status: "Alive",
        species: "Human",
        gender: "Male"
      },
      {
        name: "Morty Smith",
        status: "Alive",
        species: "Human",
        gender: "Male"
      },
      {
        name: "Abadango Cluster Princess",
        status: "Alive",
        species: "Alien",
        gender: "Female"
      }
    ]
  };

  addCharacter = (name, species, status, gender) => {
    let newCharacter = {
      name: name,
      species: species,
      status: status,
      gender: gender
    };

    let characters = this.state.data;

    characters.push(newCharacter);

    this.setState({ data: characters });
  };

  render() {
    return (
      <Provider
        className="newCharacter"
        value={{ data: this.state.data, addCharacter: this.addCharacter }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { ThemeContextProvider, Consumer as ThemeContextConsumer };
