import React, { createContext, useState } from "react";
import { fetchImageFromUnsplash } from "../utils/fetchImage";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    name: "",
    surname: "",
    preferredTopic: "",
  });
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchImage = async (topic) => {
    if (!topic) {
      setLoading(false);
      return;
    }
    setLoading(true);
    try {
      const randomPage = Math.floor(Math.random() * 10) + 1; // Random page between 1 and 10
      const fetchedImage = await fetchImageFromUnsplash(topic, randomPage);
      if (fetchedImage) {
        setImage(fetchedImage);
      } else {
        setImage(null);
      }
    } catch (error) {
      console.error("Error fetching image", error);
      setImage(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppContext.Provider
      value={{ userData, setUserData, image, setImage, loading, fetchImage }}
    >
      {children}
    </AppContext.Provider>
  );
};
export { AppContext };
