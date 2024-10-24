import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ClientDetails from "./pages/ClientDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/client/:id" element={<ClientDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
