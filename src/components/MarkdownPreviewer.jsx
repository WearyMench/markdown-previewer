import React, { useState } from "react";
import { marked } from "marked";
import Image from "next/image";

import "../css/MarkdownPreviewer.css";
import example from "../data/example.jsx";

import copy from "../data/img/copy.png";
import download from "../data/img/download.png";
import reset from "../data/img/reset.png";
import clear from "../data/img/clear.png";

const MarkdownPreviewer = (props) => {
  const [markdown, setMarkdown] = useState(example);
  const [fontSize, setFontSize] = useState(16);

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
        <div className="textareaWrapper">
          <div className="controls">
            <h3>Input</h3>
            <button className="button" onClick={resetTextarea}>
              <Image src={reset} alt="Reset" width={15} height={15} />
            </button>
            <button className="button" onClick={copyToClipboard}>
              <Image src={copy} alt="Copy" width={15} height={15} />
            </button>
            <button className="button" onClick={() => setMarkdown("")}>
              <Image src={clear} alt="Clear" width={15} height={15} />
            </button>
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
          <textarea
            className="textarea"
            style={{
              fontSize: `${fontSize}px`,
            }}
            value={markdown}
            onChange={handleMarkdownChange}
          />
        </div>
        <div className="preview">
          <div className="controls controls-preview">
            <h3>Preview</h3>
            <button className="button" onClick={handleDownload}>
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
