import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Social from "./components/Social";

export const metadata: Metadata = {
  title: "Portfolio 2",
  description: "Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Social/>
      </body>
    </html>
  );
}
