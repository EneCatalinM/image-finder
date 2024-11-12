import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppProvider";
import FormPage from "./components/FormPage/FormPage";
import ImagePage from "./components/ImagePage/ImagePage";
import ResultPage from "./components/ResultPage/ResultPage";

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<FormPage />} />
          <Route path="/image" element={<ImagePage />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
