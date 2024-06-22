import React, { Component } from 'react';
import './styles.css';
import Dropdown from './Dropdown';

class Addfacture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idFacture: '',
      dateFacture: '',
      selectedClient: '',
      errorMessage: '',
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClientSelect = this.handleClientSelect.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  handleClientSelect(client) {
    this.setState({ selectedClient: client });
  }

  handleFormSubmit(event) {
    event.preventDefault();

    const validArticles = this.props.inputFields.every(inputField => (
      inputField.Article.trim() !== '' &&
      inputField.Quantity.trim() !== '' &&
      inputField.Prix.trim() !== '' &&
      inputField.Remise.trim() !== '' &&
      inputField.Montant.trim() !== ''
    ));

    if (!validArticles) {
      this.setState({ errorMessage: 'Please fill out all fields for the articles.' });
      return;
    }

    const { idFacture, dateFacture, selectedClient } = this.state;

    let existingFactureData;
    try {
      existingFactureData = JSON.parse(localStorage.getItem("factureData"));
      if (!Array.isArray(existingFactureData)) {
        existingFactureData = [];
      }
    } catch (error) {
      existingFactureData = [];
    }

    const newFacture = {
      idFacture,
      dateFacture,
      factureA: selectedClient,
      articles: this.props.inputFields,
    };

    const idExists = existingFactureData.some(
      (EX) => EX.idFacture === newFacture.idFacture
    );

    if (idExists) {
      console.log(`id ${newFacture.idFacture} already exists, try another one`);
    } else {
      existingFactureData.push(newFacture);
      localStorage.setItem("factureData", JSON.stringify(existingFactureData));
      alert("Facture saved to localStorage!");

      this.setState({
        idFacture: '',
        dateFacture: '',
        selectedClient: '',
        errorMessage: '',
      });
    }
  }

  render() {
    return (
      <div className="addfacture-container">
        <h2>Ajouter Facture</h2>
        {this.state.errorMessage && <p className="error-message">{this.state.errorMessage}</p>}
        <form onSubmit={this.handleFormSubmit}>
          <div className="add-facture-form-group">
            <label htmlFor="idFacture">id Facture</label>
            <input
              type="text"
              id="idFacture"
              className="add-facture-form-control"
              value={this.state.idFacture}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="add-facture-form-group">
            <label htmlFor="dateFacture">Date facture</label>
            <input
              type="date"
              id="dateFacture"
              className="add-facture-form-control"
              value={this.state.dateFacture}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="add-facture-articles-container">
            <h3>Articles</h3>
            <ul className="styled-list">
              {this.props.inputFields.map((inputField, index) => (
                <li key={index} className="list-item">
                  Article: {inputField.Article}, Quantity: {inputField.Quantity}, Prix: {inputField.Prix}, Remise: {inputField.Remise}, Montant: {inputField.Montant}
                </li>
              ))}
            </ul>
          </div>
          <div className="add-facture-form-group">
            <label htmlFor="factureA">Facture a</label>
            <Dropdown onSelectClient={this.handleClientSelect} />
          </div>
          <div className="add-facture-button-container">
            <button type="submit" className="btn">
              Ajoute facture
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Addfacture;
