import React, { Component } from "react";
import "./App.css"; 
import Sidebar from "./components/Sidebar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeButton: 1,
    };
  }

  setActiveButton = (buttonId) => {
    this.setState({ activeButton: buttonId });
  };

  render() {
    const { activeButton } = this.state;

    return (
      <div className="app-container">
         <Sidebar
          activeButton={activeButton}
          setActiveButton={this.setActiveButton}
        />
        <main className="main-content">

        </main>
      </div>
    );
  }
}

export default App;
