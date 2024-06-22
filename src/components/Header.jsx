import React, { useEffect } from "react";
import "../css/Header.css";
import { useTheme } from "./ThemeContext";

import Image from "next/image";
import sun from "../data/img/sun.png";
import moon from "../data/img/luna.png";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`header ${theme === "light" ? "sun" : ""}`}>
      <h1>Markdown Previewer</h1>
      <button
        className={`theme-button ${theme === "light" ? "sun" : "moon"}`}
        onClick={toggleTheme}
      >
        {theme === "light" ? (
          <Image src={sun} alt="sun" width={20} height={20} />
        ) : (
          <Image src={moon} alt="moon" width={20} height={20} />
        )}
      </button>
    </div>
  );
}
