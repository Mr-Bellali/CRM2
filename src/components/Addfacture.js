import React, { Component } from 'react';
import './styles.css';

class Addfacture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      errorMessage: '', // State for error message
    };

    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleClickOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  handleFormSubmit(event) {
    event.preventDefault();
  
    // Check if there are articles added and validate each article
    const validArticles = this.props.inputFields.every(inputField => (
      inputField.Article.trim() !== '' &&
      inputField.Quantity.trim() !== '' &&
      inputField.Prix.trim() !== '' &&
      inputField.Remise.trim() !== '' &&
      inputField.Montant.trim() !== ''
    ));
  
    if (!validArticles) {
      alert('Please fill out all fields for the articles.');
      return;
    }
  
    const idFacture = event.target.elements.idFacture.value;
    const dateFacture = event.target.elements.dateFacture.value;
    const factureA = event.target.elements.factureA.value;
  
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
      factureA,
      articles: this.props.inputFields, // Add articles to the new facture
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
  
      event.target.elements.idFacture.value = '';
      event.target.elements.dateFacture.value = '';
      event.target.elements.factureA.value = '';
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
            <input type="text" id="idFacture" className="add-facture-form-control" />
          </div>
          <div className="add-facture-form-group">
            <label htmlFor="dateFacture">Date facture</label>
            <input type="date" id="dateFacture" className="add-facture-form-control" />
          </div>
          <div className="add-facture-form-group">
            <label htmlFor="factureA">Facture a</label>
            <select id="factureA" className="add-facture-form-control">
              <option value="">Select</option>
              <option value="societe A">societe A</option>
              <option value="societe B">societe B</option>
            </select>
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
