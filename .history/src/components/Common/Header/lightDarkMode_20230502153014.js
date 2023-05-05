import React, { useState, useEffect } from "react";
import "./style.css";

function LightAndDarkMode() {
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
    <div
      className={`LightAndDarkMode ${isDarkMode ? "dark-mode" : "light-mode"}`}
    >
      <label className="switch">
        <input type="checkbox" checked={isDarkMode} onChange={toggleMode} />
        <span className="slider round"></span>
      </label>
    </div>
  );
}

export default LightAndDarkMode;
