export interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: "concerts" | "portraits" | "tours";
  title: string;
  subtitle: string;
}

export const galleryPhotos: GalleryPhoto[] = [
  {
    id: "choir-1",
    src: "/images/choir-1.jpg",
    alt: "Stage Ministration - Live on Stage at Feliz Navidad",
    caption: "Stage Ministration - Live Performance at Feliz Navidad 9",
    category: "concerts",
    title: "Stage Ministration",
    subtitle: "Live at Feliz Navidad 9",
  },
  {
    id: "choir-2",
    src: "/images/choir-2.jpg",
    alt: "VocalEssence Family - Feliz Navidad Celebration",
    caption: "VocalEssence Family - Feliz Navidad 12th Noel Production",
    category: "portraits",
    title: "VocalEssence Family",
    subtitle: "Feliz Navidad 12th Noel",
  },
  {
    id: "choir-3",
    src: "/images/choir-3.jpg",
    alt: "Harmonies of Faith - Worship Ministration",
    caption: "Harmonies of Faith - Live Worship Ministration",
    category: "concerts",
    title: "Harmonies of Faith",
    subtitle: "Live Worship Ministration",
  },
  {
    id: "choir-4",
    src: "/images/choir-4.jpg",
    alt: "Royal Splendor - Feliz Navidad XI Gowns & Tunics",
    caption: "Royal Splendor - Feliz Navidad XI Gowns & Tunics",
    category: "portraits",
    title: "Royal Splendor",
    subtitle: "Feliz Navidad XI",
  },
  {
    id: "choir-5",
    src: "/images/choir-5.jpg",
    alt: "Duet Ministration - Lead Vocalists in Harmony",
    caption: "Duet Ministration - Lead Vocalists in Harmony",
    category: "portraits",
    title: "Duet Ministration",
    subtitle: "Lead Vocalists in Harmony",
  },
  {
    id: "choir-6",
    src: "/images/choir-6.jpg",
    alt: "Vocal Ensemble - Harmonized Voices Quartet",
    caption: "Vocal Ensemble - Quartet Vocalists in Concert Attire",
    category: "portraits",
    title: "Vocal Ensemble",
    subtitle: "Quartet Ensemble",
  },
  {
    id: "choir-7",
    src: "/images/choir-7.jpg",
    alt: "Harmony of a Decade - 10th Anniversary Mega Concert",
    caption: "Harmony of a Decade - 10th Anniversary Mega Concert",
    category: "concerts",
    title: "Harmony of a Decade",
    subtitle: "10th Anniversary Mega Concert",
  },
  {
    id: "choir-8",
    src: "/images/choir-8.jpg",
    alt: "Africa Sings Festival & Live Stage - Cotonou, Benin",
    caption: "Africa Sings Festival & Live Stage - Cotonou, Benin",
    category: "tours",
    title: "Praise & International Tour",
    subtitle: "Africa Sings Festival / Live Stage",
  },
  {
    id: "choir-9",
    src: "/images/choir-9.jpg",
    alt: "Live Brass Section & Orchestra - Trumpets and Trombones",
    caption: "Live Brass Section & Orchestra - Trumpets, Trombones & Rhythm",
    category: "tours",
    title: "Brass & Orchestra",
    subtitle: "Live Instrumental Section",
  },
];
