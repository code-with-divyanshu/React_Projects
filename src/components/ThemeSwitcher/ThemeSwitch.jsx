import React, { useState } from "react";
import UseLocalStorage from "./UseLocalStorage";
import "./theme.css";

export default function ThemeSwitch() {
  const [theme, setTheme] = UseLocalStorage("theme", "dark");

  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  console.log(theme);

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>Hello World !</p>
        <button className="btn" onClick={handleToggleTheme}>
          Switch Theme
        </button>
      </div>
    </div>
  );
}
