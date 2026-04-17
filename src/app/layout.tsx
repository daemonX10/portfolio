import type { Metadata } from "next";
import Analytics from "@vercel/analytics/next";
import { Bebas_Neue, Space_Grotesk } from "next/font/google";
import "./globals.css";

const displayFont = Bebas_Neue({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
});

const bodyFont = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Damodar Yadav | AI/ML Engineer Portfolio",
  description:
    "Portfolio of Damodar Yadav featuring AI/ML, deep learning, data science, SQL, and data engineering projects with code, data, media, and contact details.",
  metadataBase: new URL("https://damodar-portfolio.vercel.app"),
  openGraph: {
    title: "Damodar Yadav | AI/ML Engineer Portfolio",
    description:
      "Production-minded AI/ML engineer portfolio with projects, social proof, and contact channels.",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Damodar Yadav AI/ML Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Damodar Yadav | AI/ML Engineer Portfolio",
    description:
      "Production-minded AI/ML engineer portfolio with projects, social proof, and contact channels.",
    images: ["/twitter-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
