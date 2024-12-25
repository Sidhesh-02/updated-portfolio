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
      <body className="">
        <div className="bg-animation">
					<div id='stars'></div>
					<div id='stars2'></div>
					<div id='stars3'></div>
					<div id='stars4'></div>
				</div>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
