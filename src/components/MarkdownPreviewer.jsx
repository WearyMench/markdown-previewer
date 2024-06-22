import React, { useState } from "react";
import { marked } from "marked";
import Image from "next/image";

import "../css/MarkdownPreviewer.css";
import example from "../data/example.jsx";

import copy from "../data/img/copy.png";
import download from "../data/img/download.png";
import reset from "../data/img/reset.png";
import clear from "../data/img/clear.png";

import { useTheme } from "@/components/ThemeContext";

const MarkdownPreviewer = (props) => {
  const [markdown, setMarkdown] = useState(example);
  const [fontSize, setFontSize] = useState(16);

  const { theme } = useTheme();

  const handleMarkdownChange = (e) => {
    setMarkdown(e.target.value);
  };

  const handleDownload = () => {
    const blob = new Blob([marked(markdown)], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "markdown.html";
    link.click();
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(markdown);
  };

  const resetTextarea = () => {
    setMarkdown(example);
    setFontSize(16);
  };

  return (
    <div className="main">
      <div className="boxes">
        <div className={`textareaWrapper ${theme === "light" ? "light" : ""}`}>
          <div className={`controls ${theme === "light" ? "light" : ""}`}>
            <div className="controls-input">
              <h3>Input</h3>
              <label>
                Font Size:
                <input
                  type="number"
                  value={fontSize}
                  onChange={(e) => setFontSize(parseInt(e.target.value))}
                  min="12"
                  max="24"
                />
              </label>
            </div>
            <div className="controls-buttons">
              <button
                className={`button ${theme === "light" ? "light" : ""}`}
                onClick={resetTextarea}
              >
                <Image src={reset} alt="Reset" width={15} height={15} />
              </button>
              <button
                className={`button ${theme === "light" ? "light" : ""}`}
                onClick={copyToClipboard}
              >
                <Image src={copy} alt="Copy" width={15} height={15} />
              </button>
              <button
                className={`button ${theme === "light" ? "light" : ""}`}
                onClick={() => setMarkdown("")}
              >
                <Image src={clear} alt="Clear" width={15} height={15} />
              </button>
            </div>
          </div>
          <textarea
            className={`textarea ${theme === "light" ? "light" : ""}`}
            style={{
              fontSize: `${fontSize}px`,
            }}
            value={markdown}
            onChange={handleMarkdownChange}
          />
        </div>
        <div className={`preview ${theme === "light" ? "light" : ""}`}>
          <div
            className={`controls controls-preview ${
              theme === "light" ? "light" : ""
            }`}
          >
            <h3>Preview</h3>
            <button
              className={`button ${theme === "light" ? "light" : ""}`}
              onClick={handleDownload}
            >
              <Image src={download} alt="Download" width={15} height={15} />
            </button>
          </div>
          <div
            className="preview-content"
            dangerouslySetInnerHTML={{
              __html: marked(markdown),
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default MarkdownPreviewer;
