import React, { Component } from 'react';
import SwapVertRoundedIcon from '@mui/icons-material/SwapVertRounded';
import Search from './Search';
import './styles.css';

class Tablefacture extends Component {
  render() {
    const data = [
      { id: 1, client: 'Client A', montantHT: 100, montantTVA: 20, montantTTC: 120, details: 'Detail A' },
      { id: 2, client: 'Client B', montantHT: 200, montantTVA: 40, montantTTC: 240, details: 'Detail B' },
      { id: 3, client: 'Client C', montantHT: 300, montantTVA: 60, montantTTC: 360, details: 'Detail C' },
    ];

    return (
      <div className="container">
        <div className='header-container'>
          <div className='header-item'>
            <SwapVertRoundedIcon className="ml-4" />
          </div>
          <div className='header-item'>
            <Search />
          </div>
          <div className='header-item'></div>
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
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.client}</td>
                <td>{item.montantHT} €</td>
                <td>{item.montantTVA} €</td>
                <td>{item.montantTTC} €</td>
                <td>{item.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Tablefacture;
