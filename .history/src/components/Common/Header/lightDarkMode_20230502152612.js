import React, { useState, useEffect } from "react";
import "./App.css";

function LightAndDa() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const isDark = localStorage.getItem("dark") === "true";
    setIsDarkMode(isDark);
  }, []);

  useEffect(() => {
    localStorage.setItem("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <div className={`App ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <header className="App-header">
        <h1>Crypto Tracker</h1>
        <label className="switch">
          <input type="checkbox" checked={isDarkMode} onChange={toggleMode} />
          <span className="slider round"></span>
        </label>
      </header>
      <main>
        <p>Welcome to the Crypto Tracker website!</p>
        <p>Here you can track real-time cryptocurrency prices and more.</p>
      </main>
    </div>
  );
}

export default App;
