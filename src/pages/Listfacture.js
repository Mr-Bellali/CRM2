import React, { Component } from "react";
import Tablefacture from "../components/Tablefacture";
import './styles.css'; // Ensure to import the CSS file

class Listfacture extends Component {
  render() {
    return (
      <section className="section">
        <div className="inner-container">
          <div className="left-panel">
            <Tablefacture />
          </div>
          <div className="right-panel"></div>
        </div>
      </section>
    );
  }
}

export default Listfacture;
