import React, { Component } from 'react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import './styles.css'; 

class Search extends Component {
  render() {
    return (
      <div className="search-container">
        <SearchRoundedIcon className="search-icon" />
        <input
          type="text"
          className="search-input"
          placeholder="Rechercher..."
        />
      </div>
    );
  }
}

export default Search;
