import React, { useState } from 'react';
import Addfacture from "../components/Addfacture";
import './styles.css';
import Addarticle from '../components/Addarticle';

const Createfacture = () => {
  const [inputFields, setInputFields] = useState([
    { Article: "", Quantity: "", Prix: "", Remise: "", Montant: "", disabled: false },
  ]);

  return (
    <section className="createfacture-section">
      <Addfacture inputFields={inputFields} />
      <Addarticle inputFields={inputFields} setInputFields={setInputFields} />
    </section>
  );
};

export default Createfacture;
