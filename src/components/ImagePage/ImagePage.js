import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppProvider";
import "./ImagePage.css";

function ImagePage() {
  const { userData, image, loading, fetchImage } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (userData.preferredTopic) {
      fetchImage(userData.preferredTopic);
    }
  }, [userData.preferredTopic]);

  const handleReject = () => {
    fetchImage(userData.preferredTopic);
  };

  const handleAccept = () => {
    navigate("/result");
  };

  const handleTryAgain = () => {
    fetchImage(userData.preferredTopic);
  };

  return (
    <div className="image-page-container">
      {loading ? (
        <p className="loading-text">Loading...</p>
      ) : image ? (
        <div className="image-container">
          <img
            className="image-display"
            src={image.urls.regular}
            alt={image.alt_description}
            style={{
              maxHeight: "80vh",
              maxWidth: "100%",
              objectFit: "contain",
            }}
          />
          <div className="button-container">
            <button className="accept-button" onClick={handleAccept}>
              Accept
            </button>
            <button className="reject-button" onClick={handleReject}>
              Reject
            </button>
          </div>
        </div>
      ) : (
        <div className="no-image-container">
          <p className="no-image-text">No image available. Please try again.</p>
          <div className="button-container">
            <button className="try-again-button" onClick={handleTryAgain}>
              Try Again
            </button>
            <button className="go-back-button" onClick={() => navigate("/")}>
              Go Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ImagePage;
