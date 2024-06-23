import React, { Component } from 'react';
import SwapVertRoundedIcon from '@mui/icons-material/SwapVertRounded';
import Search from './Search';
import './styles.css';

class Tablefacture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortAscending: true,
      searchQuery: '',
    };
  }

  handleSortToggle = () => {
    this.setState((prevState) => ({
      sortAscending: !prevState.sortAscending,
    }));
  };

  handleSearchChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  handleDetailsClick = (facture) => {
    this.props.onSelectFacture(facture);
  };

  render() {
    const facturesData = JSON.parse(localStorage.getItem("factureData")) || [];

    let data = facturesData.map((facture) => {
      const montantHT = facture.articles.reduce((sum, article) => sum + parseFloat(article.Montant), 0);
      const montantTVA = montantHT * 0.2;
      const montantTTC = montantHT + montantTVA;

      return {
        id: facture.idFacture,
        client: facture.factureA,
        montantHT: montantHT.toFixed(2),
        montantTVA: montantTVA.toFixed(2),
        montantTTC: montantTTC.toFixed(2),
        articles: facture.articles,
      };
    });

    const { sortAscending, searchQuery } = this.state;

    if (searchQuery) {
      data = data.filter((item) =>
        item.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.montantHT.includes(searchQuery) ||
        item.montantTVA.includes(searchQuery) ||
        item.montantTTC.includes(searchQuery)
      );
    }

    data.sort((a, b) => {
      const comparison = a.client.localeCompare(b.client);
      return sortAscending ? comparison : -comparison;
    });

    return (
      <div className="container">
        <div className='header-container'>
          <div className='header-item-1'>
            <SwapVertRoundedIcon
              className="ml-4"
              style={{ cursor: 'pointer' }}
              onClick={this.handleSortToggle}
            />
          </div>
          <div className='header-item-2'>
            <Search onSearchChange={this.handleSearchChange} />
          </div>
          
        </div>
        <hr className="hr-line" />
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Nom de client</th>
              <th>Montant HT</th>
              <th>Montant TVA</th>
              <th>Montant TTC</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item.id} onClick={() => this.handleDetailsClick(item)}>
                <td>{index + 1}</td>
                <td>{item.client}</td>
                <td>{item.montantHT} €</td>
                <td>{item.montantTVA} €</td>
                <td>{item.montantTTC} €</td>
                <td>
                  <button className='tablefacture-details-btn'>Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Tablefacture;
