import Home from './pages/Home.js';
import Contact from './pages/Contact.js';
import MainPage from './pages/MainPage.js';
import MainPagenolog from './pages/MainPagenolog.js';
import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import YourCollection from './pages/YourCollection.js';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mainPage" element={<MainPage />} />
        <Route path="/mainPageNoLog" element={<MainPagenolog />} />
        <Route path="/yourCollection" element={<YourCollection />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
