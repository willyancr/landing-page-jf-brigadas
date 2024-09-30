import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ButtonBackToTop from "./components/button-back-to-top";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "JF Brigadas",
  description:
    "Curso de Brigadas de Incêdios, Bombeiros Civil, APH-B Prático e outros",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <ButtonBackToTop />
      </body>
    </html>
  );
}
