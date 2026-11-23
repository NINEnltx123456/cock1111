import "./globals.css";
import type { Metadata } from "react";

export const metadata: Metadata = {
  title: "Wiggle UI - Clock Widgets",
  description: "Widget dashboard for web",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}