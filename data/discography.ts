export interface Album {
  id: string;
  title: string;
  year: string;
  genre: string;
  description: string;
  tracksPreview: string;
  image: string;
  spotifyUrl: string;
  appleMusicUrl: string;
  youtubeUrl?: string;
  tag?: string;
  featured?: boolean;
}

export const albums: Album[] = [
  {
    id: "ayeyi-ndwom",
    title: "Ayeyi Ndwom",
    year: "2026",
    genre: "Ghanaian Choral & Praise",
    description: "Featuring beloved tracks including Yesu Megyefo Ne Wo (feat. Nii Okai) and our acclaimed Choral Highlife Praise Medley.",
    tracksPreview: "Key Tracks: Yesu Megyefo Ne Wo (feat. Nii Okai), Choral Highlife Praise Medley, Aseda Dwom.",
    image: "/images/choir-2.jpg",
    spotifyUrl: "https://open.spotify.com/artist/44LB81BhfbdhHJkogzbKyW",
    appleMusicUrl: "https://music.apple.com/us/artist/vocalessence-chorale/1561470636",
    youtubeUrl: "https://www.youtube.com/@VocalEssenceChoraleGhana",
    tag: "Praise & Worship",
    featured: true,
  },
  {
    id: "harmony-of-a-decade",
    title: "Harmony of a Decade (Live)",
    year: "2024",
    genre: "10th Anniversary Live Album",
    description: "Our milestone 10th-anniversary celebration album capturing spirit-filled live choral praise, classical choral orchestrations, and heartfelt worship.",
    tracksPreview: "Key Tracks: 14 soul-stirring live anthems celebrating 10 years of divine grace, full choral orchestra, and congregational praise.",
    image: "/images/choir-7.jpg",
    spotifyUrl: "https://open.spotify.com/artist/44LB81BhfbdhHJkogzbKyW",
    appleMusicUrl: "https://music.apple.com/us/artist/vocalessence-chorale/1561470636",
    youtubeUrl: "https://www.youtube.com/@VocalEssenceChoraleGhana",
    tag: "10th Anniversary",
    featured: true,
  },
  {
    id: "carols-from-vec-ii",
    title: "Carols From VEC II",
    year: "2025",
    genre: "Christmas & Festive Anthems",
    description: "Timeless Christmas carols and classical nativity anthems arranged with Ghanaian rhythms from our Feliz Navidad concerts.",
    tracksPreview: "Key Tracks: O Holy Night, Joy to the World (African Cadence), The First Noel, Christmas Medley.",
    image: "/images/choir-1.jpg",
    spotifyUrl: "https://open.spotify.com/artist/44LB81BhfbdhHJkogzbKyW",
    appleMusicUrl: "https://music.apple.com/us/artist/vocalessence-chorale/1561470636",
    youtubeUrl: "https://www.youtube.com/@VocalEssenceChoraleGhana",
  },
  {
    id: "the-strife-is-oer",
    title: "The Strife Is O'er",
    year: "2022",
    genre: "Easter & Sacred Classics",
    description: "A triumphant and reflective Easter collection capturing the passion, death, and glorious resurrection of Christ.",
    tracksPreview: "Key Tracks: Sanctus (Mass of the Sacred Heart), The Strife Is O'er, Christ The Lord Is Risen.",
    image: "/images/choir-3.jpg",
    spotifyUrl: "https://open.spotify.com/artist/44LB81BhfbdhHJkogzbKyW",
    appleMusicUrl: "https://music.apple.com/us/artist/vocalessence-chorale/1561470636",
  },
  {
    id: "oman-ghana",
    title: "Oman Ghana",
    year: "2020",
    genre: "Patriotic & Heritage Choral",
    description: "An iconic national heritage compilation honoring the motherland with full choral harmony and brass orchestra.",
    tracksPreview: "Key Tracks: Ghana Nyigba, Ghana National Anthem (All 3 Stanzas), Yen Ara Asaase Ni.",
    image: "/images/choir-8.jpg",
    spotifyUrl: "https://open.spotify.com/artist/44LB81BhfbdhHJkogzbKyW",
    appleMusicUrl: "https://music.apple.com/us/artist/vocalessence-chorale/1561470636",
  },
  {
    id: "nyame-ye-osahen",
    title: "Nyame Ye Osahen",
    year: "2017",
    genre: "Inaugural Debut Album",
    description: "The choir's debut milestone recording that introduced VocalEssence Chorale to Ghana and the world.",
    tracksPreview: "Key Tracks: Nyame Ye Osahen, Awurade W'ahenie So, Meda Wase.",
    image: "/images/choir-4.jpg",
    spotifyUrl: "https://open.spotify.com/artist/44LB81BhfbdhHJkogzbKyW",
    appleMusicUrl: "https://music.apple.com/us/artist/vocalessence-chorale/1561470636",
  },
];
