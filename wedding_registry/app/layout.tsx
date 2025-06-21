import type { Metadata } from "next";

import "./globals.css";


export const metadata: Metadata = {
  title: "Wedding Registry",
  description: "Timothy and Gracies Wedding Registry for 2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}
