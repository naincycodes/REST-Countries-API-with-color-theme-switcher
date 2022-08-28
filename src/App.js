import React from "react";
import { Route, Routes } from "react-router-dom"
import "./App.css";
import nightMode from "./images/night-mode.png";
import Home from "./Home";
import IndividualCountryCard from "./IndividualCountryCard";

function App() {

  return (
    <>
      <nav>
        <h1>Where in the world?</h1>
        <div className="dark-mode">
          <img src={nightMode} alt="dark mode icon" />
          <p>Dark Mode</p>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:country" element={<IndividualCountryCard />} />
      </Routes>
    </>
  );
}

export default App;
