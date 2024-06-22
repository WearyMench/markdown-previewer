import React, { useState } from "react";
import { marked } from "marked";
import SyntaxHighlighterWrapper from "./SyntaxHighlighterWrapper";
import "../css/MarkdownPreviewer.css";

const MarkdownPreviewer = () => {
  const [markdown, setMarkdown] = useState(`*This text will be italic*\n
  ## Tables

| Left columns  | Right columns |
| ------------- |:-------------:|
| left foo      | right foo     |
| left bar      | right bar     |
| left baz      | right baz     |

## Blocks of code

\`\`\`
let message = 'Hello world';
alert(message);
\`\`\`
    `);
  const [theme, setTheme] = useState("light");
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

  return (
    <div className="main">
      <div className="controls">
        <label>
          Theme:
          <select value={theme} onChange={(e) => setTheme(e.target.value)}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </label>
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
        <button onClick={handleDownload}>Download HTML</button>
      </div>
      <div className="boxes">
        <textarea
          className="textarea"
          style={{
            backgroundColor: theme === "light" ? "#fff" : "#333",
            color: theme === "light" ? "#000" : "#fff",
          }}
          value={markdown}
          onChange={handleMarkdownChange}
        />
        {/* <SyntaxHighlighterWrapper code={markdown} /> */}
        <div
          className="preview"
          style={{
            backgroundColor: theme === "light" ? "#fff" : "#333",
            color: theme === "light" ? "#000" : "#fff",
          }}
        >
          <div dangerouslySetInnerHTML={{ __html: marked(markdown) }} />
        </div>
      </div>
    </div>
  );
};

export default MarkdownPreviewer;
