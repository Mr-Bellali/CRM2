import React, { Component } from "react";
import Tablefacture from "../components/Tablefacture";
import Facture from "../components/Facture";
import './styles.css';

class Listfacture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFacture: null,
    };
  }

  handleSelectFacture = (facture) => {
    this.setState({ selectedFacture: facture });
  };

  handleCloseFacture = () => {
    this.setState({ selectedFacture: null });
  };

  render() {
    const { selectedFacture } = this.state;

    return (
      <section className="section">
        <div className="inner-container">
          <div className="left-panel">
            <Tablefacture onSelectFacture={this.handleSelectFacture} />
          </div>
          <div className="right-panel">
            <Facture facture={selectedFacture} onClose={this.handleCloseFacture} />
          </div>
        </div>
      </section>
    );
  }
}

export default Listfacture;
