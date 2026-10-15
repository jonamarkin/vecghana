export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}

export interface StreamingPlatform {
  name: string;
  url: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  subTagline: string;
  establishedYear: string;
  location: string;
  contact: {
    phone: string;
    phoneDisplay: string;
    email: string;
    bookingEmail: string;
    address: string;
  };
  socialLinks: {
    facebook: string;
    instagram: string;
    youtube: string;
    tiktok: string;
  };
  streamingLinks: {
    spotify: string;
    appleMusic: string;
    audiomack: string;
    youtube: string;
  };
  navigation: Array<{
    name: string;
    href: string;
  }>;
}

export const siteConfig: SiteConfig = {
  name: "VocalEssence Chorale Ghana",
  shortName: "VEC Ghana",
  tagline: "In Harmony. We Sing.",
  subTagline: "To God be the Glory, We sing to inspire, impact, and ignite a passion for Christ through music.",
  establishedYear: "2013",
  location: "Dansoman, Accra, Ghana",
  contact: {
    phone: "+233200079728",
    phoneDisplay: "+233 20 007 9728",
    email: "info@vecghana.com",
    bookingEmail: "bookings@vecghana.com",
    address: "Dansoman, Accra, Greater Accra Region, Ghana",
  },
  socialLinks: {
    facebook: "https://www.facebook.com/vecghana",
    instagram: "https://www.instagram.com/vocalessencechoraleghana/",
    youtube: "https://www.youtube.com/@VocalEssenceChoraleGhana",
    tiktok: "https://www.tiktok.com/@vecghana",
  },
  streamingLinks: {
    spotify: "https://open.spotify.com/artist/44LB81BhfbdhHJkogzbKyW",
    appleMusic: "https://music.apple.com/us/artist/vocalessence-chorale/1561470636",
    audiomack: "https://audiomack.com/vocalessence-chorale",
    youtube: "https://www.youtube.com/@VocalEssenceChoraleGhana",
  },
  navigation: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Music", href: "/music" },
    { name: "Events", href: "/events" },
    { name: "Outreach", href: "/impact" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ],
};
