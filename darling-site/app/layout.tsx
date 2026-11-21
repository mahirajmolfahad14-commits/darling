import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "For you", description: "Something written only for you.", robots: { index: false, follow: false } };
export const viewport: Viewport = { themeColor: "#14040a", width: "device-width", initialScale: 1, viewportFit: "cover" };

const FONTS =
  "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&family=Pinyon+Script&display=swap";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={FONTS} />
      </head>
      <body>{children}</body>
    </html>
  );
}
