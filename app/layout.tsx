import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trading Dashboard",
  description: "Dashboard de Trading et Base de Connaissances",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
