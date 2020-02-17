import React from "react";
import UserContext from "./userContext";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

class App extends React.Component {
  state = {
    themeChange: "dark"
  };
  render() {
    return (
      <UserContext.Consumer>
        {value => (
          <div>
            <Header theme={this.state.themeChange} />
            <Main
              handleClick={() => {
                this.setState(prevState => ({
                  themeChange:
                    prevState.themeChange === "light" ? "dark" : "light"
                }));
              }}
              theme={this.state.themeChange}
            />

            <Footer theme={this.state.themeChange} />
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

export default App;
