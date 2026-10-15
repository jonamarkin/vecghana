export interface ProgramItem {
  title: string;
  desc: string;
  image: string;
  link: string;
}

export interface StatItem {
  num: string;
  text: string;
}

export interface HomeContent {
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    stats: Array<{ value: string; label: string }>;
    featuredTrack: {
      tag: string;
      title: string;
      href: string;
    };
    image: {
      src: string;
      alt: string;
    };
  };
  whoWeAre: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    titleLine3: string;
    paragraphs: string[];
    learnMoreHref: string;
    featureImage: { src: string; alt: string };
    missionCard: {
      title: string;
      desc: string;
      image: string;
      href: string;
    };
    visionCard: {
      title: string;
      desc: string;
      image: string;
      href: string;
    };
  };
  statsBar: StatItem[];
  essence: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    image: { src: string; alt: string };
    buttonLabel: string;
    buttonHref: string;
  };
  internationalTour: {
    badge: string;
    title: string;
    description: string;
    dates: string;
    image: { src: string; alt: string };
    tourLink: string;
    videoLink: string;
  };
  programs: ProgramItem[];
  impactBanner: {
    badge: string;
    title: string;
    description: string;
    buttonLabel: string;
    buttonHref: string;
    image: { src: string; alt: string };
  };
}

export const homeContent: HomeContent = {
  hero: {
    badge: "EST. 2013 • VOCALESSENCE CHORALE GHANA",
    titleLine1: "In Harmony.",
    titleLine2: "We Sing.",
    description:
      "VocalEssence Chorale Ghana is a passionate community of voices spreading faith, cultural heritage, and choral excellence across Ghana and the world through inspiring sacred and highlife ministrations.",
    primaryCta: {
      label: "Explore Music",
      href: "/music",
    },
    secondaryCta: {
      label: "Book Us",
      href: "/contact",
    },
    stats: [
      { value: "13+", label: "Years" },
      { value: "10+", label: "Albums" },
      { value: "100+", label: "Choristers" },
    ],
    featuredTrack: {
      tag: "Featured Release",
      title: "Ayeyi Ndwom",
      href: "/music#ayeyi-ndwom",
    },
    image: {
      src: "/images/choir-1.jpg",
      alt: "VocalEssence Chorale Ghana performing live on stage in royal vestments",
    },
  },

  whoWeAre: {
    badge: "Who We Are",
    titleLine1: "A Community",
    titleLine2: "Built on Faith,",
    titleLine3: "Excellence & Love",
    paragraphs: [
      "Founded with a vision to raise a generation of worshipers and ambassadors of Christ through excellence in choral music.",
      "We use our music to make a positive and lasting difference in our communities and beyond.",
    ],
    learnMoreHref: "/about",
    featureImage: {
      src: "/images/choir-2.jpg",
      alt: "VocalEssence Chorale Fellowship",
    },
    missionCard: {
      title: "Our Mission",
      desc: "To glorify God, inspire hearts, and make a difference through the power of music.",
      image: "/images/choir-3.jpg",
      href: "/about",
    },
    visionCard: {
      title: "Our Vision",
      desc: "To be a leading choir that impacts nations and transforms lives.",
      image: "/images/choir-5.jpg",
      href: "/about",
    },
  },

  statsBar: [
    { num: "13+", text: "Years of Ministry" },
    { num: "100+", text: "Performances" },
    { num: "500+", text: "Voices Impacted" },
    { num: "1", text: "Purpose" },
    { num: "4M+", text: "Estimated Digital Streams" },
    { num: "23K+", text: "Estimated Online Following" },
  ],

  essence: {
    badge: "Our Essence",
    titleLine1: "Harmony in Faith.",
    titleLine2: "Excellence in Sound.",
    description:
      "We blend rich harmonies with heartfelt worship, lifting voices that touch lives and glorify God. Every note we sing carries a message of hope, love, and transformation.",
    image: {
      src: "/images/choir-6.jpg",
      alt: "Harmony in Faith",
    },
    buttonLabel: "About Us",
    buttonHref: "/about",
  },

  internationalTour: {
    badge: "International Tour Spotlight",
    title: "7th Africa Sings Festival | Cotonou, Benin",
    dates: "October 11–15, 2023",
    description:
      "From October 11–15, 2023, VocalEssence Chorale Ghana proudly represented our nation at the 7th Edition of the Africa Sings Festival in Cotonou, Benin — sharing African choral harmonies, magnifying faith, and celebrating cultural unity across the continent.",
    image: {
      src: "/images/choir-8.jpg",
      alt: "Africa Sings Festival Cotonou Benin",
    },
    tourLink: "/events",
    videoLink: "https://www.tiktok.com/@vecghana/video/7289724643567602950",
  },

  programs: [
    {
      title: "Worship & Concerts",
      desc: "Spirit-filled ministrations that inspire and uplift.",
      image: "/images/choir-7.jpg",
      link: "/events",
    },
    {
      title: "Outreach & Donations",
      desc: "Serving communities through acts of love and compassion.",
      image: "/images/choir-4.jpg",
      link: "/impact",
    },
    {
      title: "Workshops & Training",
      desc: "Raising and equipping the next generation.",
      image: "/images/choir-2.jpg",
      link: "/about",
    },
    {
      title: "Collaborations",
      desc: "Partnering with churches and organizations.",
      image: "/images/choir-8.jpg",
      link: "/events",
    },
    {
      title: "Recordings",
      desc: "Creating timeless music that spreads the message.",
      image: "/images/choir-9.jpg",
      link: "/music",
    },
  ],

  impactBanner: {
    badge: "Our Impact",
    title: "Music That Changes Lives",
    description:
      "From widows and orphanages to Korle Bu Children's Unit and the Saving Hearts Project, our music goes beyond the stage to touch hearts and transform lives.",
    buttonLabel: "See Our Impact",
    buttonHref: "/impact",
    image: {
      src: "/images/choir-4.jpg",
      alt: "Music That Changes Lives",
    },
  },
};
