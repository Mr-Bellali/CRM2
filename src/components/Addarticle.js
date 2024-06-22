import React, { useState } from "react";
import "./styles.css";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

const AddArticle = () => {
  const [inputFields, setInputFields] = useState([
    { Article: "", Quantity: "", Prix: "", Remise: "", Montant: "", disabled: false },
  ]);

  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;

    // Automatically calculate Montant
    const quantity = parseFloat(values[index].Quantity) || 0;
    const prix = parseFloat(values[index].Prix) || 0;
    const remise = parseFloat(values[index].Remise) || 0;
    values[index].Montant = (quantity * prix - remise).toFixed(2);

    setInputFields(values);

    // Check if all fields are filled and log the entire array of input fields
    const allFieldsFilled = Object.values(values[index]).slice(0, -1).every(
      (field) => field !== ""
    );
    if (allFieldsFilled) {
      console.log("All rows: ", values);
    }
  };

  const handleAddAndDisableFields = (index) => {
    const values = [...inputFields];
    const allFieldsFilled = Object.values(values[index]).slice(0, -1).every(
      (field) => field !== ""
    );

    if (allFieldsFilled) {
      values[index].disabled = true;
      setInputFields([
        ...values,
        { Article: "", Quantity: "", Prix: "", Remise: "", Montant: "", disabled: false },
      ]);
    } else {
      alert("Please fill in all fields before adding a new row.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("input Fields: ", inputFields);
  };

  return (
    <form className="addarticle-container" onSubmit={handleSubmit}>
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
                disabled={inputField.disabled}
              >
                <option value="">Select an article</option>
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
                disabled={inputField.disabled}
              />
            </div>
            <div className="add-article-form-group">
              <label htmlFor="prix">Prix</label>
              <input
                type="number"
                id="prix"
                name="Prix"
                className="add-article-form-control"
                value={inputField.Prix}
                onChange={(event) => handleInputChange(index, event)}
                disabled={inputField.disabled}
              />
            </div>
            <div className="add-article-form-group">
              <label htmlFor="remise">Remise</label>
              <input
                type="number"
                id="remise"
                name="Remise"
                className="add-article-form-control"
                value={inputField.Remise}
                onChange={(event) => handleInputChange(index, event)}
                disabled={inputField.disabled}
              />
            </div>
            <div className="add-article-form-group">
              <label htmlFor="montant">Montant</label>
              <input
                type="number"
                id="montant"
                name="Montant"
                className="add-article-form-control"
                value={inputField.Montant}
                readOnly
              />
            </div>
            <div className="add-article-form-group">
              <button
                type="button"
                className="add-article-btn"
                onClick={() => handleAddAndDisableFields(index)}
                disabled={inputField.disabled}
              >
                <AddRoundedIcon
                  style={{
                    fontSize: 20,
                    color: "black",
                  }}
                />
              </button>
            </div>
            <div className="add-article-form-group">
              <button className="remove-article-btn" type="button">
                <RemoveRoundedIcon
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
