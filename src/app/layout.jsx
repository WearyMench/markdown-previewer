import React from "react";
export const metadata = {
  title: "Markdown Previewer",
  description: "A live Markdown previewer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}