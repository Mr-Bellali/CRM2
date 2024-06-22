import React, { useState, useEffect } from "react";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import "./styles.css";

const Dropdown = ({ onSelectClient }) => {
  const [title, setTitle] = useState("");
  const [drop, setDrop] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [newClientData, setNewClientData] = useState({
    nom: "",
    adresse: "",
    telephone: "",
    email: ""
  });
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const clientsFromStorage = JSON.parse(localStorage.getItem("clients")) || [];
    setClients(clientsFromStorage);
  }, []);

  const handleClientSelect = (client) => {
    setTitle(client.nom);
    onSelectClient(client);
    setDrop(false);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewClientData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleAddClient = () => {
    if (
      !newClientData.nom ||
      !newClientData.adresse ||
      !newClientData.telephone ||
      !newClientData.email
    ) {
      alert("Please fill in all fields.");
      return;
    }

    const updatedClients = [...clients, newClientData];
    localStorage.setItem("clients", JSON.stringify(updatedClients));
    setClients(updatedClients);

    setNewClientData({
      nom: "",
      adresse: "",
      telephone: "",
      email: ""
    });
    setShowModal(false);
  };

  return (
    <section className="dropdown">
      <div className="dropdown-main">
        <h1 onClick={() => setDrop((prev) => !prev)} className="dropdown-title">
          {title || "choisir un client"}
          <span className={`${drop ? "rotate" : "normal"}`}>
            <ExpandMoreRoundedIcon
              style={{ fontSize: "1.6rem", pointerEvents: "none" }}
            />
          </span>
        </h1>
        <div className={`clients-data ${drop && "dropShow"}`}>
          <button type="button" className="dropdown-btn" onClick={toggleModal}>
            ajouter client
          </button>
          <div className="dropdown-clients">
            {clients.map((client, index) => (
              <span onClick={() => handleClientSelect(client)} key={index}>
                {client.nom}
              </span>
            ))}
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal} style={{ cursor: "pointer" }}>
              &times;
            </span>
            <h2>Ajouter Client</h2>
            <form>
              <div className="input-fields-container">
                <label htmlFor="nomClient">Nom client</label>
                <input
                  type="text"
                  name="nom"
                  placeholder="Nom client"
                  value={newClientData.nom}
                  onChange={handleInputChange}
                  className="add-facture-form-control"
                />
              </div>
              <div className="input-fields-container">
                <label htmlFor="adresse">Adresse</label>
                <input
                  type="text"
                  name="adresse"
                  placeholder="Adresse"
                  value={newClientData.adresse}
                  onChange={handleInputChange}
                  className="add-facture-form-control"
                />
              </div>
              <div className="input-fields-container">
                <label htmlFor="telephone">Telephone</label>
                <input
                  type="text"
                  name="telephone"
                  placeholder="Téléphone"
                  value={newClientData.telephone}
                  onChange={handleInputChange}
                  className="add-facture-form-control"
                />
              </div>
              <div className="input-fields-container">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={newClientData.email}
                  onChange={handleInputChange}
                  className="add-facture-form-control"
                />
              </div>
              <div className="add-facture-button-container">
                <button type="button" onClick={handleAddClient} className="btn">
                  Ajouter Client
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Dropdown;
