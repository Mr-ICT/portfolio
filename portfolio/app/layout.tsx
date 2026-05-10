import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tanyaradzwa Manjengwa — Full-Stack Developer",
  description:
    "Full-Stack Developer & Cloud Computing specialist. Building production-grade web, mobile, and AI-integrated platforms.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..600&family=JetBrains+Mono:wght@400;500;700&family=Sora:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}