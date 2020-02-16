import React from "react";
import UserContext from "./userContext";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

class App extends React.Component {
  // static contextType = UserContext;
  render() {
    const username = this.context;
    return (
      <div>
        <UserContext.Consumer>
          {theme => <Header theme={theme} />}
        </UserContext.Consumer>

        <UserContext.Consumer>
          {theme => <Main theme={theme} />}
        </UserContext.Consumer>

        <UserContext.Consumer>
          {theme => <Footer theme={theme} />}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default App;
