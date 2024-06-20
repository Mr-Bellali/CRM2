import React, { Component } from 'react';
import Addfacture from "../components/Addfacture";
import './styles.css';
import Addarticle from '../components/Addarticle';

class Createfacture extends Component {
  render() {
    return (
      <section className="createfacture-section">
        <Addfacture />
        <Addarticle />
      </section>
    );
  }
}

export default Createfacture;
