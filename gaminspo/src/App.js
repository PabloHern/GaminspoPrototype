import Home from './pages/Home.js';
import Contact from './pages/Contact.js';
import MainPage from './pages/MainPage.js';
import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mainPage" element={<MainPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
