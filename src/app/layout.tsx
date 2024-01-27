import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import "./globals.css";

import Header from "../components/header";

const roboto = Roboto({ 
  weight: ['300', '400', '700'],
  subsets: ["latin"] ,
});

export const metadata: Metadata = {
  title: "Portal do Colaborador",
  description: "Site para o portal de colaboradores",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
          {children}
      </body>
    </html>
  );
}
