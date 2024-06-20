import React, { Component } from "react";
import "./styles.css";

class Addarticle extends Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const idArticle = event.target.elements.idArticle.value;
    const nameArticle = event.target.elements.nameArticle.value;
    const priceArticle = event.target.elements.priceArticle.value;

    console.log("Article Submitted", { idArticle, nameArticle, priceArticle });

    event.target.elements.idArticle.value = "";
    event.target.elements.nameArticle.value = "";
    event.target.elements.priceArticle.value = "";
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit} className="addarticle-container">
        <div className="add-article-form-group">
          <label htmlFor="idArticle">id Article</label>
          <input
            type="text"
            id="idArticle"
            className="add-article-form-control"
          />
        </div>
        <div className="add-article-form-group">
          <label htmlFor="nameArticle">Name Article</label>
          <input
            type="text"
            id="nameArticle"
            className="add-article-form-control"
          />
        </div>
        <div className="add-article-form-group">
          <label htmlFor="priceArticle">Price Article</label>
          <input
            type="number"
            id="priceArticle"
            className="add-article-form-control"
          />
        </div>
        <div className="add-article-form-group">
          <label htmlFor=""></label>
          <label htmlFor=""></label>
          <label htmlFor=""></label>
          <label htmlFor=""></label>
          <button type="submit" className="add-article-btn">
            Add Article
          </button>
        </div>
      </form>
    );
  }
}

export default Addarticle;
