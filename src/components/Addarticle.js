import React, { useState } from "react";
import "./styles.css";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

const AddArticle = () => {
  const [inputFields, setInputFields] = useState([
    { Article: "", Quantity: "", Prix: "", Remise: "", Montant: "" },
  ]);

  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;
    setInputFields(values);
  };

  const handleFields = () => {
    setInputFields([
      ...inputFields,
      { Article: "", Quantity: "", Prix: "", Remise: "", Montant: "" },
    ]);
  };

  return (
    <form className="addarticle-container">
      {inputFields.map((inputField, index) => (
        <div key={index} className="input-fields-container">
          <div className="add-article-form-wrapper">
            <div className="add-article-form-group">
              <label htmlFor="article">Article</label>
              <select
                id="article"
                name="Article"
                className="add-article-form-control"
                value={inputField.Article}
                onChange={(event) => handleInputChange(index, event)}
              >
                <option value="Article1">Article 1</option>
                <option value="Article2">Article 2</option>
                <option value="Article3">Article 3</option>
              </select>
            </div>
            <div className="add-article-form-group">
              <label htmlFor="quantity">Quantity</label>
              <input
                type="number"
                id="quantity"
                name="Quantity"
                className="add-article-form-control"
                value={inputField.Quantity}
                onChange={(event) => handleInputChange(index, event)}
              />
            </div>
            <div className="add-article-form-group">
              <label htmlFor="prix">Prix</label>
              <input
                type="number"
                id="prix"
                name="prix"
                className="add-article-form-control"
                value={inputField.Prix}
                onChange={(event) => handleInputChange(index, event)}
              />
            </div>
            <div className="add-article-form-group">
              <label htmlFor="remise">Remise</label>
              <input
                type="number"
                id="remise"
                name="remise"
                className="add-article-form-control"
                value={inputField.Remise}
                onChange={(event) => handleInputChange(index, event)}
              />
            </div>
            <div className="add-article-form-group">
              <label htmlFor="montant">Montant</label>
              <input
                type="number"
                id="montant"
                name="montant"
                className="add-article-form-control"
                value={inputField.Montant}
                onChange={(event) => handleInputChange(index, event)}
                readOnly
              />
            </div>
            <div className="add-article-form-group">
              <button className="remove-article-btn">
                <RemoveRoundedIcon
                  style={{
                    fontSize: 20,
                    color: "black",
                  }}
                />
              </button>
            </div>
            <div className="add-article-form-group">
              <button
                type="button"
                className="add-article-btn"
                onClick={() => handleFields()}
              >
                <AddRoundedIcon
                  style={{
                    fontSize: 20,
                    color: "black",
                  }}
                />
              </button>
            </div>
          </div>
        </div>
      ))}
    </form>
  );
};

export default AddArticle;
