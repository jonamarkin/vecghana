import Script from "next/script";
import { albums } from "@/data/discography";

export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    "name": "VocalEssence Chorale Ghana",
    "alternateName": ["VocalEssence Chorale", "VEC Ghana"],
    "url": "https://vecghana.com",
    "logo": "https://vecghana.com/images/logo.png",
    "image": "https://vecghana.com/images/choir-7.jpg",
    "description":
      "VocalEssence Chorale Ghana is a premier Christian choral ensemble founded in 2013 in Dansoman, Accra, Ghana, dedicated to choral music excellence, Ghanaian highlife preservation, and community benevolence.",
    "foundingDate": "2013",
    "foundingLocation": {
      "@type": "Place",
      "name": "Dansoman, Accra, Ghana",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dansoman",
        "addressRegion": "Greater Accra",
        "addressCountry": "GH"
      }
    },
    "genre": [
      "Choral Music",
      "Ghanaian Choral Highlife",
      "Sacred Hymnody",
      "African Choral",
      "Classical Choral"
    ],
    "sameAs": [
      "https://open.spotify.com/artist/44LB81BhfbdhHJkogzbKyW",
      "https://music.apple.com/us/artist/vocalessence-chorale/1561470636",
      "https://audiomack.com/vocalessence-chorale",
      "https://www.youtube.com/@VocalEssenceChoraleGhana",
      "https://www.tiktok.com/@vecghana",
      "https://www.facebook.com/vecghana",
      "https://www.instagram.com/vocalessencechoraleghana/"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+233200079728",
      "contactType": "Secretariat & Bookings",
      "email": "vocalessencechorale@gmail.com",
      "areaServed": ["GH", "Worldwide"],
      "availableLanguage": ["English", "Twi", "Ga", "Fante"]
    },
    "album": albums.map((album) => ({
      "@type": "MusicAlbum",
      "name": album.title,
      "datePublished": album.year,
      "image": `https://vecghana.com${album.image}`,
      "url": album.appleMusicUrl,
      "albumReleaseType": album.tag === "EP" ? "EPRelease" : "AlbumRelease"
    }))
  };

  return (
    <Script
      id="schema-music-group"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
