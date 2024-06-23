import React, { Component } from 'react';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import './styles.css';

class Facture extends Component {
  handleDownload = () => {
    const { facture } = this.props;
    if (!facture) return;

    const formattedFacture = `
      Mon Societe
      Facture: ${facture.id}
      Client: ${facture.client}
      
      Articles:
      ${facture.articles.map(article => `
        Article: ${article.Article}
        Quantity: ${article.Quantity}
        Prix: ${article.Prix} €
        Remise: ${article.Remise}
        Montant: ${article.Montant} €
      `).join('')}
      
      Montant HT: ${facture.montantHT} €
      Montant TVA: ${facture.montantTVA} €
      Montant TTC: ${facture.montantTTC} €
      Total: ${facture.montantTTC} €
    `;
    const blob = new Blob([formattedFacture], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `Facture_${facture.id}.txt`;
    link.click();
  };

  render() {
    const { facture, onClose } = this.props;
    if (!facture) return <div>Please select a facture to view details</div>;

    return (
      <div className="facture-container">
        <div className="header">
          <h1>Mon Societe</h1>
          <div className="icon-placeholder">
            <DownloadRoundedIcon style={{cursor: 'pointer'}} onClick={this.handleDownload} />
          </div>
        </div>
        <div className="client-info">
          <p>Facture: {facture.id}</p>
          <p>Client: {facture.client}</p>
          <p>Date: {new Date().toLocaleDateString()}</p>
        </div>
        <div className="facture-table">
          <div className="row">
            <div className="col">Article</div>
            <div className="col">Quantity</div>
            <div className="col">Prix</div>
            <div className="col">Remise</div>
            <div className="col">Montant</div>
          </div>
          {facture.articles.map((article, index) => (
            <div className="row" key={index}>
              <div className="col">{article.Article}</div>
              <div className="col">{article.Quantity}</div>
              <div className="col">{article.Prix} €</div>
              <div className="col">{article.Remise}</div>
              <div className="col">{article.Montant} €</div>
            </div>
          ))}
          <div className="row">
            <div className="col">Montant HT</div>
            <div className="col">{facture.montantHT} €</div>
          </div>
          <div className="row">
            <div className="col">Montant TVA</div>
            <div className="col">{facture.montantTVA} €</div>
          </div>
          <div className="row">
            <div className="col">Montant TTC</div>
            <div className="col">{facture.montantTTC} €</div>
          </div>
          <div className="row total">
            <div className="col">Total</div>
            <div className="col">{facture.montantTTC} €</div>
          </div>
        </div>
        <button onClick={onClose} style={{ cursor: "pointer" }}>Close</button>
      </div>
    );
  }
}

export default Facture;
