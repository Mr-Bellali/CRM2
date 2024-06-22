import React, { useState } from "react";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import "./styles.css";

const clients = [
  "client 1",
  "client 2",
  "client 3",
  "client 4"
];

const Dropdown = ({ onSelectClient }) => {
  const [title, setTitle] = useState("");
  const [drop, setDrop] = useState(false);

  const handleClientSelect = (client) => {
    setTitle(client);
    onSelectClient(client);
    setDrop(false); 
  };

  return (
    <section className="dropdown">
      <div className="dropdown-main">
        <h1 
          onClick={() => setDrop(prev => !prev)}
          className="dropdown-title">
          {title || "choisir un client"}
          <span className={`${drop ? "rotate" : "normal"}`}>
            <ExpandMoreRoundedIcon
              style={{ fontSize: "1.6rem", pointerEvents: "none" }}
            />
          </span>
        </h1>
        <div className={`clients-data ${drop && "dropShow"}`}>
          <button type="button" className="dropdown-btn">
            ajouter client
          </button>
          <div className="dropdown-clients">
            {clients.map((client, index) => (
              <span onClick={() => handleClientSelect(client)} key={index}>
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dropdown;
