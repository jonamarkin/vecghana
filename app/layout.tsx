import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollObserver from "@/components/ScrollObserver";
import JsonLd from "@/components/JsonLd";

export const viewport: Viewport = {
  themeColor: "#4A154B",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://vecghana.com"),
  title: {
    default: "VocalEssence Chorale Ghana | In Harmony We Sing",
    template: "%s | VocalEssence Chorale Ghana",
  },
  description:
    "Official website, discography, and event booking platform for VocalEssence Chorale Ghana. Stream our music on Spotify, Apple Music, and YouTube.",
  keywords: [
    "VocalEssence Chorale Ghana",
    "VocalEssence Chorale",
    "VEC Ghana",
    "Ghanaian Choral Music",
    "African Choral Music",
    "Ayeyi Ndwom",
    "Harmony of a Decade",
    "Africa Sings Benin 2023",
    "Saving Hearts Project",
    "Ghanaian Highlife Choir",
    "Choir in Accra",
    "Dansoman Choir",
    "Christian Choral Ghana",
    "Choral Music Bookings Ghana",
  ],
  authors: [{ name: "VocalEssence Chorale Ghana", url: "https://vecghana.com" }],
  creator: "VocalEssence Chorale Ghana",
  publisher: "VocalEssence Chorale Ghana",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "https://vecghana.com",
  },
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "VocalEssence Chorale Ghana | In Harmony We Sing",
    description:
      "Official website and artist profile for VocalEssence Chorale Ghana. Stream our albums on Spotify & Apple Music, book us for events, and support our charity projects.",
    url: "https://vecghana.com",
    siteName: "VocalEssence Chorale Ghana",
    images: [
      {
        url: "https://vecghana.com/images/choir-7.jpg",
        width: 1200,
        height: 630,
        alt: "VocalEssence Chorale Ghana Live Concert",
      },
    ],
    locale: "en_GH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VocalEssence Chorale Ghana | In Harmony We Sing",
    description:
      "Official website, discography, and booking portal for VocalEssence Chorale Ghana.",
    images: ["https://vecghana.com/images/choir-7.jpg"],
    creator: "@vecghana",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        <JsonLd />
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
