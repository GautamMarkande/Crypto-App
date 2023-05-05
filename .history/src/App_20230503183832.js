import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import CoinsPage from "./pages/Coins";
import './App.css';
import DashboardPage from "./pages/Dashboard";
import Compare from "./pages/Compare";
import React, { useState,useEffect } from "react";

const getStorageTheme = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

function App() {
  const [theme, setTheme] = useState(getStorageTheme());

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };
   useEffect(() => {
     document.documentElement.className = theme;
     localStorage.setItem("theme", theme);
   }, [theme]);
  return (
    <div className="App">
      <button className="btn" onClick={toggleTheme}>
        toggle
      </button>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Dashboard" element={<DashboardPage />} />
          <Route path="/Coins/:id" element={<CoinsPage />} />
          <Route path="/Compare" element={<Compare />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
