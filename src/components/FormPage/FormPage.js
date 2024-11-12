import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./FormPage.css";
import { AppContext } from "../../context/AppProvider";

function FormPage() {
  const { setUserData } = useContext(AppContext);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [topic, setTopic] = useState("Travel");
  const [customTopic, setCustomTopic] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const preferredTopic = topic === "Other" ? customTopic : topic;
    setUserData({ name, surname, preferredTopic });
    navigate("/image");
  };

  return (
    <div className="form-page-container">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-input"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            className="form-input"
            placeholder="Surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            required
          />
          <select
            className="form-input"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          >
            <option value="Travel">Travel</option>
            <option value="Cars">Cars</option>
            <option value="Wildlife">Wildlife</option>
            <option value="Technology">Technology</option>
            <option value="Other">Other</option>
          </select>
          {topic === "Other" && (
            <input
              type="text"
              className="form-input"
              placeholder="Enter your topic"
              value={customTopic}
              onChange={(e) => setCustomTopic(e.target.value)}
              required
            />
          )}
          <button type="submit" className="form-button">
            Find Image
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormPage;
