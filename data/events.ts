export interface EventItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  image: string;
  dateInfo?: string;
  location?: string;
  links?: {
    primaryText: string;
    primaryUrl: string;
    secondaryText?: string;
    secondaryUrl?: string;
  };
}

export const events: EventItem[] = [
  {
    id: "africa-sings-benin-2023",
    title: "7th Edition of Africa Sings Festival | Cotonou, Benin",
    badge: "Continental Representation",
    dateInfo: "October 11–15, 2023",
    location: "Cotonou, Republic of Benin",
    description: "VocalEssence Chorale Ghana was honored to represent the nation of Ghana at the 7th Edition of the Africa Sings Festival in Cotonou, Benin. This high-profile pan-African festival convened premier choral ensembles from across West Africa and beyond to foster cultural unity and glorify God through African harmonies.",
    image: "/images/choir-8.jpg",
    links: {
      primaryText: "Watch on TikTok",
      primaryUrl: "https://www.tiktok.com/@vecghana",
      secondaryText: "Tour Photo Gallery",
      secondaryUrl: "/gallery",
    },
  },
  {
    id: "feliz-navidad-series",
    title: "Feliz Navidad Christmas Concert Series",
    badge: "Annual Flagship Event • Every December",
    description: "Feliz Navidad is VocalEssence Chorale's premier annual Christmas experience (spanning acclaimed editions including Feliz Navidad 9, Feliz Navidad XI, and Feliz Navidad 12th Noel). It brings families and music enthusiasts together for an evening of festive grandeur, classical carols, Ghanaian highlife arrangements, and nativity drama.",
    image: "/images/choir-1.jpg",
    links: {
      primaryText: "Watch Highlights",
      primaryUrl: "https://www.youtube.com/@VocalEssenceChoraleGhana",
      secondaryText: "View Concert Photos",
      secondaryUrl: "/gallery",
    },
  },
  {
    id: "harmony-of-a-decade",
    title: "Harmony of a Decade (10th Anniversary Concert)",
    badge: "Landmark Milestone • 10th Anniversary Celebration",
    description: "A monumental milestone celebrating 10 years of divine grace and impact. The concert gathered hundreds of patrons and choral lovers for a night of orchestral anthems, live album recording, and the official launch of our Saving Hearts Project with Korle Bu.",
    image: "/images/choir-7.jpg",
    links: {
      primaryText: "Stream Live Album",
      primaryUrl: "/music",
      secondaryText: "Saving Hearts Project",
      secondaryUrl: "/impact",
    },
  },
  {
    id: "easter-cantatas",
    title: "The Easter Experience & Cantatas",
    badge: "Seasonal Production • Easter Period",
    description: "Reflective and triumphant ministrations commemorating the passion, death, and resurrection of our Lord Jesus Christ through classical passion music, hymns of the cross, and resurrection anthems.",
    image: "/images/choir-3.jpg",
    links: {
      primaryText: "Explore Easter Releases",
      primaryUrl: "/music",
    },
  },
];
