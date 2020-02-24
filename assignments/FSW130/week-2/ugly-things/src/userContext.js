import React, { Component } from "react";
const { Provider, Consumer } = React.createContext();
class ThemeContextProvider extends Component {
  state = {
    id: 2,
    data: [
      {
        id: 0,
        title: "Rick Sanchez",
        image: "https://rickandmortyapi.com/api/character/avatar/13.jpeg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
      {
        id: 1,
        title: "Morty Smith",
        image:
          "https://i2.wp.com/us-east-1.linodeobjects.com/gunaxin/2009/04/edna3.jpg?fit=300%2C300&ssl=1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum rhoncus nisl, eget porttitor elit consectetur ut. Vestibulum ut pulvinar."
      },
      {
        id: 2,
        title: "Abadango Cluster Princess",
        image: "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
        description: "Lorem ipsum dolor sit amet."
      }
    ]
  };

  deleteCharacter = character => {
    let characters = this.state.data;
    let modifiedData = characters.filter((object, index, arr) => {
      if (object.id === character.id) {
        return false;
      } else {
        return true;
      }
    });
    this.setState({
      data: modifiedData
    });
  };

  addCharacter = (title, image, description) => {
    this.state.id = this.state.id + 1;
    let id = this.state.id;

    let newCharacter = {
      id: id,
      title: title,
      image: image,
      description: description
    };
    let characters = this.state.data;
    characters.push(newCharacter);
    this.setState({ data: characters });
  };

  editCharacter = (id, title, image, description) => {
    let characters = this.state.data;
    let character = {
      id: id,
      title: title,
      image: image,
      description: description
    };
    for (let i = 0; i < characters.length; i++) {
      characters[i] = character;
    }
    this.setState({ data: characters });
  };

  render() {
    return (
      <Provider
        className="newCharacter"
        value={{
          data: this.state.data,
          addCharacter: this.addCharacter,
          deleteCharacter: this.deleteCharacter,
          editCharacter: this.editCharacter
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { ThemeContextProvider, Consumer as ThemeContextConsumer };
