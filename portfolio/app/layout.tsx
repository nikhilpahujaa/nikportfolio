import type { Metadata } from "next";
import { Pixelify_Sans, Instrument_Serif, Raleway } from "next/font/google";
import "./globals.css";

// Display — pixel serif (substitute for PP Mondwest). The "logo" voice.
const pixelify = Pixelify_Sans({
  subsets: ["latin"],
  variable: "--font-pixelify",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

// Body — warmth + legibility, reads like a personal letter.
const instrument = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
  weight: ["400"],
  style: ["normal", "italic"],
});

// Tag labels — slim, technical, signals precision.
const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Nikhil Pahuja — Backend & AI Engineer",
  description:
    "Backend Developer with 2+ years of experience building production-grade AI-integrated platforms and cloud-native APIs using Node.js, FastAPI, Python, Docker, PostgreSQL, and MongoDB — shipped on Azure with real traffic.",
  keywords: [
    "Backend Developer",
    "AI Engineer",
    "Node.js",
    "FastAPI",
    "Python",
    "Docker",
    "PostgreSQL",
    "MongoDB",
    "Gurgaon",
    "India",
  ],
  authors: [{ name: "Nikhil Pahuja" }],
  openGraph: {
    title: "Nikhil Pahuja — Backend & AI Engineer",
    description:
      "Building production-grade AI-integrated platforms and cloud-native APIs.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${pixelify.variable} ${instrument.variable} ${raleway.variable}`}
    >
      <body className="antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}
