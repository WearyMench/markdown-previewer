"use client";

import React, { useState } from "react";
import MarkdownPreviewer from "../components/MarkdownPreviewer";
import Header from "../components/Header";

export default function Home() {
  const [theme, setTheme] = useState("dark");
  return (
    <>
      <Header theme={theme} setTheme={setTheme} />
      <MarkdownPreviewer theme={theme} />
    </>
  );
}
