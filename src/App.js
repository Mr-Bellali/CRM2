import React, { Component } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Createfacture from "./pages/Createfacture";
import Navbar from "./components/Navbar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeButton: 1,
      isMobile: window.innerWidth <= 768,
    };
  }

  handleResize = () => {
    console.log('Window width:', window.innerWidth);
    this.setState({ isMobile: window.innerWidth <= 768 });
  };

  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  setActiveButton = (buttonId) => {
    this.setState({ activeButton: buttonId });
  };

  render() {
    const { activeButton, isMobile } = this.state;

    return (
      <div className="app-container">
        {isMobile ? (
          <Navbar
            activeButton={activeButton}
            setActiveButton={this.setActiveButton}
          />
        ) : (
          <Sidebar
            activeButton={activeButton}
            setActiveButton={this.setActiveButton}
          />
        )}
        <main className="main-content">
          <Createfacture />
        </main>
      </div>
    );
  }
}

export default App;
