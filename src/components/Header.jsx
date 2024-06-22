import React from "react";
import "../css/Header.css";

import Image from "next/image";
import sun from "../data/img/soleado.png";
import moon from "../data/img/luna.png";

export default function Header(props) {
  const toggleTheme = () => {
    props.setTheme(props.theme === "light" ? "dark" : "light");
  };

  return (
    <div className="header">
      <h1>Markdown Previewer</h1>
      <button
        className={`theme-button ${props.theme === "light" ? "sun" : "moon"}`}
        onClick={toggleTheme}
      >
        {props.theme === "light" ? (
          <Image src={sun} alt="sun" width={20} height={20} />
        ) : (
          <Image src={moon} alt="moon" width={20} height={20} />
        )}
      </button>
    </div>
  );
}
