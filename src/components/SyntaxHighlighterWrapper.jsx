import React from "react";
import { LightAsync as SyntaxHighlighter } from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const SyntaxHighlighterWrapper = ({ code }) => {
  return (
    <SyntaxHighlighter language="markdown" style={docco}>
      {code}
    </SyntaxHighlighter>
  );
};

export default SyntaxHighlighterWrapper;
