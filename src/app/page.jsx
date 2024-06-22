"use client";

import React from "react";
import MarkdownPreviewer from "../components/MarkdownPreviewer";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <MarkdownPreviewer />
    </>
  );
}
