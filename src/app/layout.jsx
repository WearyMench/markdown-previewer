import React from "react";
import "../css/globals.css";
import { Roboto } from "next/font/google";

export const metadata = {
  title: "Markdown Previewer",
  description: "A live Markdown previewer",
};

const roboto = Roboto({
  styles: ["latin"],
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
