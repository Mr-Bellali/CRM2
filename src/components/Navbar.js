// components/Navbar.js

import React from 'react';
import BallotRoundedIcon from '@mui/icons-material/BallotRounded';
import LibraryAddRoundedIcon from '@mui/icons-material/LibraryAddRounded';
import "./styles.css"; 

const Navbar = ({ activeButton, setActiveButton }) => {
  return (
    <nav className="navbar">
      <button
        className={`navbar-button ${activeButton === 1 ? "active" : ""}`}
        onClick={() => setActiveButton(1)}
      >
        <BallotRoundedIcon
          style={{
            fontSize: 30,
            color: activeButton === 1 ? "white" : "black",
          }}
        />
      </button>
      <button
        className={`navbar-button ${activeButton === 2 ? "active" : ""}`}
        onClick={() => setActiveButton(2)}
      >
        <LibraryAddRoundedIcon
          style={{
            fontSize: 30,
            color: activeButton === 2 ? "white" : "black",
          }}
        />
      </button>
    </nav>
  );
};

export default Navbar;
