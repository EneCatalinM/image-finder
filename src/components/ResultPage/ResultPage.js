import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppProvider";
import "./ResultPage.css";

function ResultPage() {
  const { userData, image } = useContext(AppContext);
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div className="result-page-container">
      <div className="result-card">
        <img
          className="result-image"
          src={image?.urls.thumb}
          alt={image?.alt_description}
        />
        <p className="result-text">Name: {userData.name}</p>
        <p className="result-text">Surname: {userData.surname}</p>
        <button className="go-back-button" onClick={handleGoBack}>
          Go Back
        </button>
      </div>
    </div>
  );
}

export default ResultPage;
