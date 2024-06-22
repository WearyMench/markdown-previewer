"use client";

import React from "react";
import MarkdownPreviewer from "../components/MarkdownPreviewer";
import Header from "../components/Header";
import { ThemeProvider } from "@/components/ThemeContext";

export default function Home() {
  return (
    <ThemeProvider>
      <Header />
      <MarkdownPreviewer />
    </ThemeProvider>
  );
}
