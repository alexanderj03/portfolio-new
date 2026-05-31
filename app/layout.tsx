import type { Metadata } from "next";
import { Space_Grotesk, Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/Navbar";
import ScrollProgressBar from "@/components/ScrollProgressBar";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alexander Jiw — Full Stack Developer",
  description:
    "Portfolio of Alexander Jiw, a full stack developer and CS graduate from UNSW.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>
          <ScrollProgressBar />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
