import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./components/auth/Auth";
import Report from "./components/pages/Report";
import Attendence from "./components/pages/Attendence";
import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/report" element={<Report />} />
        <Route path="/attendence" element={<Attendence />} />
      </Routes>
    </Router>
  );
};

export default App;
