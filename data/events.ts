export interface ConcertDonation {
  badge: string;
  beneficiary: string;
  location: string;
  summary: string;
  network: string;
  number: string;
  numberDisplay: string;
  ussdName: string;
  appName: string;
}

export const concertDonation: ConcertDonation = {
  badge: "Christmas Outreach",
  beneficiary: "Methodist Rafiki Satellite Village",
  location: "Gyaahadze, Winneba",
  summary:
    "As part of this year's Christmas in Africa concert, VocalEssence Chorale Ghana will be making a donation to the Methodist Rafiki Satellite Village in Winneba. You can partner with us and support the children by sending a monetary donation via MTN MoMo.",
  network: "MTN Mobile Money (MoMo)",
  number: "0598552988",
  numberDisplay: "059 855 2988",
  ussdName: "VOCALESSENCE CHORALE",
  appName: "DERECK BONNEY",
};

export interface EventItem {
  id: string;
  title: string;
  subtitle?: string;
  badge: string;
  description: string;
  extraDescription?: string;
  image: string;
  portraitImage?: string;
  dateInfo?: string;
  timeInfo?: string;
  location?: string;
  admission?: string;
  isUpcoming?: boolean;
  links?: {
    primaryText: string;
    primaryUrl: string;
    secondaryText?: string;
    secondaryUrl?: string;
  };
}

export const upcomingConcert: EventItem = {
  id: "feliz-navidad-xiii-2026",
  title: "Christmas in Africa (Feliz Navidad XIII)",
  subtitle:
    "The Greatest Story ever told, wrapped in the vibrant colours, awe-striking rhythm, and rich harmonies of Africa.",
  badge: "Upcoming Concert • Feliz Navidad XIII",
  dateInfo: "Friday, 4th December 2026 (Farmers' Day)",
  timeInfo: "5:00 PM (Doors open early)",
  location: "Victory Bible Church Int., Awoshie Baah Yard",
  admission: "Free Entry",
  description:
    "Experience the warmth, rhythm, and harmony of the season at Christmas in Africa (Feliz Navidad XIII), the annual pre-Christmas concert by VocalEssence Chorale Ghana. Join us at Victory Bible Church Int., Awoshie Baah Yard, for an unforgettable evening of rich African choral music, classic Christmas carols, and joyful celebration.",
  extraDescription:
    "This Farmers' Day holiday, take a break and join us for an unforgettable celebration of Christ, Culture, and Music. Entry is completely free, and doors open early, so bring your family, friends, and loved ones and come grab a good seat.",
  image: "/images/feliz-navidad-xiii-landscape.jpg",
  portraitImage: "/images/feliz-navidad-xiii-portrait.jpg",
  isUpcoming: true,
  links: {
    primaryText: "Get Directions",
    primaryUrl:
      "https://www.google.com/maps/search/?api=1&query=Victory+Bible+Church+International+Awoshie+Baah+Yard+Accra",
    secondaryText: "Contact Us",
    secondaryUrl: "/contact",
  },
};

export const events: EventItem[] = [
  upcomingConcert,
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
    description: "Feliz Navidad is VocalEssence Chorale's premier annual Christmas experience (spanning acclaimed editions including Feliz Navidad 9, Feliz Navidad XI, Feliz Navidad 12th Noel, and Feliz Navidad XIII: Christmas in Africa). It brings families and music enthusiasts together for an evening of festive grandeur, classical carols, Ghanaian highlife arrangements, and nativity drama.",
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
