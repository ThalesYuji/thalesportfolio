import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { mamboe } from "./fonts";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thales Nishikawa | Motion Designer & Video Editor",
  description: "Portfolio de Thales Yuji Nishikawa - Motion Designer e Video Editor especializado em edições dinâmicas, anime motion edits e sincronização audiovisual. Mais de 4 anos de experiência.",
  keywords: ["motion designer", "video editor", "editor de vídeo", "anime edits", "after effects", "premiere pro"],
  authors: [{ name: "Thales Yuji Nishikawa" }],
  creator: "Thales Yuji Nishikawa",
  openGraph: {
    title: "Thales Nishikawa | Motion Designer & Video Editor",
    description: "Portfolio de Thales Yuji Nishikawa - Motion Designer e Video Editor especializado em edições dinâmicas",
    url: "https://edicaoportfolio.com.br",
    siteName: "Thales Nishikawa Portfolio",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thales Nishikawa | Motion Designer & Video Editor",
    description: "Portfolio de Thales Yuji Nishikawa - Motion Designer e Video Editor",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={mamboe.variable}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}