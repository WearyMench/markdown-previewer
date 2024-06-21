import React, { useState } from 'react';
import {marked} from 'marked';
import SyntaxHighlighterWrapper from './SyntaxHighlighterWrapper';

const MarkdownPreviewer = () => {
  const [markdown, setMarkdown] = useState('');
  const [theme, setTheme] = useState('light');
  const [fontSize, setFontSize] = useState(16);

  const handleMarkdownChange = (e) => {
    setMarkdown(e.target.value);
  };

  const handleDownload = () => {
    const blob = new Blob([marked(markdown)], { type: 'text/html' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'markdown.html';
    link.click();
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ marginBottom: '20px' }}>
        <textarea
          style={{ width: '600px', height: '200px', fontSize: `${fontSize}px` }}
          value={markdown}
          onChange={handleMarkdownChange}
        />
        <SyntaxHighlighterWrapper code={markdown} />
      </div>
      <div>
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
      <div
        style={{
          width: '600px',
          backgroundColor: theme === 'light' ? '#fff' : '#333',
          color: theme === 'light' ? '#000' : '#fff',
          padding: '10px',
          marginTop: '20px',
          borderRadius: '5px',
        }}
      >
        <div dangerouslySetInnerHTML={{ __html: marked(markdown) }} />
      </div>
    </div>
  );
};

export default MarkdownPreviewer;