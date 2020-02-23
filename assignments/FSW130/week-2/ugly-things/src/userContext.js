import React, { Component } from "react";
const { Provider, Consumer } = React.createContext();
class ThemeContextProvider extends Component {
  state = {
    data: [
      {
        title: "Rick Sanchez",
        image: "https://rickandmortyapi.com/api/character/avatar/13.jpeg",
        description: "Human"
      },
      {
        title: "Morty Smith",
        image: "Alive",
        description: "Human"
      },
      {
        title: "Abadango Cluster Princess",
        image: "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
        description: "Alien"
      }
    ]
  };

  deleteCharacter = character => {
    console.log("deleting character...");
    let characters = this.state.data;
    let modifiedData = characters.filter((object, index, arr) => {
      console.log("object.title: " + object.title);
      console.log("character.title: " + character.title);
      if (object.title === character.title) {
        return false;
      } else {
        return true;
      }
    });
    console.log("modifiedData: " + JSON.stringify(modifiedData));
    this.setState({
      data: modifiedData
    });
    // TODO
  };

  addCharacter = (title, image, description) => {
    let newCharacter = {
      title: title,
      image: image,
      description: description
    };
    let characters = this.state.data;
    characters.push(newCharacter);
    this.setState({ data: characters });
  };

  render() {
    return (
      <Provider
        className="newCharacter"
        value={{
          data: this.state.data,
          addCharacter: this.addCharacter,
          deleteCharacter: this.deleteCharacter
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { ThemeContextProvider, Consumer as ThemeContextConsumer };
