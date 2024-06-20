import React, { Component } from "react";
import BallotRoundedIcon from '@mui/icons-material/BallotRounded';
import LibraryAddRoundedIcon from '@mui/icons-material/LibraryAddRounded';
import "./styles.css"; 

class Sidebar extends Component {
  render() {
    const { activeButton, setActiveButton } = this.props;

    return (
      <nav className="sidebar">
        <div className="logo-container">
          <img src="logo.png" alt="Logo" className="logo"/>
        </div>
        <div className="button-container">
          <button
            className={`sidebar-button ${activeButton === 1 ? "active" : ""}`}
            onClick={() => setActiveButton(1)}
          >
            <BallotRoundedIcon
              style={{
                fontSize: 50,
                color: activeButton === 1 ? "white" : "black",
              }}
            />
          </button>
          <button
            className={`sidebar-button ${activeButton === 2 ? "active" : ""}`}
            onClick={() => setActiveButton(2)}
          >
            <LibraryAddRoundedIcon
              style={{
                fontSize: 50,
                color: activeButton === 2 ? "white" : "black",
              }}
            />
          </button>
        </div>
      </nav>
    );
  }
}

export default Sidebar;
