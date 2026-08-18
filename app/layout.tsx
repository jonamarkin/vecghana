import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollObserver from "@/components/ScrollObserver";

export const metadata: Metadata = {
  metadataBase: new URL("https://vecghana.com"),
  title: "VocalEssence Chorale Ghana | In Harmony We Sing",
  description:
    "Official profile, discography, events, and booking platform of VocalEssence Chorale Ghana. Stream on Spotify, Apple Music, and YouTube.",
  keywords: [
    "VocalEssence Chorale Ghana",
    "Ghana Choir",
    "Choral Music Ghana",
    "African Choral",
    "Ayeyi Ndwom",
    "Africa Sings Benin 2023",
    "Saving Hearts Project",
    "Choral Highlife",
  ],
  authors: [{ name: "VocalEssence Chorale Ghana" }],
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "VocalEssence Chorale Ghana | In Harmony We Sing",
    description:
      "Official website and artist profile for VocalEssence Chorale Ghana. Listen to our albums, book us for events, and support our ministry.",
    url: "https://vecghana.com",
    siteName: "VocalEssence Chorale Ghana",
    images: [
      {
        url: "/images/choir-7.jpg",
        width: 1200,
        height: 630,
        alt: "VocalEssence Chorale Ghana Live Concert",
      },
    ],
    locale: "en_GH",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ScrollObserver />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
